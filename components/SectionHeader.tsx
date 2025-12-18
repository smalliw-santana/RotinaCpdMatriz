import React from 'react';
import { SectionColor } from '../types';

interface SectionHeaderProps {
  title: string;
  color: SectionColor;
  className?: string;
}

const colorClasses = {
  [SectionColor.BLUE]: 'bg-slate-800 border-slate-900 text-white',
  [SectionColor.RED]: 'bg-red-700 border-red-800 text-white',
  [SectionColor.GREEN]: 'bg-emerald-700 border-emerald-800 text-white',
  [SectionColor.ORANGE]: 'bg-orange-500 border-orange-600 text-white',
  [SectionColor.TEAL]: 'bg-teal-600 border-teal-700 text-white',
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, color, className = '' }) => {
  return (
    <div className={`py-2 px-4 font-bold text-center uppercase tracking-wide rounded-t-lg shadow-sm ${colorClasses[color]} ${className}`}>
      {title}
    </div>
  );
};