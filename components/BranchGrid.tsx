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
      <div className={`grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-11 gap-y-4 gap-x-1 justify-items-center`}>
        {branches.map((branch) => (
          <div key={branch} className="flex flex-col items-center w-full">
            <span className="text-[11px] font-mono font-bold text-slate-700 mb-1">{branch}</span>
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