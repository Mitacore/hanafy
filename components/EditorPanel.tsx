
import React, { useState, useRef } from 'react';
import { AspectRatio, ModelType, CameraAngle, GeneratorConfig } from '../types';

interface EditorPanelProps {
  onGenerate: (config: GeneratorConfig) => void;
  isLoading: boolean;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [cameraAngle, setCameraAngle] = useState<CameraAngle>(CameraAngle.EYE_LEVEL);
  const [creativeMode, setCreativeMode] = useState(false);
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt && !sourceImage) return;

    onGenerate({
      prompt: prompt || "A premium product mockup on a neutral background, professional studio lighting",
      model: ModelType.FLASH,
      aspectRatio: AspectRatio.SQUARE,
      cameraAngle,
      sourceImage: sourceImage || undefined,
      creativeMode
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-8">
      {/* Creative Freedom Toggle (Opposite of previous Preservation toggle) */}
      <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
        <div>
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Creative Interpretation</label>
          <p className="text-[10px] text-slate-500">Allow AI to stylize & transform the design</p>
        </div>
        <button
          type="button"
          onClick={() => setCreativeMode(!creativeMode)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${creativeMode ? 'bg-indigo-600' : 'bg-slate-700'}`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${creativeMode ? 'translate-x-6' : 'translate-x-1'}`}
          />
        </button>
      </div>

      {/* Prompt Area */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mockup Environment</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. A book cover mockup on a velvet surface..."
          className="w-full h-24 bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
        />
      </div>

      {/* Camera Angle Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Camera Perspective</label>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(CameraAngle).map(([key, value]) => (
            <button
              key={value}
              type="button"
              onClick={() => setCameraAngle(value)}
              className={`flex items-center gap-2 py-2 px-3 rounded-lg text-[10px] font-bold border transition-all ${cameraAngle === value ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400 shadow-sm shadow-indigo-500/10' : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-600'}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${cameraAngle === value ? 'bg-indigo-400' : 'bg-slate-600'}`}></div>
              {value.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Source Image (Optional) */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Design / Graphic</label>
        <div 
          onClick={() => fileInputRef.current?.click()}
          className={`group cursor-pointer border-2 border-dashed rounded-xl p-4 transition-all flex flex-col items-center justify-center gap-2 ${sourceImage ? 'border-indigo-500/50 bg-indigo-500/5' : 'border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800'}`}
        >
          {sourceImage ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <img src={sourceImage} alt="Source" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-xs font-medium text-white">Change Image</span>
              </div>
            </div>
          ) : (
            <>
              <svg className="w-6 h-6 text-slate-500 group-hover:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-xs text-slate-500 group-hover:text-slate-400">Upload screenshot or design</span>
            </>
          )}
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || (!prompt && !sourceImage)}
        className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
          isLoading 
            ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 active:scale-[0.98]'
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Mockup...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate Showcase
          </>
        )}
      </button>
    </form>
  );
};

export default EditorPanel;
