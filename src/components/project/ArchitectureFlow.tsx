import { GitCommit, HelpCircle, Layers, Link, Laptop, ShieldCheck } from "lucide-react";
import { Project } from "../../data/projects";

interface ArchitectureFlowProps {
  project: Project;
}

export default function ArchitectureFlow({ project }: ArchitectureFlowProps) {
  const accentColor = project.accentColor || "#0123B4";

  return (
    <section className="relative py-16 bg-slate-50 border-b border-slate-100 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
            <Layers className="h-5 w-5" />
          </span>
          <h2 className="font-display text-xl font-extrabold text-slate-900 tracking-tight">
            비동기 파이프라인 아키텍처 흐름도 (Sequence & Topology)
          </h2>
        </div>

        {/* CSS Unified Flow Diagram Blocks */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {project.architecture?.map((stepItem, idx) => {
            const isLast = idx === (project.architecture?.length || 0) - 1;
            return (
              <div key={idx} className="relative flex flex-col justify-between rounded-xl border border-slate-205 bg-white p-4 shadow-2xs hover:shadow-xs transition-all">
                
                {/* Step Index Circle */}
                <div className="flex items-center justify-between gap-1.5 border-b border-slate-100 pb-2 mb-2.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                    {stepItem.split(".").shift()} // step
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="space-y-1.5 text-left flex-1">
                  <h4 className="font-display text-xs font-bold text-slate-800 leading-tight">
                    {stepItem.split(". ").slice(1).join(". ").split(" — ").slice(0).join("").split(" :: ").slice(0).join("")}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-normal">
                    {stepItem}
                  </p>
                </div>

                {/* Vertical or Horizontal arrow connector preview using CSS borders */}
                {!isLast && (
                  <div className="hidden xl:block absolute top-1/2 -right-3.5 z-10 h-0.5 w-6 bg-slate-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Fallback instruction details for direct images if available */}
        <div className="mt-8 rounded-xl border border-slate-150 bg-white p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-3 items-center text-left">
            <HelpCircle className="h-5 w-5 text-indigo-500 shrink-0" />
            <div>
              <span className="font-mono text-[9px] font-bold text-indigo-600 block uppercase">
                DIAGRAM MOUNT NOTICE // S3 PATHWAY
              </span>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal">
                본 아키텍처는 Spring WebMVC 의 요청 인스턴스가 RabbitMQ의 <code>amq.direct</code> 스펙을 타격해 물리 GPU 노드를 트리거링하는 다형적 전이 구조에 기반합니다.
              </p>
            </div>
          </div>
          <span className="rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[9px] text-indigo-600 font-bold">
            DECOUPLED_STATUS_ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
}
