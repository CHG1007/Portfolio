import { MessageSquare, HelpCircle, Layers, CheckCircle } from "lucide-react";
import { Project } from "../../data/projects";

interface InterviewHighlightsProps {
  project: Project;
}

export default function InterviewHighlights({ project }: InterviewHighlightsProps) {
  const accentColor = project.accentColor || "#0123B4";

  if (project.slug !== 'mom') {
    return null;
  }

  const qaHighlights = [
    {
      q: "HTTP 요청과 AI 작업 분리를 구성해야 했던 연유는 무엇인가요?",
      a: "3D Gaussian Splatting 비디오 렌더링 및 메쉬 보정 연산은 물리적 GPU 기기가 개입해 최소 3~5분이 걸립니다. 이를 HTTP 서블릿 동기 라이프사이클 내에서 처리할 시 웹 소켓 타임아웃, 스레드 풀 고사로 와스 불능이 오기 때문에, 요청 즉시 Task ID를 반환받아 세션을 석방하고 RabbitMQ 로 비동기화 분사 처리를 완결했습니다."
    },
    {
      q: "RabbitMQ의 Redelivery 현상과 중복 처리 예지는 어떻게 수립했나요?",
      a: "GPU 연산 지연 시 RabbitMQ가 ACK 신호를 수신하지 못해 메시지를 Unacknowledged에서 타 워커에 재배포해버리는 중복 렌더링 문제가 동반됐습니다. 이를 해결하기 위해 요청 페이로드 기저의 Request Hash를 DB 고유 락으로 인덱싱하고, Consumer가 작업을 인수하는 즉시 terminal state를 DB에 교차 마킹해 중복 연집 가동을 단절시켰습니다."
    },
    {
      q: "JWT Access/Refresh 토큰 롤링 및 Redis 위임 검증의 구조적 가치는 무엇인가요?",
      a: "Access Token의 짧은 수명(수십 분)을 유지해 Stateless 검증 성능은 살리는 동시에, 로그아웃 차단 처리가 발생하면 Access Token의 잔여 만료 수명만큼 Redis에 Blacklist로 강제 마킹 수납해 도난 세션의 기만적인 역이용을 통제했습니다."
    },
    {
      q: "SMTP를 결합한 이메일 인증 설계의 지향점 및 아웃바운드 교정은 무엇인가요?",
      a: "회원가입 메일 승인은 동시성이 무겁지 않아 JVM 인메모리 세션 버퍼로 이메일 검증 상태를 수명 제어하고, 비밀번호 비상 리셋 OTP는 안전이 영속 보장되어야 해 Redis TTL 세션 바인더로 구조를 분할 격리해 불필요한 캐시 자원 누수를 예방했습니다."
    },
    {
      q: "이종 AI Provider Fallback 수식과 보완책은 어떻게 완성됐나요?",
      a: "사용자 분석 측정치가 도출되고도 타사 LLM API 인증이 만료되거나 순시 통신 도절 시, 전체 아바타 분석창이 멈춰 에러가 전파되는 병목이 있었습니다. OpenAI → Gemini → Anthropic 순으로 Exception을 실시간 캐치 기전으로 묶고, 최종 정전 시 로컬 수식으로 안전한 표준 설명 리포트를 발해 전체 성공률을 안전히 보증했습니다."
    },
    {
      q: "PostgreSQL JSONB 데이터 구조를 사용해 신치 계측을 수합한 배경은 무엇인가요?",
      a: "어깨, 허리, 가슴 등 SMPL 매쉬가 축출하는 치수 형태와 추가 학습 고도화 모델에 따라 스키마가 수시로 증강될 가능성이 높았습니다. RDB의 원자성을 해치지 않으면서 동적 key-value 스펙 적재와 인덱스 조회를 안전 지원하기 위해 가변 JSONB 컬럼 구조로 계수 명세를 영속 수렴했습니다."
    }
  ];

  return (
    <section className="relative py-16 bg-white border-b border-slate-100 text-left">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className="font-display text-xl font-extrabold text-slate-900 tracking-tight">
            백엔드 엔지니어 기술 인터뷰 하이라이트 요약 (Q&A Specs)
          </h2>
        </div>

        {/* Q&A Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {qaHighlights.map((qa, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-3 hover:bg-white hover:border-indigo-300 hover:shadow-2xs transition-all text-left"
            >
              <div className="flex gap-2 items-start">
                <HelpCircle className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                <h4 className="font-display text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                  {qa.q}
                </h4>
              </div>

              <div className="flex gap-2 items-start font-sans text-xs text-slate-600 leading-relaxed font-normal">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <p>{qa.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
