import React from 'react';
import { TimeTracker } from './TimeTracker';

interface TaskRowProps {
  title: string;
  colorClass: string;
}

export const TaskRow: React.FC<TaskRowProps> = ({ title, colorClass }) => {
  return (
    <TimeTracker label={title} colorClass={colorClass} />
  );
};