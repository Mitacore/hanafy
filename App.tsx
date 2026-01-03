
import React, { useState, useEffect, useCallback } from 'react';
import { 
  AspectRatio, 
  ModelType, 
  MockupItem, 
  GeneratorConfig 
} from './types';
import { generateMockup } from './services/gemini';
import Header from './components/Header';
import EditorPanel from './components/EditorPanel';
import MockupPreview from './components/MockupPreview';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [history, setHistory] = useState<MockupItem[]>([]);
  const [currentMockup, setCurrentMockup] = useState<MockupItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check initial history from local storage
  useEffect(() => {
    const saved = localStorage.getItem('visionmock_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  const saveToHistory = useCallback((item: MockupItem) => {
    setHistory(prev => {
      const newHistory = [item, ...prev].slice(0, 50);
      localStorage.setItem('visionmock_history', JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  const handleGenerate = async (config: GeneratorConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await generateMockup(config);
      
      const newItem: MockupItem = {
        id: Math.random().toString(36).substr(2, 9),
        url: result.imageUrl,
        prompt: config.prompt,
        model: ModelType.FLASH,
        timestamp: Date.now(),
        aspectRatio: config.aspectRatio
      };

      setCurrentMockup(newItem);
      saveToHistory(newItem);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar: Controls */}
        <div className="w-full lg:w-96 border-r border-slate-800 bg-slate-900/50 flex flex-col overflow-y-auto">
          <EditorPanel 
            onGenerate={handleGenerate} 
            isLoading={isLoading} 
          />
          <div className="mt-auto p-4 border-t border-slate-800">
             <div className="text-xs text-slate-500 text-center">
                Powered by Gemini Vision Engine
             </div>
          </div>
        </div>

        {/* Center: Preview Area */}
        <div className="flex-1 flex flex-col p-4 lg:p-8 bg-slate-950 relative overflow-y-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm animate-pulse">
              {error}
            </div>
          )}

          <MockupPreview 
            mockup={currentMockup} 
            isLoading={isLoading} 
          />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Recent Creations
            </h2>
            <Gallery 
              items={history} 
              onSelect={setCurrentMockup} 
              activeId={currentMockup?.id} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
