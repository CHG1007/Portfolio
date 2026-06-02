import { FileText, ShieldAlert } from "lucide-react";
import { Project } from "../../data/projects";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const accentColor = project.accentColor || "#0123B4";

  const isFreeline = project.slug === 'freeline';
  const isSniffy = project.slug === 'sniffy-the-dog';

  return (
    <section className="relative py-16 bg-white border-b border-slate-100 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left panel: Overview of solutions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className={`p-1.5 rounded-lg ${isFreeline ? 'bg-[#F8FAF0] text-[#aacc00]' : isSniffy ? 'bg-[#FFF4EC] text-[#FE7122]' : 'bg-indigo-50 text-indigo-600'}`}>
                <FileText className="h-5 w-5" />
              </span>
              <h2 className={`font-display text-xl font-extrabold tracking-tight ${isFreeline ? 'text-[#2F2C48]' : isSniffy ? 'text-[#272727]' : 'text-slate-900'}`}>
                Project Overview & context
              </h2>
            </div>

            <div className="font-sans text-xs sm:text-sm text-slate-605 space-y-4 leading-relaxed font-normal">
              {project.overview?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right panel: Problem statements */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-red-50 text-red-600">
                <ShieldAlert className="h-5 w-5" />
              </span>
              <h2 className={`font-display text-xl font-extrabold tracking-tight ${isFreeline ? 'text-[#2F2C48]' : isSniffy ? 'text-[#272727]' : 'text-slate-900'}`}>
                Core Problem 정의
              </h2>
            </div>

            <div className="font-sans text-xs sm:text-sm text-slate-605 space-y-4 leading-relaxed font-normal">
              {project.problem?.map((para, idx) => (
                <p key={idx} className="border-l-2 pl-4 border-red-200 bg-red-50/10 py-1">{para}</p>
              ))}
            </div>

            {/* Quick warning of unrequested items */}
            {!isFreeline && !isSniffy && (
              <div className="rounded-xl bg-amber-50/50 border border-amber-200 p-4 font-sans text-xs text-amber-800 leading-relaxed">
                <strong>안전 경고 (Strict Boundary Audit):</strong> 본 3DGS 아바타 서비스는 사용자 입력 영상 기반의 시범용 샌드박스로서, 외부 AI 및 규칙 세트로 메쉬 치수를 분석하되 Google OAuth 정보나 의학적 판정 기능은 관여하지 않고 실서비스 이격 설무 연구용으로 구성되었습니다.
              </div>
            )}
            {isFreeline && (
              <div className="rounded-xl bg-[#F8FAF0] border border-[#DBFC53]/30 p-4 font-sans text-xs text-[#2F2C48] leading-relaxed">
                <strong>System Notice:</strong> 현장 대기열 관리를 위한 실서비스 환경을 상정하여 테스트되었으며, 부하 분산 및 실시간 동기화 안정성에 중점을 둔 백엔드 아키텍처 연구 사례입니다.
              </div>
            )}
            {isSniffy && (
              <div className="rounded-xl bg-[#FFF4EC] border border-[#FE7122]/30 p-4 font-sans text-xs text-[#272727] leading-relaxed">
                <strong>Trust & Safety boundary:</strong> AI 기반 추리 보조 모델은 거짓말 여부나 확정적 감정을 판별하지 않으며, 안면 표정과 음성 볼륨 변이값 바탕의 재미 위주 보조 서사만을 생성합니다. 개인 민감 정보 식별 영상을 보존하지 않습니다.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
