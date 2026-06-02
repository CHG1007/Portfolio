import { ArrowLeft, ArrowUpRight, Cpu, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../../data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const accentColor = project.accentColor || "#0123B4";

  return (
    <div className="relative overflow-hidden bg-slate-50 py-12 border-b border-slate-200">
      {/* Dynamic line background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px)] bg-[size:4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-left">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs text-slate-500 font-mono">
          <Link to="/" className="hover:text-slate-900">Portfolio</Link>
          <span>/</span>
          <Link to="/#projects" className="hover:text-slate-900">Projects</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{project.title}</span>
        </div>

        {/* Back Link Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-250 bg-white px-3.5 py-1.5 font-sans text-xs font-bold text-slate-700 hover:bg-slate-55 transition-all shadow-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-slate-500" />
            <span>이력서 포트폴리오로 복귀</span>
          </Link>

          {project.links.demo && (
            <div className="flex items-center gap-2">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all"
                style={{ backgroundColor: accentColor }}
              >
                <span>MoM Live Demo Launch</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {/* Main Content Info */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[9px] font-bold text-white uppercase tracking-wider"
              style={{ backgroundColor: accentColor }}
            >
              <Cpu className="h-3 w-3" />
              SSAFY 14기 대표 우수작
            </span>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              {project.title}
            </h1>
            <p className="font-display text-lg font-semibold text-slate-600">
              {project.subtitle}
            </p>
            <p className="font-sans text-sm text-slate-550 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Quick Specifications Metadata Grid */}
          <div className="lg:col-span-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="block font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-105 pb-2 mb-3.5">
              // PROJECT METRIC SHEATH
            </span>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex justify-between items-center py-0.5">
                <span className="text-slate-400 font-semibold uppercase font-mono text-[10px]">Period</span>
                <span className="text-slate-800 font-bold">{project.period}</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-slate-400 font-semibold uppercase font-mono text-[10px]">Team Size</span>
                <span className="text-slate-800 font-bold">{project.teamSize}</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-slate-400 font-semibold uppercase font-mono text-[10px]">My Role</span>
                <span className="text-indigo-600 font-bold">{project.role}</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-slate-400 font-semibold uppercase font-mono text-[10px]">Accent Token</span>
                <span className="font-mono font-bold text-slate-700" style={{ color: accentColor }}>{accentColor}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
