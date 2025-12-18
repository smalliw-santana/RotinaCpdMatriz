import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeTrackerProps {
  label: string;
  colorClass?: string;
}

export const TimeTracker: React.FC<TimeTrackerProps> = ({ label, colorClass = "bg-gray-100" }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [duration, setDuration] = useState('00:00');

  useEffect(() => {
    if (start && end) {
      const startTime = new Date(`2000-01-01T${start}`);
      const endTime = new Date(`2000-01-01T${end}`);
      
      if (endTime < startTime) {
        endTime.setDate(endTime.getDate() + 1); // Handle overnight
      }

      const diffMs = endTime.getTime() - startTime.getTime();
      const diffHrs = Math.floor(diffMs / 3600000);
      const diffMins = Math.round(((diffMs % 3600000) / 60000));

      setDuration(`${String(diffHrs).padStart(2, '0')}:${String(diffMins).padStart(2, '0')}`);
    } else {
      setDuration('00:00');
    }
  }, [start, end]);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-2 items-center p-2 rounded-md ${colorClass} border border-gray-300 text-sm`}>
      <div className="md:col-span-4 font-black text-slate-800 uppercase flex items-center gap-2 tracking-tight">
        {label === "TOTAL" ? null : <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />}
        {label}
      </div>
      
      <div className="md:col-span-8 flex flex-wrap gap-4 justify-end items-center">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-700 uppercase">Início:</label>
          <input 
            type="time" 
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border border-gray-400 rounded px-1 py-0.5 text-sm w-24 focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-900 font-medium"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-700 uppercase">Fim:</label>
          <input 
            type="time" 
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border border-gray-400 rounded px-1 py-0.5 text-sm w-24 focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-900 font-medium"
          />
        </div>

        <div className="flex items-center gap-2 bg-slate-800 text-white px-2 py-1 rounded text-xs min-w-[140px] justify-between shadow-sm">
          <span className="font-semibold">TEMPO EXECUÇÃO:</span>
          <span className="font-mono font-bold text-yellow-400 text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
};