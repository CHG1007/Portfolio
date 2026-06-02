import { Mail, Github, BookOpen } from "lucide-react";
import { PROFILE_DATA } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col text-center md:text-left gap-1">
            <span className="font-display text-sm font-bold text-white tracking-wide">
              {PROFILE_DATA.name} {PROFILE_DATA.engName}
            </span>
            <span className="text-xs text-slate-500 font-sans">
              장시간 연산을 비동기로 분사 구현하는 백엔드 아키텍처 포트폴리오
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-850 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href={PROFILE_DATA.links.blog}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-850 hover:text-white transition-colors"
              title="Tistory Blog"
            >
              <BookOpen className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.links.emailRaw}`}
              className="p-2 rounded-full hover:bg-slate-850 hover:text-white transition-colors"
              title="Gmail Contact"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-850 flex flex-col md:flex-row justify-between text-slate-650 text-[11px] font-mono gap-3 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} {PROFILE_DATA.engName}. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4 justify-center md:justify-end">
            <span>NO GOOGLE OAUTH EMBEDDED</span>
            <span>NO MEDICAL HEALTH CLAIMS ASSIGNED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
