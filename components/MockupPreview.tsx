
import React from 'react';
import { MockupItem } from '../types';

interface MockupPreviewProps {
  mockup: MockupItem | null;
  isLoading: boolean;
}

const MockupPreview: React.FC<MockupPreviewProps> = ({ mockup, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full aspect-square rounded-3xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-indigo-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
             </div>
          </div>
        </div>
        <div className="text-center z-10">
          <h3 className="text-lg font-bold text-slate-200">Processing Mockup</h3>
          <p className="text-sm text-slate-500 mt-2">Integrating design into the scene...</p>
        </div>
        <div className="absolute bottom-8 flex gap-2">
           {[0, 1, 2].map((i) => (
             <div key={i} className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
           ))}
        </div>
      </div>
    );
  }

  if (!mockup) {
    return (
      <div className="w-full aspect-square rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center p-12 text-center">
        <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-indigo-400">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-300 mb-2">Showcase Engine</h2>
        <p className="max-w-md text-slate-500 leading-relaxed">
          Describe your environment and upload your design to create professional-grade visual mockups.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center group">
      <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 ring-1 ring-white/5 aspect-square flex items-center justify-center">
        <img 
          src={mockup.url} 
          alt={mockup.prompt} 
          className="w-full h-full object-cover block"
        />
        
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = mockup.url;
              link.download = `mockup-${mockup.id}.png`;
              link.click();
            }}
            className="p-3 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full text-white transition-all shadow-xl"
            title="Download PNG"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="w-full mt-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 flex items-center justify-between gap-4">
        <div className="flex-1">
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Generated Prompt</span>
          <p className="text-sm text-slate-300 italic">"{mockup.prompt}"</p>
        </div>
        <div className="flex gap-4 shrink-0 text-right">
           <div>
             <span className="text-[10px] font-bold text-slate-500 uppercase block">Engine</span>
             <span className="text-xs font-semibold text-slate-300">Gemini Vision</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupPreview;
