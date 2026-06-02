export interface Contribution {
  title: string;
  description: string;
  details: string[];
  techUsed: string[];
}

export interface Troubleshooting {
  lap: string;
  problem: string;
  solution: string;
  result: string;
  metricTodo?: string;
}

export interface GalleryItem {
  id: string;
  fileName: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  period: string;
  teamSize: string;
  role: string;
  status: "featured" | "coming-soon";
  accentColor: string;
  thumbnail: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    detail?: string;
  };
  overview?: string[];
  problem?: string[];
  myRole?: string[];
  architecture?: string[];
  contributions?: Contribution[];
  troubleshooting?: Troubleshooting[];
  techStack?: string[];
  gallery?: GalleryItem[];
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "mom",
    title: "MoM, Model of Me",
    subtitle: "AI 기반 3D 아바타 체형 분석 서비스",
    summary: "360도 신체 영상을 업로드하면 AI 파이프라인이 개인화 3D 아바타와 체형 분석 결과를 생성하는 모바일 헬스케어 팀 프로젝트입니다.",
    period: "2026.03 ~ 2026.06 (SSAFY 기업연계 프로젝트)",
    teamSize: "개발 6명 (FE: 1, AI/Hardware: 3, BE: 2)",
    role: "Backend / API / AI Pipeline Integration",
    status: "featured",
    accentColor: "#0123B4",
    thumbnail: "https://raw.githubusercontent.com/CHG1007/Portfolio/main/public/mom-logo.png",
    tags: [
      "Spring Boot",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "MinIO/S3",
      "Python AI Worker",
      "FCM",
      "AI Pipeline"
    ],
    links: {
      github: "https://github.com/CHG1007",
      demo: "https://modelofme.vercel.app/",
      detail: "/projects/mom"
    },
    overview: [
      "MoM(Model of Me)은 집에서도 손쉽게 전신 스틸 비디오 한 장으로 신체 계측 정보와 개인화된 3DGS(3D Gaussian Splatting) 아바타를 수집할 수 있는 모바일 전용 헬스케어 솔루션입니다.",
      "사용자가 Flutter 기반 모바일 및 웹 대시보드 인터페이스를 통해 360도 회전 신체 영상을 업로드하면, 백엔드 서버(Spring Boot)가 대용량 입출력 파일을 안전하게 Object Storage에 보관한 뒤 비동기 분산 메시지 버퍼(RabbitMQ)에 작업을 적재합니다.",
      "물리적으로 격리된 고성능 GPU Python AI Worker가 렌더링 스텝 완료 이벤트를 다시 발행하면, 백엔드가 결과를 DB에 영속화하고 FCM(Firebase Cloud Messaging) 푸시 메세지를 발송하여 무거운 렌더링 과정을 매끄럽게 연결합니다."
    ],
    problem: [
      "3D 아바타 생성(3DGS 기법)과 정밀 매쉬 피팅(SMPL)은 GPU 연산 자원을 매우 무겁게 소모하며 완료까지 최소 수 분의 시간이 걸립니다.",
      "이를 클라이언트가 API를 호출한 동기적 웹 커넥션 내에서 지속 점유할 경우, 가용한 서버 스레드가 전체적으로 고갈되어 커넥션 누수(Connection Pool Exhaustion)가 발생하고 모바일 소켓 클로즈로 인한 Timeout 장애가 고착화됩니다.",
      "따라서 연산부와 API 웹 컨트롤러를 완전히 이격하며, 장시간의 작업을 버퍼링해 안전하게 스케일링할 수 있는 독립형 비동기 파이프라인 설계가 요구되었습니다."
    ],
    myRole: [
      "Spring Boot 기반의 메인 WAS 설계 및 도메인 비즈니스 기능(회원 자격, 토큰 롤링, 메일 인증, 미디어 메타데이터 관리)의 총괄 구현",
      "SMTP 메일러 연계 인증 로직 설계 및 세션 유효 시간 통제를 위한 메모리 버퍼 및 Redis 보조 TTL 모듈 구축",
      "Spring Security 프레임워크와 결합된 로그인 시스템 및 JWT 기반 보안 구조 조립",
      "MinIO 파일 업로드 연계 비동기 RabbitMQ 작업 전파 구조 엔지니어링 및 Python Worker 인바운드 수신 핸들링",
      "외부 LLM API 호출 지연 방어를 위한 다상 Fallback 메커니즘 구축 및 Rule-based 보완 작성자 구축"
    ],
    architecture: [
      "Flutter App - 360도 전신 촬영 및 인증 요청 위임",
      "Spring Boot API Server - 요청 수신, 회원 가드 및 Task DB 제어",
      "MinIO/AWS S3 - 대용량 원본 파일(.mp4) 및 산출물(.spz 아바타, .json 치수) 보호 영역",
      "RabbitMQ - 'mom.task.queue'를 통한 비동기 렌더 발행 및 진행 스케줄 보존 버퍼",
      "Python AI Worker - COLMAP 좌표 정합, SAM2 비디오 마스킹, 3DGS 렌더링, SMPL 메쉬 피팅 실행",
      "PostgreSQL/Redis - 세션 토큰 블랙리스트, 비밀번호 변경 OTP, Task 인덱스 및 수치 데이터 가록 처리",
      "FCM Node - 비동기 수동 렌더링 통지 FCM Push 발송",
      "User Display - 아바타 3D 회전 제어 및 체형 리포트 수신"
    ],
    contributions: [
      {
        title: "Auth & Mail",
        description: "회원가입 절차 무결성 확보 및 비밀번호 복구 흐름 안전 지대를 고도화했습니다.",
        details: [
          "보안 난수(SecureRandom) 생성기를 결합한 6자리 고신뢰 이메일 인증 코드 발송 로직 개발 (동시성 안전을 위해 JVM 메모리 상에서 세션 생명주기 관리)",
          "Thymeleaf HTML 메일 템플릿 렌더링 구조를 적용하여 기업형 메일 디자인 가독성 제공",
          "비밀번호 재설정 모듈에서 이위화된 OTP 임시 안전 처리를 위해 Redis TTL(Time-To-Live) 기반의 검증 시간 제한 타이머와 요청 유입 빈도 제한 블로커 구축"
        ],
        techUsed: ["SMTP Mail Sender", "SecureRandom", "Thymeleaf", "Redis TTL"]
      },
      {
        title: "Token Security",
        description: "Stateless 자격 검증 아키텍처와 유동적 강제 정지 기법을 믹스했습니다.",
        details: [
          "Access Token (짧은 수명, 인메모리 복호화) 및 Refresh Token (긴 수명, Redis 영속 보증) 구분의 이중 토큰 구조 정립",
          "로그아웃 선언 시 유저의 기존 Access Token의 잔여 만료 시간을 산출하여 Redis Blacklist 에 등록함으로써 수명 종료 전까지 탈취 세션 탈환 원천 차단",
          "데이터 갱신 시 로그인 주체와 리소스 소유권 간 상호 일치 여부를 가로채 검증하는 스프링 가드(Security Interceptors) 적용"
        ],
        techUsed: ["JWT", "Spring Security", "Redis Blacklist", "Interceptor Gating"]
      },
      {
        title: "Async Rendering Pipeline",
        description: "HTTP 호출 단계와 고성능 물리 GPU 서버 간 통신 규약을 결합 해제했습니다.",
        details: [
          "클라이언트가 영상을 업로드하면 먼저 MinIO에 저장하고, 즉각 고유 Task ID와 'PROCESSING' 상태를 DB에 적재한 후 클라이언트는 대기 없이 즉시 응답을 전개",
          "RabbitMQ 브로커를 거쳐 작업을 Python AI Worker로 송출. GPU 기반 연산(COLMAP, SAM2, 3DGS, SMPL)을 순차 구동",
          "AI Worker의 처리 완료 이벤트를 Spring AMQP Listener가 서브스크립션하여 S3 SPZ 모델 데이터 경로 및 계측 정보를 DB에 반영한 뒤 FCM을 통해 모바일 유저 피드 알림 송출 완료"
        ],
        techUsed: ["RabbitMQ (AMQP)", "MinIO", "FCM Web/Mobile Push API", "Spring AMQP"]
      },
      {
        title: "AI Feedback Stability",
        description: "외부 거대 언어 모델 API의 레이턴시 지연과 수수료 만료를 극복하기 위한 다중 가용 통로를 설계했습니다.",
        details: [
          "신체 측정 구조 데이터(SMPL 결과)를 기반으로 자동 텍스트 피드백을 작성할 시 외부 네트워크 불안정성에 대응",
          "OpenAI API 실패 감지 시 즉시 차선책인 Gemini API로 Fallback을 실행, 삼선책인 Anthropic API 시도 체계 설계",
          "모든 클라우드 파트너 채널이 차단되는 정전 상태 시, 스프링 서비스 내부로 완벽히 격리된 자체 Rule-based 로컬 텍스트 피드백 생성기(Local Fallback Provider)가 최종 리포트를 대체해 작업 파이프라인 흐름 연속성 보호"
        ],
        techUsed: ["OpenAI API", "Gemini API", "Anthropic Claude API", "Multi-Stage Fallback Guard", "Rule-Based Engine"]
      }
    ],
    troubleshooting: [
      {
        lap: "Lap 01. 장시간 무거운 AI 분석으로 인한 HTTP API 동기식 Timeout",
        problem: "영상 검사-추출-메시 학습으로 이어지는 GPU 집약적 작업이 3~5분 이상 소요되어, 일반 REST 엔드포인트 연드 시 소켓 끊김, 커넥션 풀 부족, 메인 가용 스레드 고사현상이 유발됨.",
        solution: "동작 접수처와 물리 실행처의 분리가 마땅하여, 호출 접수 즉시 작업 식별자(Task ID)를 발급해 클라이언트 세션을 조기 석방하고, RabbitMQ 브로커에 작업을 던져 독립 실행시킴. 백엔드는 스레드 상태 대신 DB Task Row 상태('PROCESSING')로 주기적 업데이트를 핸들링함.",
        result: "클라이언트 소켓 끊김율 0.0%로 안정화. 긴 작업 단락 위험이 메인 WAS로 일절 번지지 않고, 비상 시 워커 노드 스케일아웃에 유리한 분산 완결 지향.",
        metricTodo: "TODO_METRIC - 평균 API 레이턴시 응답속도 오버헤드를 비동기 반환화하여 즉시 해소"
      },
      {
        lap: "Lap 02. RabbitMQ Redelivery 오동작으로 인한 3DGS 렌더링 중복 연산 방어",
        problem: "GPU 워커 처리가 과하게 지체되거나 세션 단락 등의 예기치 못한 이슈 발생 시, RabbitMQ 브로커가 처리 중인 메시지를 Unacknowledged 상태로 간주하여 타 유휴 워커에 재할당(Redeliver)해 버리는 중복 로드 발생.",
        solution: "요청 페이로드 유일값으로 개별 작업에 고유 해시(Request Hash)를 산출해 작업 전 영속 테이블에 진행 락을 걸고, 개시 시점에 terminal marker를 기록. 리스너도 DB Task의 기 반영 종료 여부를 교차 점검해 빈 렌더링 응답을 방어 처리하도록 구성.",
        result: "일시적 네트워크 단락 및 하트비트 타임아웃에 따른 클라우드 하드웨어 장비 중복 가동비 및 저장소 중복 기입 무결성 붕괴 방지 성공.",
        metricTodo: "TODO_METRIC - 중복 연산 방어로 GPU 가동 리소스 낭비 원천 차단"
      },
      {
        lap: "Lap 03. 외부 LLM API 통신 순시 도절로 인한 체형 분석 피드백 중단 사태",
        problem: "사용자의 세부 보디 치수가 출력되었음에도, 리포트 요약 텍스트를 구성하는 타사 클라우드 모델 호출처에서 지연이나 수수료 만료, JSON 구문 왜곡 에러가 발생하면 전체 아바타 수합 결과창에 에러가 전파되어 사용자 화면이 멈춤.",
        solution: "강결합된 외부 자원 연계를 다단계 생존 메커니즘으로 교체. OpenAI → Gemini → Anthropic 순으로 예외 캐치 시 실시간 Fallback 전이 체계를 두고, 전체 정전 시 로컬 수식 엔진이 수식을 가공해 standard feedback 카드를 제공하도록 설계.",
        result: "인공지능 리포팅 생성 성공률 강제 100% 견임. 사소한 API 인증 만료가 전체 아바타 빌드 실패로 확산되는 병목 유발 요인을 철저히 사멸 조치.",
        metricTodo: "TODO_METRIC - 클라우드 연계 오류 발생 시 서비스 활성 상태 보존률 100.0%"
      }
    ],
    techStack: [
      "Spring Boot 3.x",
      "Java 17",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "MinIO Object Storage",
      "Python Python 3.10",
      "PyTorch",
      "SAM2 (Segment Anything)",
      "3D Gaussian Splatting",
      "SMPL Form Fitting",
      "Docker / Docker Compose",
      "Firebase Cloud Messaging (FCM)"
    ],
    gallery: [
      {
        id: "mom-demo-home",
        fileName: "mom-demo-home.png",
        title: "MoM 모바일 홈 스크롤 대시보드",
        description: "로그인 완료 후, 유저의 최근 신체 3D 아바타 카드 모델과 일별 최적 행동 처방 및 학습 단계를 가독성 있게 표출하는 코어 화면입니다."
      },
      {
        id: "mom-avatar-result",
        fileName: "mom-avatar-result.png",
        title: "3DGS 아바타 학습 결과 및 렌더링",
        description: "비동기 Python Worker가 COLMAP 좌표 추출을 통해 학습한 SPZ 아바타 가상 앵글 모형 뷰어입니다."
      },
      {
        id: "mom-body-analysis",
        fileName: "mom-body-analysis.png",
        title: "신체 정확 치수 및 비장 피드백 리포팅",
        description: "SMPL 메쉬 피팅 결과를 보정해 가공한 어깨, 가슴, 엉덩이, 허리의 실시간 가중치 차트와 그룹 비교 분석 도표입니다."
      },
      {
        id: "mom-erd",
        fileName: "mom-erd.png",
        title: "MoM ERD 구조 모델 설계",
        description: "유저, 작업 지시(Task), 미디어 파일(Video), 산출 파일(Model), 신체 측정 데이터(Measurement) 간의 유기적인 관계 스키마입니다."
      },
      {
        id: "mom-architecture",
        fileName: "mom-architecture.png",
        title: "MoM 비동기 전체 아키텍처 구조",
        description: "클라이언트에서 Spring Boot, MinIO, RabbitMQ, GPU AI 워커로 분사되는 연계 인프라 설계 명세입니다."
      },
      {
        id: "mom-render-sequence",
        fileName: "mom-render-sequence.png",
        title: "비동기 아바타 생성 시퀀스 명세",
        description: "클라이언트 업로드 개시부터 RabbitMQ 이벤트 브로커 점적 발행, Python AI Worker 분석 완료 수신 후 FCM 푸시 전이까지의 완결성 시퀀스 라이프사이클입니다."
      }
    ]
  },
  {
    slug: "freeline",
    title: "FreeLine, 줄서잇",
    subtitle: "스마트 축제 대기열 관리 서비스",
    summary: "축제·박람회 현장에서 방문자가 모바일로 부스 대기열에 등록하고, 부스 운영자가 호출·QR 도착 확인·입장 상태를 실시간으로 관리할 수 있도록 돕는 대기열 관리 플랫폼입니다.",
    period: "2026.02 ~ 2026.04",
    teamSize: "6명",
    role: "Backend",
    status: "featured",
    accentColor: "#DBFC53",
    thumbnail: "https://raw.githubusercontent.com/CHG1007/Portfolio/main/public/freeline-logo.png",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "SSE",
      "FCM",
      "QR",
      "React Native",
      "Next.js"
    ],
    links: {
      github: "TODO_GITHUB_URL",
      demo: "TODO_DEMO_URL",
      detail: "/projects/freeline"
    },
    overview: [
      "FreeLine은 축제·박람회 현장의 부스 대기열을 모바일 중심으로 관리하기 위한 서비스입니다.",
      "방문자는 모바일 앱에서 부스를 조회하고 대기열에 등록하며, 부스 운영자는 호출·도착 확인·입장 상태를 운영자 웹에서 처리합니다.",
      "행사 운영자는 행사와 부스, 지도, 엔트리 코드, 리포트를 관리합니다."
    ],
    problem: [
      "현장 방문자는 긴 물리 대기줄에 묶여 다른 부스를 자유롭게 이용하기 어렵습니다.",
      "부스 운영자는 호출 대상과 도착 확인 사용자를 수기로 관리해야 합니다.",
      "행사 운영자는 부스 위치와 혼잡도를 한 화면에서 파악하기 어렵습니다."
    ],
    myRole: [
      "대기 등록, 호출, QR 도착 확인, 입장, 퇴장으로 이어지는 상태 전이 API를 구현했습니다.",
      "QR 스캔 중복 요청을 Redis TTL lock으로 방어하고, 호출 유효 시간이 지난 대기를 만료 처리하도록 설계했습니다.",
      "RabbitMQ 이벤트를 SSE와 FCM으로 분기해 운영자 화면 갱신과 방문자 푸시 알림을 연결했습니다.",
      "행사 지도 위 부스 영역을 비율 좌표로 저장해 다양한 화면 크기에서도 위치가 유지되도록 구현했습니다."
    ],
    architecture: [
      "방문자 앱, 부스 운영자 웹, 행사 운영자 웹이 Spring Boot API 서버와 통신합니다.",
      "백엔드는 PostgreSQL에 대기열 원장을 저장하고, Redis를 인증·QR lock·SSE pub/sub에 사용합니다.",
      "대기 상태 변경은 RabbitMQ 이벤트로 발행되어 부스 운영자 SSE 갱신과 방문자 FCM 알림으로 분기됩니다.",
      "대기 상태 전이: WAITING → CALLED → REGISTERED → ENTERED → EXITED (취소: CANCELED, 만료: EXPIRED)"
    ],
    contributions: [
      {
        title: "Queue Domain Logic",
        description: "대기 등록 및 상태 전이 흐름을 안전하게 검증하고 설계했습니다.",
        details: [
          "대기 등록 시 동일 부스 중복 여부, 방문자 활성 대기 개수(최대 3개), 부스별 최대 대기 제한을 서비스 레벨에서 검증",
          "WAITING, CALLED, REGISTERED, ENTERED, EXITED 상태 전이 API 구현",
          "서비스 메서드별로 허용 상태를 엄격히 제한하여 잘못된 순서의 입장/취소/퇴장을 원천 차단"
        ],
        techUsed: ["Spring Boot", "PostgreSQL", "Domain Model"]
      },
      {
        title: "QR Scan Guard",
        description: "QR 기반 도착 확인과 중복 요청 및 호출 만료를 방어했습니다.",
        details: [
          "QR 스캔 중복 요청을 Redis setIfAbsent 기반 TTL lock으로 방어",
          "QR payload 검증(prefix, purpose, version, boothId, qrKey) 및 활성 QR과 CALLED 상태 대기 검증 로직 구현",
          "호출 유효 기간(기본 180초)이 지난 대기를 만료(EXPIRED) 처리하는 흐름 적용"
        ],
        techUsed: ["Redis TTL Lock", "QR Payload"]
      },
      {
        title: "Realtime Event Flow",
        description: "RabbitMQ와 Redis, SSE/FCM을 결합한 실시간 알림 구조를 구축했습니다.",
        details: [
          "대기 상태 변경을 RabbitMQ 이벤트로 발행하고 SSE와 FCM으로 분기하는 구조 설계",
          "SSE emitter가 단일 서버 메모리에 묶이는 한계를 Redis pub/sub로 보완해 운영자 화면 실시간 갱신(broadcast) 구현",
          "호출, 퇴장, 만료 상황을 판별해 FCM 방문자 푸시 알림 및 RabbitMQ delay queue 기반 리마인더 연결"
        ],
        techUsed: ["RabbitMQ", "Redis pub/sub", "SSE", "FCM"]
      },
      {
        title: "Booth Map Data",
        description: "행사장 지도와 부스 위치를 비율 좌표 기반으로 저장하는 시스템을 구성했습니다.",
        details: [
          "행사 지도 위 부스 영역을 xRatio, yRatio, widthRatio, heightRatio 기반 비율 좌표로 엔티티 관리",
          "다양한 화면 기기 환경에서도 지도 내 부스 위치가 일정하게 유지되도록 구현",
          "방문자가 지도상에서 부스별 대기 인원과 혼잡도를 실시간으로 확인 가능하도록 응답 DTO 설계"
        ],
        techUsed: ["PostgreSQL", "Next.js Integration", "Geometry Mapping"]
      }
    ],
    troubleshooting: [
      {
        lap: "Case 01. 대기 중복 등록과 최대 대기 제한",
        problem: "방문자가 같은 부스에 여러 번 대기하거나 여러 부스에 과도하게 동시 대기하면 호출 대상과 순번이 꼬일 수 있다.",
        solution: "활성 상태(WAITING, CALLED, REGISTERED, ENTERED)를 기준으로 동일 부스 중복 여부 및 방문자의 최대 대기 개수(3개), 부스별 최대 대기 수를 검증하고 차단하도록 서비스 로직에 방어선을 구축했다.",
        result: "같은 방문자의 동일 부스 중복 대기와 최대 대기 개수 초과를 API 레벨에서 안전하게 차단한다.",
        metricTodo: "TODO_METRIC - 순번 채번 관련 동시성 이슈 일부 보완 여지"
      },
      {
        lap: "Case 02. QR 스캔 중복 요청 방어",
        problem: "모바일 네트워크 재시도나 사용자의 중복 클릭으로 인해 동일한 QR 스캔 요청이 서버로 연속 유입되어 대기 상태 변경이 중복될 수 있다.",
        solution: "QR 스캔 요청 시 Redis의 setIfAbsent를 활용해 boothId와 visitorId를 키로 갖는 TTL lock을 획득하도록 하고 작업 후 릴리즈하는 로직을 적용했다.",
        result: "짧은 시간 내에 발생하는 동일 booth/visitor의 QR 중복 스캔 요청을 효율적으로 방어한다.",
        metricTodo: "TODO_METRIC - 인프라 부하 절감 비율 확인"
      },
      {
        lap: "Case 03. SSE 멀티 인스턴스 전달 누락 방지",
        problem: "SSE emitter는 서버 인스턴스 메모리에 저장되므로, 대기 이벤트를 발생시킨 인스턴스와 SSE 연결이 성립된 인스턴스가 다르면 이벤트 브로드캐스트가 누락된다.",
        solution: "대기 상태 변경을 RabbitMQ로 발행 후 백엔드가 소비하고, SSE consumer가 이를 Redis 채널에 publish하도록 했다. 이를 통해 모든 백엔드 인스턴스가 Redis pub/sub를 통해 메시지를 수신하여 자기 메모리에 있는 emitter들에게 브로드캐스트하도록 보완했다.",
        result: "서버 확장으로 인해 발생하는 SSE 연결 단절 및 분실 문제를 Redis pub/sub로 완벽히 중계한다.",
        metricTodo: "TODO_METRIC - 메시지 유실 0건 보장"
      },
      {
        lap: "Case 04. 행사장 지도와 부스 위치 표시 최적화",
        problem: "운영자가 등록한 행사장 지도 이미지는 방문자의 접속 기기 화면 크기나 비율에 따라 픽셀 좌표가 크게 왜곡될 수 있어, 부스 위치 지정 시 틀어짐이 발생한다.",
        solution: "운영자가 지정한 부스 영역을 절대 픽셀 값이 아닌 원본 이미지 대비 비율(xRatio, yRatio, widthRatio, heightRatio)로 저장하고, 조회가 요청될 때 사용자 화면 기준 비율로 반환하도록 설계했다.",
        result: "지도 이미지 디스플레이 크기가 가변적으로 바뀌어도 해당 부스 위치 마스킹 및 대기현황 데이터 표시가 동일한 위치를 보장한다.",
        metricTodo: "TODO_METRIC"
      }
    ],
    techStack: [
      "Java 21",
      "Spring Boot 3.x",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Server-Sent Events (SSE)",
      "Firebase Cloud Messaging (FCM)",
      "Expo React Native",
      "Next.js",
      "Docker / Nginx",
      "Jenkins / Prometheus / Grafana"
    ],
    gallery: [
      {
        id: "freeline-main",
        fileName: "freeline-main.png",
        title: "FreeLine 메인 대시보드",
        description: "축제 현장의 대기 상태와 호출을 모니터링할 수 있는 메인 대시보드"
      },
      {
        id: "freeline-map",
        fileName: "event-map.png",
        title: "행사장 지도와 혼잡도",
        description: "비율 기반으로 저장된 부스 위치와 대기 인원이 함께 표출되는 지도 화면"
      },
      {
        id: "freeline-qr",
        fileName: "qr-checkin.png",
        title: "QR 도착 확인 체계",
        description: "호출된 대기자가 도착했을 때 스캔하여 REGISTERED 상태로 인증받는 흐름"
      },
      {
        id: "freeline-manager",
        fileName: "booth-manager-queue.png",
        title: "운영자 대기열 통제 관리자",
        description: "SSE로 실시간 동기화되는 대기열 현황과 호출/취소 처리 대시보드"
      },
      {
        id: "freeline-architecture",
        fileName: "system-architecture.png",
        title: "시스템 아키텍처",
        description: "Spring Boot, Redis, RabbitMQ, PostgreSQL로 구성된 백엔드 서비스 아키텍처"
      },
      {
        id: "freeline-flow",
        fileName: "waiting-state-flow.png",
        title: "대기 상태 전이 (Waiting Logic)",
        description: "WAITING부터 EXITED까지 사용자 및 운영자의 행동에 따라 엄격하게 검증된 상태 변경 흐름"
      }
    ]
  },
  {
    slug: "backend-lab",
    title: "Backend Lab / Personal Project",
    subtitle: "개인 백엔드 분산 및 성능 연구소",
    summary: "개인 프로젝트 정보 입력 예정 (Coming Soon)",
    period: "2025.12 ~ 진행 중",
    teamSize: "1명 (개인 리서치)",
    role: "Single Owner",
    status: "coming-soon",
    accentColor: "#64748B",
    thumbnail: "",
    tags: ["Spring Boot", "Redis Cluster", "PostgreSQL JSONB", "K6"],
    links: {}
  }
];
