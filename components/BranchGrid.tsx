import React from 'react';

interface BranchGridProps {
  branches: string[];
  title?: string;
  compact?: boolean;
}

export const BranchGrid: React.FC<BranchGridProps> = ({ branches, title, compact = false }) => {
  return (
    <div className="w-full">
      {title && <div className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-tight">{title}</div>}
      <div className={`flex flex-wrap gap-1 ${compact ? 'justify-start' : 'justify-between'}`}>
        {branches.map((branch) => (
          <div key={branch} className="flex flex-col items-center">
            <span className="text-[11px] font-mono font-bold text-slate-700 mb-0.5">{branch}</span>
            <input 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 border-gray-400 rounded focus:ring-blue-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};