import { useState } from "react";
import { KeyRound, Mail, Layers, ShieldCheck } from "lucide-react";
import { Project } from "../../data/projects";

interface ContributionCardsProps {
  project: Project;
}

export default function ContributionCards({ project }: ContributionCardsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const accentColor = project.accentColor || "#0123B4";

  if (!project.contributions || project.contributions.length === 0) return null;

  const icons = [Mail, KeyRound, Layers, ShieldCheck];

  return (
    <section className="relative py-16 bg-white border-b border-slate-100 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest block" style={{ color: accentColor }}>
            CORE TECHNICAL CONTRIBUTIONS
          </span>
          <h2 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
            내가 기여한 주요 백엔드 모듈 및 해결 성과
          </h2>
          <div className="h-1 w-12 rounded" style={{ backgroundColor: accentColor }} />
        </div>

        {/* Tab Header selectors */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-3">
          {project.contributions.map((contrib, idx) => {
            const Icon = icons[idx % icons.length] || Layers;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-sans text-xs font-bold transition-all border ${
                  isActive
                    ? "text-white shadow-xs border-transparent"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
                style={isActive ? { backgroundColor: accentColor } : {}}
              >
                <Icon className="h-4 w-4" />
                <span>{contrib.title.split(" 및 ").shift()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Contribution Body Card */}
        <div className="rounded-2xl border border-slate-205 bg-slate-50/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-1.5 text-left">
              <h3 className="font-display text-lg font-extrabold text-slate-900">
                {project.contributions[activeTab].title}
              </h3>
              <p className="font-sans text-xs text-slate-505 font-semibold">
                {project.contributions[activeTab].description}
              </p>
            </div>
          </div>

          {/* Details Bullet List */}
          <ul className="space-y-3 font-sans text-xs text-slate-700 leading-relaxed font-normal text-left">
            {project.contributions[activeTab].details.map((detail, dIdx) => (
              <li key={dIdx} className="flex gap-2.5 items-start">
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold ${project.slug === 'freeline' ? 'bg-[#DBFC53]/20 text-[#2F2C48]' : 'bg-indigo-50 text-indigo-600'}`}>
                  {dIdx + 1}
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Tags used */}
          <div className="space-y-2 pt-4 border-t border-slate-200">
            <span className="block font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">
              // ASSOCIATED_TECHNOLOGIES_USED
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.contributions[activeTab].techUsed.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-white border border-slate-200 px-3 py-1 font-mono text-[10.5px] font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
