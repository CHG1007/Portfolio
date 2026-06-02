import { GitCommit, HelpCircle, Layers, Link, Laptop, ShieldCheck } from "lucide-react";
import { Project } from "../../data/projects";

interface ArchitectureFlowProps {
  project: Project;
}

export default function ArchitectureFlow({ project }: ArchitectureFlowProps) {
  const accentColor = project.accentColor || "#0123B4";

  const isFreeline = project.slug === 'freeline';

  return (
    <section className={`relative py-16 border-b text-left ${isFreeline ? 'bg-[#F8FAF0] border-[#DBFC53]/30' : 'bg-slate-50 border-slate-100'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className={`p-1.5 rounded-lg ${isFreeline ? 'bg-[#DBFC53]/20 text-[#2F2C48]' : 'bg-indigo-50 text-indigo-600'}`}>
            <Layers className="h-5 w-5" />
          </span>
          <h2 className={`font-display text-xl font-extrabold tracking-tight ${isFreeline ? 'text-[#2F2C48]' : 'text-slate-900'}`}>
            {isFreeline ? '시스템 아키텍처 흐름도 (Sequence & Topology)' : '비동기 파이프라인 아키텍처 흐름도 (Sequence & Topology)'}
          </h2>
        </div>

        {/* CSS Unified Flow Diagram Blocks */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {project.architecture?.map((stepItem, idx) => {
            const isLast = idx === (project.architecture?.length || 0) - 1;
            return (
              <div key={idx} className={`relative flex flex-col justify-between rounded-xl border bg-white p-4 transition-all ${isFreeline ? 'border-[#DBFC53]/40 shadow-sm hover:shadow-md' : 'border-slate-205 shadow-2xs hover:shadow-xs'}`}>
                
                {/* Step Index Circle */}
                <div className="flex items-center justify-between gap-1.5 border-b border-slate-100 pb-2 mb-2.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                    STEP // {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className={`h-2 w-2 rounded-full animate-pulse ${isFreeline ? 'bg-[#DBFC53]' : 'bg-emerald-500'}`} />
                </div>

                <div className="space-y-1.5 text-left flex-1">
                  <h4 className={`font-display text-xs font-bold leading-tight ${isFreeline ? 'text-[#2F2C48]' : 'text-slate-800'}`}>
                    {stepItem.split(" - ")[0]}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-normal">
                    {stepItem.includes(" - ") ? stepItem.split(" - ")[1] : stepItem}
                  </p>
                </div>

                {/* Vertical or Horizontal arrow connector preview using CSS borders */}
                {!isLast && (
                  <div className={`hidden xl:block absolute top-1/2 -right-3.5 z-10 h-0.5 w-6 ${isFreeline ? 'bg-[#DBFC53]/50' : 'bg-slate-200'}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Fallback instruction details for direct images if available */}
        <div className={`mt-8 rounded-xl border p-5 flex flex-col sm:flex-row justify-between items-center gap-4 ${isFreeline ? 'border-[#DBFC53]/30 bg-white' : 'border-slate-150 bg-white'}`}>
          <div className="flex gap-3 items-center text-left">
            <HelpCircle className={`h-5 w-5 shrink-0 ${isFreeline ? 'text-[#aacc00]' : 'text-indigo-500'}`} />
            <div>
              <span className={`font-mono text-[9px] font-bold block uppercase ${isFreeline ? 'text-[#2F2C48]' : 'text-indigo-600'}`}>
                DIAGRAM MOUNT NOTICE // {isFreeline ? 'EVENT DRIVEN' : 'S3 PATHWAY'}
              </span>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal">
                {isFreeline 
                  ? "본 아키텍처는 Spring Boot WAS 간 대기 상태 변경을 RabbitMQ로 발행하고 Redis pub/sub를 거쳐 SSE로 브로드캐스트하는 완결성 흐름에 기반합니다."
                  : "본 아키텍처는 Spring WebMVC 의 요청 인스턴스가 RabbitMQ의 amq.direct 스펙을 타격해 물리 GPU 노드를 트리거링하는 다형적 전이 구조에 기반합니다."
                }
              </p>
            </div>
          </div>
          <span className={`rounded-md px-2 py-0.5 font-mono text-[9px] font-bold ${isFreeline ? 'bg-[#DBFC53]/20 text-[#2F2C48]' : 'bg-indigo-50 text-indigo-600'}`}>
            DECOUPLED_STATUS_ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
}
