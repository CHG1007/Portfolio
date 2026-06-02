import { useParams, Link, Navigate } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projects";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ArchitectureFlow from "../components/project/ArchitectureFlow";
import ContributionCards from "../components/project/ContributionCards";
import TroubleshootingList from "../components/project/TroubleshootingList";
import InterviewHighlights from "../components/project/InterviewHighlights";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Locate current data
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  // If project is not found OR slug is not mom, redirect to page with elegant fallback details
  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  // If project status is coming-soon / study placeholder
  if (project.status === "coming-soon") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center space-y-6">
        <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
          <Clock className="h-6 w-6" />
        </div>
        <div className="space-y-2 text-left md:text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            {project.title} (준비 중)
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
            해당 프로젝트는 현재 마일스톤 설계 중이거나 테크니컬 블로그 포스팅 초안이 조율 중인 단계입니다. 빠른 시일 내에 주요 성과 및 아키텍처 흐름과 함께 세부 데이터가 오픈될 수 있도록 하겠습니다.
          </p>
        </div>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-sans text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>이력서 홈으로 가기</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Project Hero (includes breadcrumb & header back cta) */}
      <ProjectHero project={project} />

      {/* 2. Overview of solutions and problem definition columns */}
      <ProjectOverview project={project} />

      {/* 3. My Role summary (if direct array parameter exists, else rendered from profiles) */}
      {project.myRole && project.myRole.length > 0 && (
        <section className="relative py-12 bg-slate-50 border-b border-slate-100 text-left">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6 text-slate-900">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              <h3 className="font-display text-lg font-bold">My Personal Role Scope (역할 명세)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.myRole.map((roleText, rIdx) => (
                <div key={rIdx} className="rounded-xl border border-slate-200 bg-white p-4 text-xs font-sans text-slate-650 leading-relaxed font-normal flex gap-2.5 items-start">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-bold font-mono">
                    {rIdx + 1}
                  </span>
                  <span>{roleText}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Complete flow architecture diagram card */}
      <ArchitectureFlow project={project} />

      {/* 5. Clean contributions cards (Auth, security, pipelines, fallbacks) */}
      <ContributionCards project={project} />

      {/* 6. Robust Troubleshooting (Timeout, duplicate message delivery, third-party fallback) */}
      <TroubleshootingList project={project} />

      {/* 7. Comprehensive Tech Stack list */}
      {project.techStack && (
        <section className="relative py-16 bg-white border-b border-slate-100 text-left">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-10">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block">
                FULL INTEGRATED SYSTEM STACK
              </span>
              <h3 className="font-display text-xl font-extrabold text-slate-900">
                MoM 통합 백엔드 기술 스펙 아키텍처
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl bg-slate-100 border px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Key Interview Highlights Q&As */}
      <InterviewHighlights project={project} />

      {/* 9. Bottom Return Call-to-Action */}
      <div className="py-20 bg-slate-50 text-center border-b border-slate-100">
        <div className="max-w-md mx-auto space-y-4">
          <h4 className="font-display text-lg font-bold text-slate-800">
            상세 아키텍처 분석보고서 검토를 완료하셨나요?
          </h4>
          <p className="font-sans text-xs text-slate-500 leading-relaxed">
            최홍권의 전체 이력서 항목, 실무 근무 수치 스펙, 정량화 스택 등 더 넓은 범위의 역량 확인을 위해 포트폴리오 메인 화면으로 언제든 자유롭게 복귀하실 수 있습니다.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-sans text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>포트폴리오 중심 홈으로 돌아가기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
