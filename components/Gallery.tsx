
import React from 'react';
import { MockupItem } from '../types';

interface GalleryProps {
  items: MockupItem[];
  onSelect: (item: MockupItem) => void;
  activeId?: string;
}

const Gallery: React.FC<GalleryProps> = ({ items, onSelect, activeId }) => {
  if (items.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-slate-800/50 rounded-2xl bg-slate-900/30">
        <p className="text-slate-500 text-sm">History is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div 
          key={item.id}
          onClick={() => onSelect(item)}
          className={`group cursor-pointer relative rounded-2xl overflow-hidden aspect-square border-2 transition-all hover:scale-[1.02] ${
            activeId === item.id ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-xl' : 'border-slate-800 hover:border-slate-700'
          }`}
        >
          <img 
            src={item.url} 
            alt={item.prompt} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
            <p className="text-[10px] text-white/80 line-clamp-2 leading-tight mb-1">{item.prompt}</p>
            <div className="flex justify-end">
              <span className="text-[8px] text-white/50">{new Date(item.timestamp).toLocaleDateString()}</span>
            </div>
          </div>
          {activeId === item.id && (
            <div className="absolute top-2 right-2 bg-indigo-500 p-1.5 rounded-full shadow-lg">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
