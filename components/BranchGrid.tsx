import React from 'react';

interface BranchGridProps {
  branches: string[];
  title?: string;
  compact?: boolean;
}

export const BranchGrid: React.FC<BranchGridProps> = ({ branches, title, compact = false }) => {
  return (
    <div className="w-full">
      {title && <div className="font-semibold text-gray-700 mb-2 text-sm uppercase">{title}</div>}
      <div className={`flex flex-wrap gap-1 ${compact ? 'justify-start' : 'justify-between'}`}>
        {branches.map((branch) => (
          <div key={branch} className="flex flex-col items-center">
            <span className="text-[10px] font-mono text-gray-500 mb-0.5">{branch}</span>
            <input 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};