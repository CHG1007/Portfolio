import { ShieldCheck, Target, Users } from "lucide-react";

export default function About() {
  const keywords = [
    "비동기 파이프라인 분산",
    "RabbitMQ / Redis",
    "JVM 메모리 관리",
    "장애 대응 및 안정성 확보",
    "명확한 마일스톤 조율"
  ];

  return (
    <section id="about" className="relative bg-slate-50 py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-12">
          <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
            ABOUT DEVELOPER
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            신뢰와 책임을 딛고 구축하는 백엔드 개발자
          </h2>
          <div className="mx-auto h-1 w-12 bg-indigo-600 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left core intro story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-display text-xl font-bold text-slate-800">
              비즈니스의 안전 전송 가치와 기술 흐름의 조율
            </h3>
            
            <div className="font-sans text-sm text-slate-600 space-y-4 leading-relaxed font-normal">
              <p>
                단순한 서비스 작동에 만족하지 않고, Timeout, 동시성 오류, 클라우드 API 장애와 같은 <strong>물리적 한계 상황을 예견하고 방어하는 소프트웨어 엔지니어링</strong>을 추구합니다.
              </p>
              
              <p>
                군 장교 대대 통신망 지휘 경험에서 다져진 깊은 책임의식은 장애 발생 시 즉각적인 원인 인덱스 추적과 명료한 커뮤니케이션으로 승화되며, 언제나 안전한 서비스를 최우선 가치로 둡니다.
              </p>
            </div>

            {/* Keyword badges */}
            <div className="pt-4">
              <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                // 핵심 전문 역량 키워드
              </span>
              <div className="flex flex-wrap gap-2">
                {keywords.map((word, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-indigo-50 px-2.5 py-1 font-sans text-xs font-semibold text-indigo-600 border border-indigo-100"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right value prop panels */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex gap-3 items-start">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900">철저한 방어형 보안 설계</h4>
                  <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                    시스템이 보호해야 할 데이터를 식별하고 JWT 기반 안전 지대를 구성합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex gap-3 items-start">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900">성능 병목 격리 및 비동기 분사</h4>
                  <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                    서블릿 점유를 해소하기 위해 RabbitMQ 기반 버퍼링 체계를 정립해 Timeout을 단절시켰습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex gap-3 items-start">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900">밀착 조율 커뮤니케이션</h4>
                  <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                    개발 속도의 시너지 변곡점을 뚫어내기 위한 명료한 API 명세를 사전에 구조화합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
