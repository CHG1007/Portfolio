import { Check } from "lucide-react";
import { PROFILE_DATA } from "../../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-50 py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            기술 스택 지표
          </h2>
          <div className="mx-auto h-1 w-12 bg-indigo-600 rounded" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILE_DATA.skillCategories.map((category) => (
            <div
              key={category.categoryName}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1.5 w-1/3 bg-indigo-600" />
              
              <h3 className="font-display text-sm font-bold text-slate-800 tracking-tight border-b border-slate-100 pb-3 uppercase mb-4">
                {category.categoryName}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 font-sans text-xs">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-indigo-50 text-indigo-600 font-bold">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
