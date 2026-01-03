
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-16 px-6 border-b border-slate-800 flex items-center justify-between bg-slate-900 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">VisionMock <span className="text-indigo-400">AI</span></h1>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Studio Edition</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-400">
          <a href="#" className="text-white hover:text-indigo-400 transition-colors">Generator</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Presets</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a>
        </nav>
        <button className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-full text-xs font-semibold transition-all">
          New Project
        </button>
      </div>
    </header>
  );
};

export default Header;
