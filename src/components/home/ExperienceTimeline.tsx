import { Briefcase, GraduationCap, ShieldAlert } from "lucide-react";

export default function ExperienceTimeline() {
  const timelineItems = [
    {
      id: "mil-off",
      period: "2020.03 ~ 2022.06",
      title: "대한민국 육군 통신 장교",
      sub: "통신망 운영 및 위기 대응",
      icon: ShieldAlert,
      color: "slate",
      bullets: [
        "부대 통신망 운영 및 위기 대응",
        "명확하고 체계적인 사건 보고 체계 운영",
        "마일스톤 기반 지휘 및 통제 수행"
      ]
    },
    {
      id: "work-mandoo",
      period: "2022.11 ~ 2025.05",
      title: "주식회사 만두파트너스",
      sub: "SW Engineer / 전략사업본부",
      icon: Briefcase,
      color: "indigo",
      bullets: [
        "비즈니스 요구사항 사내 전산화 및 기능 개발",
        "설계 표준 및 테크니컬 라이팅 수행",
        "개발 설계 및 일정 마일스톤 조율"
      ]
    },
    {
      id: "ssafy-14",
      period: "2025.07 ~ 2026.06 (예정)",
      title: "삼성청년SW·AI 아카데미, SSAFY 14기",
      sub: "백엔드 아키텍처 수련",
      icon: GraduationCap,
      color: "indigo",
      bullets: [
        "백엔드(Java, Spring Boot) 및 RESTful API 전문 설계",
        "비동기 분산 처리 파이프라인(MoM 프로젝트) 리드",
        "데이터베이스 관리 및 영속 계층 제어 적용"
      ]
    }
  ];

  return (
    <section id="experience" className="relative bg-white py-24 border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
            CAREER TIMELINE
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            경험 궤적
          </h2>
          <div className="mx-auto h-1 w-12 bg-indigo-600 rounded" />
        </div>

        {/* Timeline Line Grid */}
        <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {timelineItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative group text-left">
                {/* Timeline node icon widget */}
                <span className={`absolute -left-[38px] sm:-left-[46px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 border-indigo-600 text-indigo-600 shadow-md`}>
                  <Icon className="h-4 w-4" />
                </span>

                {/* Content Panel Card */}
                <div className={`rounded-xl border p-5 sm:p-6 transition-all duration-300 border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5 mb-3 border-b border-slate-200/50 pb-2">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-indigo-600 font-semibold mt-0.5">
                    {item.sub}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs font-sans text-slate-600 leading-relaxed font-normal">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2">
                        <span className="text-indigo-500 shrink-0 select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
