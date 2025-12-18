import { Branch, SalesImportItem, DepartmentSection } from './types';

export const BRANCHES_MAIN: string[] = [
  '1-9', '2-7', '3-5', '4-3', '5-1', '6-0', '7-8', '8-6', '9-4', '10-8', 
  '11-6', '12-4', '17-5', '18-3', '19-1', '24-8', '27-2', '28-0', '31-0', 
  '32-9', '33-7', '36-1', '37-0', '38-8', '40-0', '41-8', '42-6', '44-2', 
  '47-7', '48-5', '49-3', '50-7', '54-0'
];

export const RESTAURANTS: string[] = [
  '45-0', '49-3', '75-2', '85-0', '88-4', '90-6', '91-4'
];

export const SALES_IMPORT_LIST: SalesImportItem[] = [
  { id: '1-9', name: 'CONDOR' },
  { id: '2-7', name: 'A.CACELA' },
  { id: '3-5', name: 'DOCA' },
  { id: '4-3', name: 'OBIDOS' },
  { id: '5-1', name: 'CASTANHEIRA' },
  { id: '6-0', name: 'MGZ CASTANHEIRA' },
  { id: '7-8', name: 'P.BRASIL' },
  { id: '8-6', name: 'B.CAMPOS 24hs' },
  { id: '9-4', name: 'HUMAITA' },
  { id: '10-8', name: 'CASTANHAL 24hs' },
  { id: '11-6', name: 'ICOARACI' },
  { id: '12-4', name: 'BR 24hs' },
  { id: '17-5', name: 'CANUDOS' },
  { id: '18-3', name: 'C.NOVA 24hs' },
  { id: '19-1', name: 'MGZ CASTANHAL' },
  { id: '24-8', name: 'QUINTINO' },
  { id: '27-2', name: 'PEDREIRA' },
  { id: '28-0', name: 'INDEPEND. 24hs' },
  { id: '31-0', name: 'BARCARENA' },
  { id: '32-9', name: 'MARABA' },
  { id: '33-7', name: 'A.MONTENEGRO' },
  { id: '36-0', name: 'PARAGOMINAS' },
  { id: '37-0', name: 'CAPANEMA' },
  { id: '38-0', name: 'ABAETETUBA' },
  { id: '40-0', name: 'MARAMBAIA' },
  { id: '41-8', name: 'MGZ CASA' },
  { id: '42-6', name: 'SALINAS' },
  { id: '44-2', name: 'GUAMÁ' },
  { id: '47-7', name: '14 DE MARCO' },
  { id: '48-5', name: 'SAO FRANCISCO' },
  { id: '49-3', name: 'JERONIMOS REST' },
  { id: '50-7', name: 'ESTRELA' },
  { id: '54-0', name: 'DUQUE 24hs' },
];

export const MAG_SECTIONS: DepartmentSection[] = [
  { id: '210', name: 'CELULAR' },
  { id: '211', name: 'ELETRODOMESTICO' },
  { id: '213', name: 'FOGÕES/DEPURADOR' },
  { id: '240', name: 'CAMA' },
  { id: '241', name: 'MESA' },
  { id: '242', name: 'BANHO' },
  { id: '297', name: 'PERF GERAL' },
];

export const HC_SECTIONS: DepartmentSection[] = [
  { id: '80', name: 'FERRAMENTAS E MAQUINAS' },
  { id: '81', name: 'UTIL ELETRICA/ELETRONICA' },
  { id: '87', name: 'CONSTRUÇÃO' },
  { id: '105', name: 'ILUMINAÇÃO' },
];

export const STOCK_EXCLUSION_ALL: string[] = [
  '1-9', '2-7', '5-1', '8-6', '10-8', '11-6', '22-1', '24-8', '27-2', '41-8', '43-4', '203-8'
];

export const STOCK_EXCLUSION_SAT: string[] = [
  '3-5', '4-3', '6-0', '7-8', '9-4', '12-4', '15-9', '17-5', '18-3', '19-1', '21-3', '24-8', 
  '28-0', '31-0', '32-9', '33-7', '37-0', '38-8', '40-0', '42-6', '200-3', '36-1', '201-1'
];