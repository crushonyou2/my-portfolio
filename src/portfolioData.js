export const pick = (value, lang) => value && typeof value === "object" && !Array.isArray(value) && ("ko" in value || "en" in value) ? value[lang] ?? value.ko : value;

export const portfolio = {
  name: { ko: "조지관", en: "Jigwan Joe" },
  role: { ko: "백엔드 기반 IT 엔지니어", en: "Backend-focused IT Engineer" },
  ui: {
    about: { ko: "소개", en: "About" }, projects: { ko: "프로젝트", en: "Projects" }, credentials: { ko: "이력", en: "Credentials" }, contact: { ko: "연락", en: "Contact" },
    viewWork: { ko: "대표 프로젝트 보기", en: "View selected work" }, languageLabel: { ko: "영문으로 보기", en: "View in Korean" },
  },
  hero: {
    eyebrow: { ko: "BACKEND · DATA · CLOUD", en: "BACKEND · DATA · CLOUD" },
    title: { ko: "기술을 연결해, 실제로 운영되는 서비스까지 만듭니다.", en: "I connect the pieces and ship services that work in the real world." },
    summaryLead: { ko: "Spring Boot 백엔드와 데이터 설계를 중심으로,", en: "Focused on Spring Boot backends and data design," },
    summaryTail: { ko: "배포 자동화와 제품 출시까지 직접 완주해 온 신입 엔지니어입니다.", en: "with hands-on ownership through deployment automation and product launch." },
    target: { ko: "IT시스템 · SI · 백엔드 포지션을 찾고 있습니다.", en: "Open to IT systems, SI, and backend engineering roles." },
    photoAlt: { ko: "조지관 프로필 사진", en: "Portrait of Jigwan Joe" },
    quickFacts: [
      { value: "4.04 / 4.5", label: { ko: "학점", en: "GPA" } }, { value: "2026.02", label: { ko: "컴퓨터공학부 졸업", en: "Computer Engineering" } },
      { value: "SQLD · ADsP", label: { ko: "데이터 자격", en: "Data certificates" } }, { value: "정보처리기사", label: { ko: "국가기술자격", en: "National certificate" } },
    ],
  },
  proof: { title: { ko: "핵심 성과", en: "Key outcomes" }, items: [
    { value: "2,631", label: { ko: "공공 정책 데이터 수집·정제", en: "public-policy records processed" } }, { value: "+12%p", label: { ko: "RAG 1순위 정답률 개선", en: "RAG top-1 accuracy lift" } },
    { value: { ko: "출시 완료", en: "Shipped" }, label: { ko: "개인 Android 앱 · 원스토어", en: "solo Android app · ONE Store" } }, { value: { ko: "논문 2편", en: "2 papers" }, label: { ko: "캡스톤·논문경진대회 은상 2회", en: "2 Silver Prizes" } },
  ] },
  about: {
    eyebrow: { ko: "HOW I WORK", en: "HOW I WORK" }, title: { ko: "넓게 경험하되, 결과는 끝까지 책임집니다.", en: "Broad in perspective, accountable for outcomes." },
    copy: { ko: "백엔드 한 영역에 머무르지 않고 데이터 흐름, 배포 환경, 실제 사용자의 경험을 함께 봅니다. 아래 세 가지 방식으로 프로젝트를 완성해 왔습니다.", en: "I look beyond backend code to the data flow, deployment environment, and real user experience. Three habits shape how I deliver projects." },
    strengths: [
      { title: { ko: "측정하고 개선합니다", en: "Measure, then improve" }, copy: { ko: "RAG 검색 품질을 평가셋으로 수치화하고, 리랭킹 전후를 비교해 개선 효과를 검증했습니다.", en: "I quantified RAG retrieval quality with an evaluation set and verified the impact of reranking." } },
      { title: { ko: "경계를 명확히 설계합니다", en: "Design clear boundaries" }, copy: { ko: "Spring Boot 비즈니스 API와 Python ML 서비스를 분리하고, 팀 프로젝트에서는 담당 범위와 인터페이스를 분명히 했습니다.", en: "I separated business APIs from ML services and kept ownership boundaries explicit in team projects." } },
      { title: { ko: "출시 이후까지 생각합니다", en: "Think beyond the build" }, copy: { ko: "CI/CD, 온디바이스 개인정보 보호, 백그라운드 동작까지 챙기며 실제 배포·운영 가능한 상태를 목표로 합니다.", en: "I account for CI/CD, on-device privacy, and background behavior with real deployment in mind." } },
    ],
  },
  projects: {
    eyebrow: { ko: "SELECTED WORK", en: "SELECTED WORK" }, title: { ko: "설명보다, 판단과 결과가 보이는 프로젝트", en: "Projects that show decisions and results" },
    copy: { ko: "기술 목록보다 어떤 문제를 맡았고, 무엇을 판단했으며, 결과를 어떻게 검증했는지에 집중했습니다.", en: "Each case focuses on the problem, the decision, my ownership, and how the result was verified." },
    featured: [
      {
        title: "혜택나침반", type: { ko: "개인 · 대표 프로젝트", en: "Solo · Flagship project" }, period: "2026.06",
        lead: { ko: "흩어진 청년정책을 자연어로 찾을 수 있도록, 데이터 수집부터 검색 품질 평가까지 직접 만든 RAG 서비스입니다.", en: "A RAG service I built end-to-end, from public-data ingestion to measured retrieval quality, so users can find youth policies in natural language." },
        tech: ["Spring Boot", "FastAPI", "pgvector", "React", "E5", "Cross-encoder"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "수천 개 정책이 흩어져 있고, 키워드 검색만으로는 자신에게 맞는 제도를 찾기 어려웠습니다.", en: "Thousands of policies were fragmented, and keyword search made relevant programs hard to discover." } },
          { label: { ko: "기여", en: "Ownership" }, copy: { ko: "2,631건 수집·정제, 임베딩, 벡터 검색, 리랭킹, 근거 기반 답변까지 전 파이프라인을 구현했습니다.", en: "I owned 2,631-record ingestion and cleaning, embeddings, vector search, reranking, and grounded generation." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "부정확한 지역코드를 억지로 필터에 쓰지 않고 토픽 검색으로 범위를 조정했으며, 60문항 평가셋으로 리랭킹 효과를 검증했습니다.", en: "I removed an unreliable region filter, narrowed the scope to topic search, and tested reranking with a 60-question evaluation set." } },
        ],
        results: [{ value: "40 → 52%", label: { ko: "recall@1", en: "recall@1" } }, { value: ".535 → .614", label: { ko: "MRR", en: "MRR" } }, { value: "3,083", label: { ko: "검색 청크", en: "search chunks" } }],
        links: [{ href: "https://crushonyou2.github.io/benefit-compass", label: { ko: "데모 보기", en: "View demo" } }, { href: "https://github.com/crushonyou2/benefit-compass", label: { ko: "코드 보기", en: "View code" } }],
        media: { type: "image", src: "/benefit-compass-demo.png", alt: { ko: "혜택나침반의 월세 지원 검색 결과", en: "BenefitCompass search results for rental support" }, caption: { ko: "실제 배포 환경에서 확인한 검색 결과", en: "Search result captured from the live deployment" } },
      },
      {
        title: "길동이 · AI 차량 어시스턴트", type: { ko: "7인 팀 · 백엔드/DB 담당", en: "Team of 7 · Backend/DB owner" }, period: "2025.03 — 2025.06",
        lead: { ko: "서로 다른 장치와 앱의 차량 데이터를 사용자별로 저장·가공하는 Spring Boot 백엔드를 맡았습니다.", en: "I owned the Spring Boot backend that stored and processed per-user vehicle data from multiple devices and apps." },
        tech: ["Java 17", "Spring Boot", "MongoDB", "Kakao OAuth API", "OpenAPI", "AWS EC2"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "장치마다 데이터 형태가 달랐고, 차량·소모품·주행패턴을 사용자별로 분리해 다룰 서버가 필요했습니다.", en: "Device payloads varied, and the team needed a backend for per-user vehicle, consumable, and driving-pattern data." } },
          { label: { ko: "기여", en: "Ownership" }, copy: { ko: "차량·차종·소모품·주행패턴·사용자 REST API와 MongoDB 모델, 카카오 사용자 조회·등록 흐름, 주간 평균 집계를 구현했습니다.", en: "I built REST APIs and MongoDB models for vehicles, models, consumables, driving patterns, and users, plus Kakao user registration and weekly aggregates." } },
          { label: { ko: "역할 경계", en: "Scope" }, copy: { ko: "RAG 모델과 검색 파이프라인은 팀의 별도 컴포넌트이며 이 저장소에는 포함되지 않습니다. 제 기여 범위는 차량 도메인 백엔드와 데이터 모델입니다.", en: "The RAG model and retrieval pipeline were a separate team component and are not included in this repository. My scope was the vehicle-domain backend and data model." } },
        ],
        results: [{ value: "은상", label: { ko: "캡스톤 경연", en: "Capstone award" } }, { value: "1편", label: { ko: "학회 논문", en: "Conference paper" } }, { value: "5개", label: { ko: "백엔드 도메인", en: "backend domains" } }],
        links: [{ href: "https://github.com/crushonyou2/gildongE", label: { ko: "백엔드 코드 보기", en: "View backend code" } }],
        media: { type: "poster", src: "/gildongE_poster.jpg", alt: { ko: "길동이 프로젝트 포스터", en: "GildongE project poster" } },
      },
      {
        title: "오늘도 신선", type: { ko: "개인 · Android 출시", en: "Solo · Android launch" }, period: "2025.09 — 2025.12",
        lead: { ko: "식품 유통기한 입력의 번거로움을 OCR로 줄이고, 개인정보를 서버로 보내지 않는 Android 앱을 기획부터 출시까지 완주했습니다.", en: "I took an Android app from concept to store launch, using OCR to simplify expiry-date entry while keeping personal data off servers." },
        tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "MVVM"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "기존 앱은 수동 입력이 번거롭고 인터넷 연결·개인정보 수집에 대한 부담이 있었습니다.", en: "Existing apps relied on tedious manual input and raised concerns around connectivity and personal data." } },
          { label: { ko: "기여", en: "Ownership" }, copy: { ko: "OCR 전처리, Room 기반 로컬 저장, WorkManager 알림, 소비 통계, 위젯과 백업·복원을 단독 구현했습니다.", en: "I built OCR preprocessing, Room storage, WorkManager notifications, statistics, widgets, and backup/restore." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "모든 데이터를 기기 안에서 처리하고 서버 전송을 없애 프라이버시와 오프라인 사용성을 우선했습니다.", en: "I kept all processing on-device, eliminating server transfer to prioritize privacy and offline usability." } },
        ],
        results: [{ value: "출시", label: { ko: "원스토어", en: "ONE Store" } }, { value: "10건", label: { ko: "단위 테스트 통과", en: "unit tests passed" } }, { value: "0건", label: { ko: "서버 데이터 전송", en: "server data transfers" } }],
        links: [{ href: "https://m.onestore.co.kr/v2/ko-kr/app/0001003331", label: { ko: "스토어에서 보기", en: "View in store" } }, { href: "https://github.com/crushonyou2/Fridge-D-Day", label: { ko: "코드 보기", en: "View code" } }],
        media: { type: "gallery", label: { ko: "오늘도 신선 실제 앱 화면", en: "Fresh Today app screens" }, images: [
          { src: "/today-fresh-1.png", alt: { ko: "오늘도 신선 유통기한 목록 화면", en: "Expiration list screen" } },
          { src: "/today-fresh-2.png", alt: { ko: "오늘도 신선 OCR 촬영 화면", en: "OCR capture screen" } },
          { src: "/today-fresh-3.png", alt: { ko: "오늘도 신선 소비 통계 화면", en: "Consumption statistics screen" } },
        ] },
      },
    ],
    posterOpen: { ko: "프로젝트 포스터 보기", en: "View project poster" },
    posterClose: { ko: "프로젝트 포스터 닫기", en: "Hide project poster" },
    moreEyebrow: { ko: "MORE WORK", en: "MORE WORK" }, moreTitle: { ko: "다른 환경에서도 문제를 풀어봤습니다.", en: "More problems, different environments." },
    more: [
      { title: "쓰담", type: "YOLOv8 · Android · Robot", link: null, copy: { ko: "실시간 객체 탐지와 로봇 연동을 담당한 대화형 쓰레기통. 학회 논문경진대회 은상.", en: "Interactive trash-can robot with real-time detection and robot integration. Silver Prize." }, media: { src: "/ssodam_poster.jpg", alt: { ko: "쓰담 프로젝트 포스터", en: "Ssodam project poster" } } },
      { title: "movie_diary", type: "React · FastAPI · Cloud Run", link: "https://github.com/crushonyou2/movie_diary", copy: { ko: "감정 기반 영화 추천 서비스. 외부 API 연동과 서버리스 배포 자동화를 경험했습니다.", en: "Emotion-based film recommendations with third-party APIs and serverless deployment automation." } },
      { title: "Build-Your-Health", type: "JSP/Servlet · MySQL", link: "https://github.com/crushonyou2/Build-Your-Health", copy: { ko: "건강 기록부터 쇼핑·게시판·관리자 CRUD까지 단독 구현한 MVC 웹 애플리케이션.", en: "Solo MVC web app spanning health logs, commerce, community, and admin CRUD." } },
      { title: "dynamic_scraper", type: "Flask · Playwright", link: "https://github.com/crushonyou2/dynamic_scraper", copy: { ko: "여러 채용 사이트 결과를 수집·캐싱하고 CSV로 내보내는 채용공고 크롤러.", en: "Job-posting crawler that aggregates, caches, and exports results from multiple sites." } },
    ],
  },
  credentials: {
    eyebrow: { ko: "CREDENTIALS", en: "CREDENTIALS" }, title: { ko: "기본기를 증명하는 이력", en: "Credentials that support the work" }, copy: { ko: "프로젝트 경험을 뒷받침하는 학업, 자격, 연구·수상 이력입니다.", en: "Education, certifications, publications, and awards that support the project work." }, skillsTitle: { ko: "핵심 기술", en: "CORE STACK" },
    groups: [
      { title: { ko: "학력", en: "Education" }, items: [{ ko: "경기대학교 컴퓨터공학부 졸업", en: "B.S. in Computer Engineering, Kyonggi University" }, { ko: "2020.03 — 2026.02 · 학점 4.04/4.5", en: "Mar. 2020 — Feb. 2026 · GPA 4.04/4.5" }] },
      { title: { ko: "자격", en: "Certificates" }, items: [{ ko: "정보처리기사 · SQLD · ADsP", en: "Information Processing Engineer · SQLD · ADsP" }, { ko: "CSTS Foundation Level", en: "CSTS Foundation Level" }] },
      { title: { ko: "연구·수상", en: "Research & awards" }, items: [{ ko: "한국정보기술학회 논문 2편 공저", en: "Co-author of 2 conference papers" }, { ko: "캡스톤 경연·논문경진대회 은상 2회", en: "2 Silver Prizes in capstone and paper competitions" }] },
    ],
  },
  skills: ["Java", "Spring Boot", "REST API", "MongoDB", "MySQL", "Python", "FastAPI", "AWS", "Cloud Run", "Docker", "GitHub Actions", "React", "Kotlin", "RAG"],
  contact: { eyebrow: { ko: "LET'S TALK", en: "LET'S TALK" }, title: { ko: "함께 운영할 서비스를 찾고 있습니다.", en: "I'm looking for a service to help build and operate." }, copy: { ko: "백엔드·IT시스템·SI 포지션에 관심이 있습니다. 프로젝트나 포지션에 대해 편하게 연락해 주세요.", en: "I'm interested in backend, IT systems, and SI roles. Feel free to reach out about a project or position." }, email: "jigwan.joe@gmail.com", github: "https://github.com/crushonyou2" },
  footer: { ko: "끝까지 동작하게 만드는 엔지니어", en: "An engineer who makes things work end-to-end" },
};
