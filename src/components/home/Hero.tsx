import React from "react";
import { ArrowDown, Github, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { PROFILE_DATA } from "../../data/profile";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white py-20 lg:py-32 border-b border-slate-100">
      {/* Decorative clean ambient grids (no toxic glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Main Info Columns */}
          <div className="space-y-6 text-left lg:col-span-7">
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {PROFILE_DATA.name}
              </h1>
              <p className="font-display text-lg font-semibold text-indigo-600 tracking-wide">
                Backend Developer
              </p>
            </div>

            {/* Practical Interactive Action Center */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-sans text-xs font-bold text-white shadow-md hover:bg-slate-800 hover:shadow-lg transition-all"
              >
                <span>프로젝트 탐색</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>

              <a
                href={PROFILE_DATA.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 font-mono text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://hong-1007.tistory.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 font-mono text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all"
              >
                <BookOpen className="h-4 w-4" />
                <span>Tistory Blog</span>
              </a>
            </div>
          </div>

          {/* Right Credentials Board Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-1.5 w-full bg-indigo-600" />
              
              <div className="mb-4 flex items-center justify-between border-b border-slate-250 pb-3">
                <span className="font-mono text-[9px] font-bold text-indigo-600 uppercase tracking-widest">
                  // Core Timeline
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 font-mono text-xs font-bold text-indigo-600">
                    1
                  </div>
                  <div>
                     <h4 className="font-display text-sm font-bold text-slate-800">대학교 IT응용시스템공학과 (부전공: 경영학부)</h4>
                     <p className="font-sans text-xs text-slate-500">2016.02 ~ 2020.02</p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 font-mono text-xs font-bold text-indigo-600">
                    2
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-800">대한민국 육군 통신장교</h4>
                    <p className="font-sans text-xs text-slate-500">2020.03 ~ 2022.06</p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 font-mono text-xs font-bold text-indigo-600">
                    3
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-800">만두파트너스 SW Engineer</h4>
                    <p className="font-sans text-xs text-slate-500">2022.11 ~ 2025.05</p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 font-mono text-xs font-bold text-indigo-600">
                    4
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-800">삼성 SSAFY 14기</h4>
                    <p className="font-sans text-xs text-slate-500">2025.07 ~ 진행 중</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
