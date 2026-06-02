import { MessageSquare, HelpCircle, Layers, CheckCircle } from "lucide-react";
import { Project } from "../../data/projects";

interface InterviewHighlightsProps {
  project: Project;
}

export default function InterviewHighlights({ project }: InterviewHighlightsProps) {
  const accentColor = project.accentColor || "#0123B4";

  if (!project.interviewHighlights || project.interviewHighlights.length === 0) {
    return null;
  }

  const qaHighlights = project.interviewHighlights;

  return (
    <section className={`relative py-16 border-b text-left ${project.slug === 'freeline' ? 'bg-[#F8FAF0] border-[#DBFC53]/30' : project.slug === 'sniffy-the-dog' ? 'bg-[#FFF4EC] border-[#FE7122]/30' : 'bg-white border-slate-100'}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className={`p-1.5 rounded-lg ${project.slug === 'freeline' ? 'bg-[#DBFC53]/20 text-[#2F2C48]' : project.slug === 'sniffy-the-dog' ? 'bg-[#FE7122]/20 text-[#FE7122]' : 'bg-indigo-50 text-indigo-600'}`}>
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className={`font-display text-xl font-extrabold tracking-tight ${project.slug === 'freeline' ? 'text-[#2F2C48]' : project.slug === 'sniffy-the-dog' ? 'text-[#272727]' : 'text-slate-900'}`}>
            백엔드 엔지니어 기술 인터뷰 하이라이트 요약 (Q&A Specs)
          </h2>
        </div>

        {/* Q&A Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {qaHighlights.map((qa, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border bg-slate-50/50 p-5 space-y-3 transition-all text-left ${project.slug === 'freeline' ? 'border-[#DBFC53]/40 hover:bg-white hover:border-[#DBFC53]' : project.slug === 'sniffy-the-dog' ? 'border-[#FE7122]/40 hover:bg-[#FFFFFF] hover:border-[#FE7122] hover:shadow-2xs' : 'border-slate-200 hover:bg-white hover:border-indigo-300 hover:shadow-2xs'}`}
            >
              <div className="flex gap-2 items-start">
                <HelpCircle className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${project.slug === 'freeline' ? 'text-[#2F2C48]' : project.slug === 'sniffy-the-dog' ? 'text-[#FE7122]' : 'text-indigo-500'}`} />
                <h4 className={`font-display text-xs sm:text-sm font-extrabold leading-snug ${project.slug === 'freeline' ? 'text-[#2F2C48]' : project.slug === 'sniffy-the-dog' ? 'text-[#272727]' : 'text-slate-900'}`}>
                  {qa.q}
                </h4>
              </div>

              <div className="flex gap-2 items-start font-sans text-xs text-slate-600 leading-relaxed font-normal">
                <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${project.slug === 'sniffy-the-dog' ? 'text-[#FE7122]' : 'text-emerald-500'}`} />
                <p>{qa.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
