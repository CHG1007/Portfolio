import { useState } from "react";
import { Wrench, ChevronDown, ChevronUp, AlertCircle, CheckCircle, HelpCircle } from "lucide-react";
import { Project } from "../../data/projects";

interface TroubleshootingListProps {
  project: Project;
}

export default function TroubleshootingList({ project }: TroubleshootingListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const accentColor = project.accentColor || "#0123B4";

  if (!project.troubleshooting || project.troubleshooting.length === 0) return null;

  const isFreeline = project.slug === 'freeline';
  const isSniffy = project.slug === 'sniffy-the-dog';

  return (
    <section className={`relative py-16 border-b text-left ${isFreeline ? 'bg-[#F8FAF0] border-[#DBFC53]/30' : isSniffy ? 'bg-[#FFF4EC] border-[#FE7122]/30' : 'bg-slate-50 border-slate-100'}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className={`p-1.5 rounded-lg ${isFreeline ? 'bg-[#DBFC53]/20 text-[#2F2C48]' : isSniffy ? 'bg-[#FE7122]/20 text-[#FE7122]' : 'bg-indigo-50 text-indigo-600'}`}>
            <Wrench className="h-5 w-5" />
          </span>
          <h2 className={`font-display text-xl font-extrabold tracking-tight ${isFreeline ? 'text-[#2F2C48]' : isSniffy ? 'text-[#272727]' : 'text-slate-900'}`}>
            트러블슈팅 및 예외 시나리오 방어 책장
          </h2>
        </div>

        {/* Accordion Panels Layout */}
        <div className="space-y-4">
          {project.troubleshooting.map((trouble, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border bg-white shadow-3xs overflow-hidden transition-all duration-300 ${isFreeline ? 'border-[#DBFC53]/40' : isSniffy ? 'border-[#FE7122]/40' : 'border-slate-200'}`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-sm sm:text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex gap-3 items-center pr-4">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${isFreeline ? 'bg-[#DBFC53]/20 text-[#2F2C48]' : isSniffy ? 'bg-[#FE7122]/20 text-[#FE7122]' : 'bg-indigo-50 text-indigo-600'}`}>
                      {idx + 1}
                    </span>
                    <span>{trouble.lap.split(". ").slice(1).join(". ")}</span>
                  </div>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />}
                </button>

                {/* Accordion Content Panel (with nice smooth spacing animations) */}
                {isOpen && (
                  <div className={`border-t p-5 sm:p-6 space-y-4 text-xs font-sans ${isFreeline ? 'border-[#DBFC53]/20 bg-[#F8FAF0]/50' : isSniffy ? 'border-[#FE7122]/20 bg-[#FFF4EC]/50' : 'border-slate-100 bg-slate-50/30'}`}>
                    
                    {/* Problem definitions */}
                    <div className="flex gap-2.5 items-start text-left text-slate-705 pl-4 border-l-2 border-red-200 relative">
                      <div className="absolute top-1 -left-[9px] h-4 w-4 rounded-full bg-red-150 flex items-center justify-center">
                        <AlertCircle className="h-3 w-3 text-red-600" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] font-bold text-red-600 uppercase block tracking-wider">
                          Problem context
                        </span>
                        <p className="font-sans leading-relaxed text-slate-650 font-medium">{trouble.problem}</p>
                      </div>
                    </div>

                    {/* Solutions implemented */}
                    <div className="flex gap-2.5 items-start text-left text-slate-705 pl-4 border-l-2 border-indigo-200 relative">
                      <div className="absolute top-1 -left-[9px] h-4 w-4 rounded-full bg-indigo-150 flex items-center justify-center">
                        <Wrench className="h-3 w-3 text-indigo-600" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] font-bold text-indigo-600 uppercase block tracking-wider">
                          Technical Solution
                        </span>
                        <p className="font-sans leading-relaxed text-slate-650 font-medium">{trouble.solution}</p>
                      </div>
                    </div>

                    {/* Quality results & quantifiable metric */}
                    <div className="flex gap-2.5 items-start text-left text-slate-705 pl-4 border-l-2 border-emerald-250 relative">
                      <div className="absolute top-1 -left-[9px] h-4 w-4 rounded-full bg-emerald-150 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-emerald-600" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <span className="font-mono text-[9px] font-bold text-emerald-600 uppercase block tracking-wider">
                          Result
                        </span>
                        <p className="font-sans leading-relaxed text-slate-650 font-medium">{trouble.result}</p>
                        
                        {trouble.metricTodo && (
                          <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-2.5 font-mono text-[10px] text-emerald-700">
                            <strong>Metrics Audit Check:</strong> {trouble.metricTodo}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
