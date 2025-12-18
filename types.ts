export interface Branch {
  id: string;
  name?: string;
}

export interface SalesImportItem {
  id: string;
  name: string;
}

export interface DepartmentSection {
  id: string;
  name: string;
}

export interface TimeEntry {
  start: string;
  end: string;
}

export enum SectionColor {
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
  ORANGE = 'orange',
  TEAL = 'teal'
}