import React, { useState } from 'react';
import { 
  BRANCHES_MAIN, 
  RESTAURANTS, 
  SALES_IMPORT_LIST, 
  MAG_SECTIONS, 
  HC_SECTIONS, 
  STOCK_EXCLUSION_ALL,
  STOCK_EXCLUSION_SAT 
} from './constants';
import { SectionHeader } from './components/SectionHeader';
import { SectionColor } from './types';
import { BranchGrid } from './components/BranchGrid';
import { TimeTracker } from './components/TimeTracker';
import { TaskRow } from './components/TaskRow';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [responsible, setResponsible] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <header className="bg-gray-200 border-b-4 border-slate-600 p-6 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 scroll-mt-24">
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Responsável</label>
              <input 
                type="text" 
                placeholder="Nome do Responsável"
                className="bg-white border border-gray-300 rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">CPD Matriz</h1>
              <h2 className="text-lg font-semibold text-slate-600 uppercase tracking-widest">Rotina Noturna</h2>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Data</label>
              <input 
                type="date" 
                className="bg-white border border-gray-300 rounded px-3 py-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </header>

          {/* Section 1: Carga PDVs */}
          <section id="cargas" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24">
            <SectionHeader title="Geração de Carga para PDV's" color={SectionColor.BLUE} />
            <div className="p-4 space-y-6">
              <BranchGrid title="Filiais" branches={BRANCHES_MAIN} />
              <div className="border-t border-gray-100 pt-4">
                 <BranchGrid title="Restaurantes" branches={RESTAURANTS} compact />
              </div>
              <div className="space-y-2 pt-2">
                <TimeTracker label="ALTERADOS" colorClass="bg-slate-50" />
                <TimeTracker label="GERAL" colorClass="bg-slate-100" />
              </div>
            </div>
          </section>

          {/* Section 2: Etiquetas e Balança */}
          <section id="etiquetas" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24">
            <SectionHeader title="Geração de Arquivos de Etiqueta e Balança" color={SectionColor.TEAL} />
            <div className="p-4 space-y-6">
              <BranchGrid title="Filiais" branches={BRANCHES_MAIN} />
              <div className="space-y-2 pt-2">
                <TimeTracker label="ARQ. DE ETIQUETA" colorClass="bg-teal-50" />
                <TimeTracker label="ARQ. DE BALANÇA" colorClass="bg-teal-50" />
              </div>
            </div>
          </section>

          {/* Section 3: Importação de Venda */}
          <section id="vendas" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24">
            <SectionHeader title="Importação de Venda" color={SectionColor.RED} />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-4 py-3">Filiais</th>
                    <th scope="col" className="px-4 py-3 text-center">Rel NFC-E</th>
                    <th scope="col" className="px-4 py-3 text-center">Arquivo PDF</th>
                    <th scope="col" className="px-4 py-3 text-center">Venda RMS</th>
                    <th scope="col" className="px-4 py-3 border-l border-gray-200 w-1/3">Ocorrências Importação de Venda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SALES_IMPORT_LIST.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        <span className="font-mono text-gray-500 mr-2">{item.id}</span>
                        {item.name}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <label className="flex items-center justify-center gap-2 cursor-pointer">
                          <span className="text-xs">NFC-E</span>
                          <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <label className="flex items-center justify-center gap-2 cursor-pointer">
                           <span className="text-xs">PDF</span>
                          <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <label className="flex items-center justify-center gap-2 cursor-pointer">
                           <span className="text-xs">RMS</span>
                          <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                        </label>
                      </td>
                      <td className="px-4 py-2 border-l border-gray-200 bg-gray-50/30">
                        {/* Space for notes */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-red-50">
              <TimeTracker label="TEMPO TOTAL DAS IMPORTAÇÕES" colorClass="bg-red-100 border-red-200" />
            </div>
          </section>

          {/* Section 4: Various Tasks (Colored Bars) */}
          <section id="tarefas" className="space-y-4 scroll-mt-24">
            <TaskRow title="CARTEIRA DE PEDIDOS" colorClass="bg-orange-100 border-orange-300" />
            <TaskRow title="FECHAMENTO DIARIO" colorClass="bg-blue-100 border-blue-300" />
            <TaskRow title="FECHAMENTO SEMANAL" colorClass="bg-emerald-100 border-emerald-300" />
            <TaskRow title="FECHAMENTO MENSAL" colorClass="bg-emerald-200 border-emerald-400" />
            <TaskRow title="HELP DE TIPOS" colorClass="bg-yellow-100 border-yellow-300" />
            
            <div className="bg-purple-50 rounded-md border border-purple-200 p-2 space-y-2">
              <TaskRow title="HELP DE PRODUTOS" colorClass="bg-purple-200 border-purple-300" />
              <div className="pl-8 space-y-2">
                 <TaskRow title="01 - HELP DE LINHAS" colorClass="bg-purple-100 border-purple-200" />
                 <TaskRow title="02 - HELP DE ITEM" colorClass="bg-purple-100 border-purple-200" />
              </div>
            </div>
          </section>

          {/* Section 5: Automatic Orders (Magazan) */}
          <section id="pedidos" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24">
             <SectionHeader title="Sugestão de Pedidos Automáticos Magazan - Todos os dias exceto sábados" color={SectionColor.BLUE} />
             <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded border border-gray-200">
                 <div className="text-4xl font-black text-red-600 italic tracking-tighter">MAGAZAN</div>
                 <div className="text-sm text-blue-900 font-bold tracking-widest mt-1">LIDER</div>
               </div>
               
               <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <h3 className="font-bold text-gray-700 mb-2 border-b">Filiais</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {SALES_IMPORT_LIST.slice(0, 16).map(b => (
                         <label key={b.id} className="flex items-center gap-2 text-xs">
                           <input type="checkbox" className="text-blue-600 rounded" />
                           <span>{b.id} {b.name}</span>
                         </label>
                      ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-700 mb-2 border-b">Seções</h3>
                    <div className="grid grid-cols-1 gap-y-1">
                      {MAG_SECTIONS.map(s => (
                         <label key={s.id} className="flex items-center gap-2 text-xs">
                           <input type="checkbox" className="text-blue-600 rounded" />
                           <span>{s.id} - {s.name}</span>
                         </label>
                      ))}
                    </div>
                 </div>
               </div>
             </div>
             <div className="p-4 bg-slate-50 space-y-2">
               <TimeTracker label="SUGESTÃO" colorClass="bg-slate-200" />
               <TimeTracker label="ATENDIMENTO" colorClass="bg-slate-200" />
             </div>
          </section>

          {/* Section 6: Home Center */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
             <SectionHeader title="Sugestão de Pedidos Automáticos Home Center - Todos os dias exceto sábados" color={SectionColor.GREEN} />
             <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded border border-gray-200">
                 <div className="text-4xl font-black text-red-600 italic tracking-tighter">LIDER</div>
                 <div className="text-lg text-gray-800 font-bold italic -mt-1">Home Center</div>
               </div>
               
               <div className="lg:col-span-3 flex gap-8">
                 <div className="flex-1">
                    <h3 className="font-bold text-gray-700 mb-2 border-b">Filiais</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {['6-0', '5-1', '7-8', '12-4', '18-3', '24-8'].map(id => (
                         <label key={id} className="flex items-center gap-2 text-xs">
                           <input type="checkbox" className="text-green-600 rounded" />
                           <span>{id}</span>
                         </label>
                      ))}
                    </div>
                 </div>
                 <div className="flex-1">
                    <h3 className="font-bold text-gray-700 mb-2 border-b">Seções</h3>
                    <div className="grid grid-cols-1 gap-y-1">
                      {HC_SECTIONS.map(s => (
                         <label key={s.id} className="flex items-center gap-2 text-xs">
                           <input type="checkbox" className="text-green-600 rounded" />
                           <span>{s.id} - {s.name}</span>
                         </label>
                      ))}
                    </div>
                 </div>
               </div>
             </div>
             <div className="p-4 bg-emerald-50 space-y-2">
               <TimeTracker label="SUGESTÃO" colorClass="bg-emerald-100" />
               <TimeTracker label="ATENDIMENTO" colorClass="bg-emerald-100" />
             </div>
          </section>

          {/* Section 7: Files M and B */}
          <section id="arquivos" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24">
            <SectionHeader title="Importação de Arquivos (M) e (B)" color={SectionColor.BLUE} />
            
            {/* File M */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3 text-sm bg-gray-100 p-2 rounded">ARQUIVO (M) - TODA SEGUNDA-FEIRA</h3>
              <BranchGrid branches={BRANCHES_MAIN} />
              <div className="mt-4">
                <TimeTracker label="TEMPO" colorClass="bg-gray-100" />
              </div>
            </div>

            {/* File B */}
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-3 text-sm bg-gray-100 p-2 rounded">ARQUIVO (B) - TODOS OS DIAS EXCETO DOMINGOS</h3>
              <BranchGrid branches={BRANCHES_MAIN} />
              <div className="mt-4 space-y-2">
                <TimeTracker label="IMPORTAÇÃO" colorClass="bg-gray-100" />
                <TimeTracker label="ATENDIMENTO" colorClass="bg-gray-100" />
              </div>
            </div>
          </section>

           {/* Section 8: Stock Exclusion */}
           <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <SectionHeader title="Exclusão de Registro de Estoque" color={SectionColor.RED} />
            <div className="p-4 space-y-6">
              <div>
                 <div className="font-bold text-xs mb-1">TODOS OS DIAS</div>
                 <BranchGrid branches={STOCK_EXCLUSION_ALL} compact />
                 <div className="mt-2">
                   <TimeTracker label="EXECUÇÃO" colorClass="bg-red-50" />
                 </div>
              </div>
              <div className="border-t pt-4">
                 <div className="font-bold text-xs mb-1">SÁBADO</div>
                 <BranchGrid branches={STOCK_EXCLUSION_SAT} compact />
                 <div className="mt-2">
                   <TimeTracker label="EXECUÇÃO" colorClass="bg-red-50" />
                 </div>
              </div>
            </div>
          </section>

           {/* Section 9: Import NFC-E */}
           <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <SectionHeader title="Importação NFC-E" color={SectionColor.BLUE} />
            <div className="p-4">
              <BranchGrid branches={BRANCHES_MAIN} />
            </div>
          </section>

          {/* Section 10: Occurrences */}
          <section id="ocorrencias" className="bg-white rounded-lg shadow-md overflow-hidden pb-6 scroll-mt-24">
            <div className="bg-orange-600 text-white font-bold text-center py-2 text-lg uppercase">
              Ocorrências
            </div>
            <div className="p-4">
              <textarea 
                className="w-full h-40 border-2 border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
                placeholder="Descreva as ocorrências do plantão aqui..."
              ></textarea>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default App;