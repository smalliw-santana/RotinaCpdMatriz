import React, { useState } from 'react';
import { 
  BRANCHES_MAIN, 
  RESTAURANTS, 
  SALES_IMPORT_LIST, 
  MAG_SECTIONS, 
  HC_SECTIONS, 
  STOCK_EXCLUSION_ALL,
  STOCK_EXCLUSION_SAT,
  RESPONSIBLE_OPTIONS
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
          <header className="bg-white border-b-4 border-slate-800 p-8 rounded-xl shadow-md scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column: Title Block */}
              <div className="flex flex-col items-center lg:items-start border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="bg-slate-900 text-white p-2.5 rounded-lg shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">CPD Matriz</h1>
                 </div>
                 <h2 className="text-xl font-bold text-slate-500 uppercase tracking-[0.3em] pl-1">Rotina Noturna</h2>
              </div>
              
              {/* Right Column: Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Responsável</label>
                  <div className="relative">
                    <select 
                      className="appearance-none bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 cursor-pointer transition-colors shadow-sm"
                      value={responsible}
                      onChange={(e) => setResponsible(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      {RESPONSIBLE_OPTIONS.map((name) => (
                        <option key={name} value={name}>{name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                   <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Data</label>
                   <input 
                    type="date" 
                    className="bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors shadow-sm"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Section 1: Carga PDVs */}
          <section id="cargas" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24 border border-gray-200">
            <SectionHeader title="Geração de Carga para PDV's" color={SectionColor.BLUE} />
            <div className="p-5 space-y-6">
              <BranchGrid title="Filiais" branches={BRANCHES_MAIN} />
              <div className="border-t-2 border-dashed border-gray-200 pt-4">
                 <BranchGrid title="Restaurantes" branches={RESTAURANTS} compact />
              </div>
              <div className="space-y-3 pt-2">
                <TimeTracker label="ALTERADOS" colorClass="bg-slate-50" />
                <TimeTracker label="GERAL" colorClass="bg-slate-100" />
              </div>
            </div>
          </section>

          {/* Section 2: Etiquetas e Balança */}
          <section id="etiquetas" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24 border border-gray-200">
            <SectionHeader title="Geração de Arquivos de Etiqueta e Balança" color={SectionColor.TEAL} />
            <div className="p-5 space-y-6">
              <BranchGrid title="Filiais" branches={BRANCHES_MAIN} />
              <div className="space-y-3 pt-2">
                <TimeTracker label="ARQ. DE ETIQUETA" colorClass="bg-teal-50" />
                <TimeTracker label="ARQ. DE BALANÇA" colorClass="bg-teal-50" />
              </div>
            </div>
          </section>

          {/* Section 3: Importação de Venda */}
          <section id="vendas" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24 border border-gray-200">
            <SectionHeader title="Importação de Venda" color={SectionColor.RED} />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-gray-900 font-bold uppercase bg-gray-200 border-b-2 border-gray-300">
                  <tr>
                    <th scope="col" className="px-4 py-3">Filiais</th>
                    <th scope="col" className="px-4 py-3 text-center">Rel NFC-E</th>
                    <th scope="col" className="px-4 py-3 text-center">Arquivo PDF</th>
                    <th scope="col" className="px-4 py-3 text-center">Venda RMS</th>
                    <th scope="col" className="px-4 py-3 border-l-2 border-gray-300 w-1/3">Ocorrências Importação de Venda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {SALES_IMPORT_LIST.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-2 font-bold text-slate-800 whitespace-nowrap">
                        <span className="font-mono text-slate-600 font-bold mr-2">{item.id}</span>
                        {item.name}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <label className="flex items-center justify-center gap-2 cursor-pointer">
                          <span className="text-xs font-bold text-gray-600">NFC-E</span>
                          <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-500" />
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <label className="flex items-center justify-center gap-2 cursor-pointer">
                           <span className="text-xs font-bold text-gray-600">PDF</span>
                          <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-500" />
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <label className="flex items-center justify-center gap-2 cursor-pointer">
                           <span className="text-xs font-bold text-gray-600">RMS</span>
                          <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-500" />
                        </label>
                      </td>
                      <td className="px-4 py-2 border-l border-gray-200 bg-gray-50/50">
                        {/* Space for notes */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-red-50 border-t border-red-100">
              <TimeTracker label="TEMPO TOTAL DAS IMPORTAÇÕES" colorClass="bg-white border-red-200" />
            </div>
          </section>

          {/* Section 4: Various Tasks (Colored Bars) */}
          <section id="tarefas" className="space-y-4 scroll-mt-24">
            <TaskRow title="CARTEIRA DE PEDIDOS" colorClass="bg-orange-100 border-orange-300 shadow-sm" />
            <TaskRow title="FECHAMENTO DIARIO" colorClass="bg-blue-100 border-blue-300 shadow-sm" />
            <TaskRow title="FECHAMENTO SEMANAL" colorClass="bg-emerald-100 border-emerald-300 shadow-sm" />
            <TaskRow title="FECHAMENTO MENSAL" colorClass="bg-emerald-200 border-emerald-400 shadow-sm" />
            <TaskRow title="HELP DE TIPOS" colorClass="bg-yellow-100 border-yellow-300 shadow-sm" />
            
            <div className="bg-purple-50 rounded-lg border border-purple-200 p-3 space-y-3 shadow-sm">
              <TaskRow title="HELP DE PRODUTOS" colorClass="bg-purple-200 border-purple-300" />
              <div className="pl-4 md:pl-8 space-y-3">
                 <TaskRow title="01 - HELP DE LINHAS" colorClass="bg-purple-100 border-purple-200" />
                 <TaskRow title="02 - HELP DE ITEM" colorClass="bg-purple-100 border-purple-200" />
              </div>
            </div>
          </section>

          {/* Section 5: Automatic Orders (Magazan) */}
          <section id="pedidos" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24 border border-gray-200">
             <SectionHeader title="Sugestão de Pedidos Automáticos Magazan - Todos os dias exceto sábados" color={SectionColor.BLUE} />
             <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                 <div className="text-5xl font-black text-red-600 italic tracking-tighter">MAGAZAN</div>
                 <div className="text-sm text-blue-900 font-bold tracking-[0.3em] mt-1">LIDER</div>
               </div>
               
               <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="font-black text-slate-800 mb-3 border-b-2 border-slate-200 pb-1">FILIAIS</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {SALES_IMPORT_LIST.slice(0, 16).map(b => (
                         <label key={b.id} className="flex items-center gap-2 text-xs font-medium text-slate-700 hover:bg-gray-50 p-1 rounded cursor-pointer">
                           <input type="checkbox" className="text-blue-600 rounded border-gray-400" />
                           <span><span className="font-bold">{b.id}</span> {b.name}</span>
                         </label>
                      ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="font-black text-slate-800 mb-3 border-b-2 border-slate-200 pb-1">SEÇÕES</h3>
                    <div className="grid grid-cols-1 gap-y-2">
                      {MAG_SECTIONS.map(s => (
                         <label key={s.id} className="flex items-center gap-2 text-xs font-medium text-slate-700 hover:bg-gray-50 p-1 rounded cursor-pointer">
                           <input type="checkbox" className="text-blue-600 rounded border-gray-400" />
                           <span><span className="font-bold">{s.id}</span> - {s.name}</span>
                         </label>
                      ))}
                    </div>
                 </div>
               </div>
             </div>
             <div className="p-4 bg-slate-50 space-y-3 border-t border-slate-100">
               <TimeTracker label="SUGESTÃO" colorClass="bg-slate-200" />
               <TimeTracker label="ATENDIMENTO" colorClass="bg-slate-200" />
             </div>
          </section>

          {/* Section 6: Home Center */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
             <SectionHeader title="Sugestão de Pedidos Automáticos Home Center - Todos os dias exceto sábados" color={SectionColor.GREEN} />
             <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                 <div className="text-5xl font-black text-red-600 italic tracking-tighter">LIDER</div>
                 <div className="text-xl text-slate-800 font-bold italic -mt-1">Home Center</div>
               </div>
               
               <div className="lg:col-span-3 flex flex-col md:flex-row gap-8">
                 <div className="flex-1">
                    <h3 className="font-black text-slate-800 mb-3 border-b-2 border-slate-200 pb-1">FILIAIS</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {['6-0', '5-1', '7-8', '12-4', '18-3', '24-8'].map(id => (
                         <label key={id} className="flex items-center gap-2 text-xs font-medium text-slate-700 hover:bg-gray-50 p-1 rounded cursor-pointer">
                           <input type="checkbox" className="text-green-600 rounded border-gray-400" />
                           <span className="font-bold">{id}</span>
                         </label>
                      ))}
                    </div>
                 </div>
                 <div className="flex-1">
                    <h3 className="font-black text-slate-800 mb-3 border-b-2 border-slate-200 pb-1">SEÇÕES</h3>
                    <div className="grid grid-cols-1 gap-y-2">
                      {HC_SECTIONS.map(s => (
                         <label key={s.id} className="flex items-center gap-2 text-xs font-medium text-slate-700 hover:bg-gray-50 p-1 rounded cursor-pointer">
                           <input type="checkbox" className="text-green-600 rounded border-gray-400" />
                           <span><span className="font-bold">{s.id}</span> - {s.name}</span>
                         </label>
                      ))}
                    </div>
                 </div>
               </div>
             </div>
             <div className="p-4 bg-emerald-50 space-y-3 border-t border-emerald-100">
               <TimeTracker label="SUGESTÃO" colorClass="bg-emerald-100" />
               <TimeTracker label="ATENDIMENTO" colorClass="bg-emerald-100" />
             </div>
          </section>

          {/* Section 7: Files M and B */}
          <section id="arquivos" className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-24 border border-gray-200">
            <SectionHeader title="Importação de Arquivos (M) e (B)" color={SectionColor.BLUE} />
            
            {/* File M */}
            <div className="p-5 border-b border-gray-200">
              <h3 className="font-black text-slate-800 mb-4 text-sm bg-gray-100 p-2 rounded border border-gray-300">ARQUIVO (M) - TODA SEGUNDA-FEIRA</h3>
              <BranchGrid branches={BRANCHES_MAIN} />
              <div className="mt-5">
                <TimeTracker label="TEMPO" colorClass="bg-gray-50" />
              </div>
            </div>

            {/* File B */}
            <div className="p-5">
              <h3 className="font-black text-slate-800 mb-4 text-sm bg-gray-100 p-2 rounded border border-gray-300">ARQUIVO (B) - TODOS OS DIAS EXCETO DOMINGOS</h3>
              <BranchGrid branches={BRANCHES_MAIN} />
              <div className="mt-5 space-y-3">
                <TimeTracker label="IMPORTAÇÃO" colorClass="bg-gray-50" />
                <TimeTracker label="ATENDIMENTO" colorClass="bg-gray-50" />
              </div>
            </div>
          </section>

           {/* Section 8: Stock Exclusion */}
           <section className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <SectionHeader title="Exclusão de Registro de Estoque" color={SectionColor.RED} />
            <div className="p-5 space-y-6">
              <div>
                 <div className="font-black text-slate-800 text-xs mb-2">TODOS OS DIAS</div>
                 <BranchGrid branches={STOCK_EXCLUSION_ALL} compact />
                 <div className="mt-3">
                   <TimeTracker label="EXECUÇÃO" colorClass="bg-red-50" />
                 </div>
              </div>
              <div className="border-t-2 border-dashed border-gray-200 pt-5">
                 <div className="font-black text-slate-800 text-xs mb-2">SÁBADO</div>
                 <BranchGrid branches={STOCK_EXCLUSION_SAT} compact />
                 <div className="mt-3">
                   <TimeTracker label="EXECUÇÃO" colorClass="bg-red-50" />
                 </div>
              </div>
            </div>
          </section>

           {/* Section 9: Import NFC-E */}
           <section className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <SectionHeader title="Importação NFC-E" color={SectionColor.BLUE} />
            <div className="p-5">
              <BranchGrid branches={BRANCHES_MAIN} />
            </div>
          </section>

          {/* Section 10: Occurrences */}
          <section id="ocorrencias" className="bg-white rounded-lg shadow-md overflow-hidden pb-6 scroll-mt-24 border border-gray-200">
            <div className="bg-orange-600 text-white font-bold text-center py-2 text-lg uppercase shadow-sm">
              Ocorrências
            </div>
            <div className="p-5">
              <textarea 
                className="w-full h-40 border-2 border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none text-slate-800 placeholder-gray-500"
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