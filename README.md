# 최홍권 (Choi Hong-gwon) | Backend Developer Portfolio

> **"장시간 소요되는 복잡한 AI 작업을 확장 가능하고 안정적인 백엔드 서비스 흐름으로 설계·완결합니다."**

본 프로젝트는 백엔드 개발자 최홍권의 개인 기술 포트폴리오 웹사이트입니다.  
SSAFY 14기 기업연계 우수 프로젝트이자 전신 3D 스캐닝 헬스케어 서비스인 **MoM (Model of Me)**을 대표 시그니처 프로젝트로 기재되어 있으며, 시니어 프론트엔드/백엔드 조율 및 UX/UI 디자이너로서의 감성을 담아 세련되고 깔끔한 **"Clean Light / Slate Minimalist"** 형태로 제작되었습니다.

---

## 🎨 주요 디자인 시스템 (Clean White & Slate Theme)
- **전체 무드:** 흰색(#FFFFFF)과 밝은 슬레이트 톤(#F8FAFC, #F1F5F9)을 베이스 삼아 가독성이 매우 뛰어난 고대비 및 넉넉한 공간 여백을 활용합니다.
- **포인트 컬럼:** 차분하고 전문적인 인디고 블루 칼라를 강조 및 인터랙티브 호버 액센트로 사용하여 엔지니어링 미학을 전달합니다.
- **타이포그래피 페어링:** Space Grotesk(제목용 전시 폰트)와 Inter(본문의 한국어 가독성 폰트)를 조화시켰으며 상태 코드 및 정보 블록에는 JetBrains Mono를 사용하여 신뢰감을 보장합니다.
- **반응형 보증:** 360px 모바일 레이아웃부터 1440px+ 데스크톱 고해상도 환경까지 안정적으로 부드럽게 변환됩니다.

---

## 🛠️ 핵심 파일 구조 및 라우팅 명세
본 애플리케이션은 라우터 구조(`react-router-dom`) 기반으로 독립된 프로젝트 세부 분석 페이지로 확장할 수 있습니다.

- `src/App.tsx`: `BrowserRouter`, `Routes`, `<ScrollToTop />` 및 공통 Header/Footer 레이아웃 결합
- `src/routes/HomePage.tsx`: 메인 포트폴리오 첫 화면 (소개, 경험 타임라인, 실무 스펙 보드, 대표 프로젝트 그리드, 연락처 보관함)
- `src/routes/ProjectDetailPage.tsx`: 파라미터 `:slug`를 분석해 최적의 프로젝트 세부 분석 및 가상 CAD Blueprint 회로 정보를 제공하는 세부 화면
- `src/utils/scrollToTop.ts`: SPA 화면 전환 시 최상단 영역으로 사용자 뷰를 강제 리플래시하는 유틸리티
- `/vercel.json`: 프로젝트 URL 직접 갱신 시(refresh) 라우터가 유실되지 않도록 예지 우회하는 Vercel SPA Fallback 명세
- `/src/data/profile.ts`: 최홍권의 한 줄 자기소개, 군 장교 연장 이력, 만두파트너스 근무 기술서 및 스택 숙련도 데이터
- `/src/data/projects.ts`: MoM 대표 프로젝트의 상세 개요, 가용 아키텍처 흐름도 단계, 내가 기여한 부분, 3대 주요 트러블슈팅 명세 및 기타 준비/진행 중인 프로젝트 카탈로그

---

## 🚀 로컬 인스톨 및 실행 방법

### 1) 의존성 설치
```bash
npm install
```

### 2) 개발용 로컬 오토 리로딩 서버 실행
```bash
npm run dev
```
- 브라우저에서 `http://localhost:3000`으로 접속하여 포트폴리오를 실시간 검토할 수 있습니다.

### 3) 컴파일 빌드 (Vercel 정적 사이트 적합 패키징)
```bash
npm run build
```
- 결과물은 `dist/` 폴더 산출 전용 구조입니다.

---

## 📂 실 이미지/비디오 파일 배치 경로 가이드
본 템플릿은 실 이미지 대체 시 다음 경로를 참조하도록 바인딩되어 있습니다.

| 리소스 구분 | 마운트할 예상 물리 경로 | alt 대응 목적칭 |
| :--- | :--- | :--- |
| **모바일 홈** | `public/assets/mom/screenshots/mom-demo-home.png` | 서비스 대표 화면 홈 |
| **결과 화면** | `public/assets/mom/screenshots/mom-avatar-result.png` | 3DGS 아바타 구동 모습 |
| **치수 판정** | `public/assets/mom/screenshots/mom-body-analysis.png` | SMPL 측정 및 AI 코멘트 화면 |
| **스키마** | `public/assets/mom/diagrams/mom-erd.png` | PostgreSQL 데이터베이스 ERD 구조 |
| **시퀀스** | `public/assets/mom/diagrams/mom-render-sequence.png` | 비동기 렌더링 메시지 시퀀스 |

---

## 🔗 TODO 링크 변경 방법

향후 보유하신 실제 소셜 정보 및 다운로드용 PDF 이력서 링크가 준비될 시, `/src/data/profile.ts` 파일의 최상단 `links` 객체를 수정하십시오.

```typescript
// /src/data/profile.ts
export const PROFILE_DATA = {
  // ...생략...
  links: {
    github: "https://github.com/CHG1007", // 깃허브 실 경로
    blog: "https://hong-1007.tistory.com/", // 티스토리 실 경로
    email: "mailto:hkhk6880@gmail.com", // 메일 자동 발송 트리거
    emailRaw: "hkhk6880@gmail.com",
    resume: "https://your-domain.com/choi-honggwon-resume.pdf", // 준비된 이력서 다운로드 URL로 교체
    teamDemo: "https://modelofme.vercel.app/" // MoM 라이브 데모 미리보기
  },
  // ...생략...
}
```

---

## ➕ 새로운 프로젝트 케이스 스터디 추가 방법
새로운 세부 프로젝트 페이지를 개설하려면 아래 절차를 진행하십시오:

1. `/src/data/projects.ts` 파일로 진입합니다.
2. `PROJECTS_DATA` 배열 내에 새로운 프로젝트 정보를 추가하고 `status` 값을 `"featured"`로 규정합니다.
   ```typescript
   {
     slug: "new-system",
     title: "신규 분산 파일 전송 서버",
     status: "featured",
     accentColor: "#D97706", // 새 프로젝트 고유 액센트 칼라 지정
     // ...나머지 필드 채우기
   }
   ```
3. 메인 화면 카드에서 "Read Case Study"를 누르면 `/projects/new-system` 경로로 진입하여 설계 세부지표 및 트러블슈팅 데이터 장치가 동적 로드됩니다.

---

## ☁️ Vercel 배포 방법 요약

본 사이트는 서버사이드 구동이 배제된 초경량 SPA 정적 포트폴리오이므로, Vercel과의 연동 배포가 극도로 직관적입니다.

### 단일 정적 배포 절차
1. 본 레포지토리를 본인의 GitHub 계정 (예: `github.com/CHG1007/`)에 업로드합니다.
2. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인합니다.
3. **Add New Project**를 누르고 깃허브의 해당 포트폴리오 저장소를 임포트합니다.
4. **Framework Preset:** `Vite`가 타겟 빌드 옵션으로 자동 선택됩니다.
5. `Deploy` 단일 버튼 클릭 시 빌드가 자동 구동되어 영구 배포됩니다.
