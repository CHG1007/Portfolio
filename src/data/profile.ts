export interface Education {
  id: string;
  period: string;
  title: string;
  institution: string;
  details: string[];
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  role: string;
  details: string[];
  customizableTodo?: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: { name: string; level: 'Expert' | 'Core' | 'Experienced' }[];
}

export interface Strength {
  title: string;
  desc: string;
}

export const PROFILE_DATA = {
  name: "최홍권",
  engName: "Choi Hong-gwon",
  position: "Backend Developer",
  status: "SW 엔지니어 실무 경험과 SSAFY 14기 프로젝트 협업 역량을 바탕으로 성장 중인 백엔드 엔지니어",
  heroCopy: "장시간 소요되는 복잡한 AI 작업을 확장 가능하고 안정적인 백엔드 서비스 흐름으로 설계·완결합니다.",
  heroDesc: "Spring Boot 기반 RESTful API 설계부터 JWT/Redis 인증, RabbitMQ 기반 비동기 파이프라인 분리, S3/MinIO 데이터 결합, 다단계 Fallback 구조 설계까지, 고품질 시스템 흐름을 개선하는 데 몰입합니다.",
  developerSummary: "IT응용시스템공학(전공)과 경영학(부전공)의 융합 지식을 기반으로 비즈니스 가치와 안전한 정보 처리를 정밀 조율하는 개발자입니다.\n\n군 장교 중위 전역 경험에서 우러난 책임 의식, 돌발 상황 장애 관리 체계, 협업 구성원 간 적극적 보고 대응 체계를 체득했습니다.\n또한 주식회사 만두파트너스 소프트웨어 엔지니어 경력을 통해 실무 협업 설계, 프로젝트 마일스톤 준수 및 테크니컬 문서화의 주도적 완결성을 키워왔습니다.",
  links: {
    github: "https://github.com/CHG1007",
    blog: "https://hong-1007.tistory.com/",
    email: "mailto:hkhk6880@gmail.com",
    emailRaw: "hkhk6880@gmail.com",
    resume: "#", // placeholder
    teamDemo: "https://modelofme.vercel.app/"
  },
  
  educations: [
    {
      id: "edu-1",
      period: "2016.02.29 ~ 2020.02.21",
      title: "대학교 IT응용시스템공학 전공 (경영학부 부전공)",
      institution: "공과대학 학사 졸업",
      details: [
        "전공 평점: 3.81 / 4.50 (총 141학점 이수)",
        "IT 정보 시스템 설계론 및 알고리즘, 시스템 아키텍처 과목 수량 이수",
        "비즈니스 프로세스 개선 관점을 적용한 프로젝트 문제 해결력 함양"
      ]
    },
    {
      id: "edu-2",
      period: "2025.07.08 ~ 2026.06.26",
      title: "삼성청년SW·AI 아카데미, SSAFY 14기",
      institution: "삼성전자 수료 예정",
      details: [
        "Java/Spring Boot 기반 풀스택/백엔드 아키텍처 학습",
        "다양한 실전 도메인 연동 팀 프로젝트 및 기업연계 우수 과제 수행 (MoM 참여)",
        "REST API 규격 수립, DB 정규화, 분산 메시징 비동기 연동 실전 협업"
      ]
    }
  ] as Education[],

  experiences: [
    {
      id: "exp-1",
      period: "2020.03.01 ~ 2022.06.30",
      title: "병역 / 육군 장교 군 복무",
      company: "대한민국 육군",
      role: "포병 중위 (만기 제대)",
      details: [
        "지휘관 및 참모 업무를 통한 목표 지향적 일정 완수 및 책임 기반 임무 완결",
        "명확하고 체계적인 다자간 보고 시스템 경험으로 실무 의사소통 완성",
        "실무 중 야기된 리스크 예방 및 복구 전방 대응, 장애 발생 시 원인 추적 태도 응고"
      ]
    },
    {
      id: "exp-2",
      period: "2022.11.11 ~ 2025.05.30",
      title: "SW Engineer 실무 근무",
      company: "주식회사 만두파트너스",
      role: "전략사업본부 / 소프트웨어 엔지니어",
      details: [
        "조직 비즈니스 요구사항에 대응하는 소프트웨어 제품 기획 협업 및 마일스톤 추적",
        "실무 개발 단위 간 일정 관리 양상 파악 및 내부 기술 문서 작성을 통한 지식 전파",
        "기술 스택 조율 및 협업 개발 프로세스 구현을 통한 전사 커뮤니케이션 역량 확보"
      ],
      customizableTodo: "TODO_DETAIL: 향후 상세 기택 및 성과 기재 예정"
    },
    {
      id: "exp-3",
      period: "SSAFY 14기 기업연계 프로젝트",
      title: "MoM (Model of Me) 개발 참여",
      company: "SSAFY 14기 기업협력팀",
      role: "Backend / API / AI Pipeline Integration",
      details: [
        "360도 촬영 전신 영상을 바탕으로 3D 아바타 생성 비동기 처리 구현",
        "RabbitMQ 기반 분산 Queue 시스템 구축 및 이메일 SMTP, JWT/Redis 상태 파이프라인 책임 구조 설계"
      ]
    }
  ] as Experience[],

  strengths: [
    {
      title: "Robust API Design & Reliability",
      desc: "요청 라이프사이클 전반에 걸쳐 유효성 검증(Spring Validation), 예외 추상화, 직관적인 에러 구조 반환 및 리소스 소유권 판단 규칙을 일관되게 구조화합니다."
    },
    {
      title: "Decoupled Async Pipelines",
      desc: "장시간 GPU 처리가 몰리는 전처리/COLMAP/3DGS 분석 부하가 API 응답 지연으로 전이되는 것을 차단하기 위해 RabbitMQ를 도입하여 처리 영역을 성공적으로 분리했습니다."
    },
    {
      title: "Defensive Security Implementation",
      desc: "JWT Access/Refresh 토큰 롤링을 탑재하고, Redis를 세션 컨트롤러로 활용해 중복 및 도난 세션 접근 차단, 로그아웃 차단 Blacklist 메커니즘을 촘촘히 엮어냈습니다."
    },
    {
      title: "Failover & Stable Integration",
      desc: "외부 AI 기기 API 불안정성에 능동 예견 대응하고자 다채널 Fallback 구조(OpenAI → Gemini → Anthropic 및 로컬 하이브리드 백업)를 설계하여 메인 트랜잭션의 생존력을 확장시켰습니다."
    },
    {
      title: "Practical Multi-Disciplinary Synergy",
      desc: "군 장교 시절의 조율력과 이전 직장의 프로젝트 완결력을 결합해 프론트엔드/AI 파트너와의 빈틈없는 스펙 설계 및 병목 지점 해소를 견고히 수행합니다."
    }
  ] as Strength[],

  skillCategories: [
    {
      categoryName: "Backend Control",
      skills: [
        { name: "Java 17/21", level: "Expert" },
        { name: "Spring Boot 3.x", level: "Expert" },
        { name: "Spring Web & Security", level: "Core" },
        { name: "Spring Data JPA", level: "Core" },
        { name: "Spring Validation", level: "Core" },
        { name: "Spring Mail", level: "Experienced" },
        { name: "Spring AMQP (RabbitMQ)", level: "Core" },
        { name: "Server-Sent Events (SSE)", level: "Core" },
        { name: "JWT / Session Tracking", level: "Core" },
        { name: "REST API Design", level: "Expert" }
      ]
    },
    {
      categoryName: "Database & Cache",
      skills: [
        { name: "PostgreSQL", level: "Core" },
        { name: "Redis", level: "Core" },
        { name: "Hibernate JSONB Types", level: "Experienced" }
      ]
    },
    {
      categoryName: "Storage & Messaging",
      skills: [
        { name: "MinIO & AWS S3 API", level: "Core" },
        { name: "RabbitMQ (Broker)", level: "Core" },
        { name: "Presigned URL Generation", level: "Core" }
      ]
    },
    {
      categoryName: "AI Pipeline Integration",
      skills: [
        { name: "Python", level: "Core" },
        { name: "PyTorch & NumPy", level: "Experienced" },
        { name: "COLMAP Setup", level: "Experienced" },
        { name: "3D Gaussian Splatting (3DGS)", level: "Experienced" },
        { name: "SMPL Body Model Fitting", level: "Experienced" },
        { name: "Docker Compose GPU Workloads", level: "Core" }
      ]
    },
    {
      categoryName: "Frontend Collaboration",
      skills: [
        { name: "Flutter Architecture Concept", level: "Experienced" },
        { name: "React Native (Expo)", level: "Experienced" },
        { name: "Next.js", level: "Experienced" },
        { name: "Dio / Axios", level: "Experienced" },
        { name: "Firebase Cloud Messaging (FCM)", level: "Core" },
        { name: "Event-Driven Notifications", level: "Core" }
      ]
    },
    {
      categoryName: "Infra & DevOps",
      skills: [
        { name: "Docker & Docker Compose", level: "Core" },
        { name: "Nginx", level: "Core" },
        { name: "Jenkins / Grafana", level: "Experienced" },
        { name: "Git & GitLab CI", level: "Core" },
        { name: "Vercel Static Hosting", level: "Experienced" }
      ]
    }
  ] as SkillCategory[]
};
