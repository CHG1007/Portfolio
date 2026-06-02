import { ArrowUpRight, BookOpen, Layers, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS_DATA, Project } from "../../data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative bg-white py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
            SELECTED LAB WORK
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            프로젝트
          </h2>
          <div className="mx-auto h-1 w-12 bg-indigo-600 rounded" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project) => {
            const isFeatured = project.status === "featured";
            const isMom = project.slug === "mom";
            const isFreeline = project.slug === "freeline";
            const isSniffy = project.slug === "sniffy-the-dog";
            
            return (
              <div
                key={project.slug}
                className={`group flex flex-col h-full rounded-2xl border text-left overflow-hidden transition-all duration-300 ${
                  isFeatured
                    ? (isFreeline ? "border-[#DBFC53]/30 bg-white shadow-xs hover:border-[#DBFC53]/70 hover:shadow-xl hover:-translate-y-1" : isSniffy ? "border-[#FE7122]/30 bg-white shadow-xs hover:border-[#FE7122]/70 hover:shadow-xl hover:-translate-y-1" : "border-indigo-200 bg-white shadow-xs hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1")
                    : "border-slate-150 bg-slate-50/40 opacity-75"
                }`}
              >
                
                {/* Simulated/Real Thumbnail Cover */}
                <div className={`relative h-44 flex flex-col justify-center items-center overflow-hidden border-b ${
                  isFeatured 
                    ? (isFreeline ? "bg-[#F0F2F5] text-slate-900" : isSniffy ? "bg-[#272727] text-white" : "bg-gradient-to-br from-indigo-50 to-indigo-100")
                    : "bg-slate-200/50 text-slate-400"
                }`}>
                  {isFeatured ? (
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.title} Logo`}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-sm" 
                    />
                  ) : (
                    <div className="p-6 text-center space-y-2">
                      <Server className="h-6 w-6 text-slate-450 mx-auto" />
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-405 tracking-wider block">
                        Coming soon
                      </span>
                    </div>
                  )}

                  {/* Tiny Status Marker */}
                  <span className={`absolute top-3.5 right-3.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                    isFeatured 
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" 
                      : "bg-slate-205 text-slate-500"
                  }`}>
                    {project.status === "featured" ? "Core Featured" : "Pipeline Todo"}
                  </span>
                </div>

                {/* Info Payload */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <span className={`font-mono text-[9.5px] font-bold uppercase tracking-widest block ${isFreeline ? 'text-[#2F2C48]' : 'text-indigo-650'}`}>
                      {project.period}
                    </span>
                    
                    <h3 className="font-display text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    <p className="font-sans text-[11px] text-slate-400 font-semibold bg-slate-50 border p-1 rounded-md">
                      Role // {project.role}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-2 pt-2">
                      {isFeatured ? (
                        <>
                          <Link
                            to={`/projects/${project.slug}`}
                            className={`flex-1 text-center py-2.5 rounded-lg font-sans text-xs font-bold shadow-sm transition-all uppercase tracking-wide ${
                              isFreeline 
                                ? "bg-[#DBFC53] text-[#2F2C48] hover:bg-[#c9f136] hover:shadow-md"
                                : isSniffy
                                ? "bg-[#FE7122] text-[#272727] hover:bg-[#e05f15] hover:shadow-md"
                                : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-50"
                            }`}
                          >
                            Case Study
                          </Link>
                          {project.links?.demo && !project.links.demo.includes("TODO") && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                              title="Live Demo"
                            >
                              <ArrowUpRight className="h-4.5 w-4.5" />
                            </a>
                          )}
                          {project.links?.demo && project.links.demo.includes("TODO") && (
                            <button
                              disabled
                              className="px-3 py-2.5 rounded-lg border border-slate-200 text-slate-300 font-mono text-[9px] cursor-not-allowed"
                              title="Demo Coming Soon"
                            >
                              DEV
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          disabled
                          className="w-full text-center py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-400 font-mono text-[11px] tracking-wider cursor-not-allowed uppercase"
                        >
                          Details Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
