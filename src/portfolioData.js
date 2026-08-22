export const pick = (value, lang) => value && typeof value === "object" && !Array.isArray(value) && ("ko" in value || "en" in value) ? value[lang] ?? value.ko : value;

export const portfolio = {
  name: { ko: "조지관", en: "Jigwan Joe" },
  role: { ko: "IT 시스템 · 소프트웨어 품질 엔지니어", en: "IT Systems & Software Quality Engineer" },
  ui: {
    about: { ko: "소개", en: "About" }, projects: { ko: "프로젝트", en: "Projects" }, credentials: { ko: "이력", en: "Credentials" }, contact: { ko: "연락", en: "Contact" },
    viewWork: { ko: "대표 프로젝트 보기", en: "View selected work" }, resume: { ko: "PDF로 저장", en: "Save as PDF" }, skipToContent: { ko: "본문으로 바로가기", en: "Skip to content" }, languageLabel: { ko: "영문으로 보기", en: "View in Korean" },
  },
  hero: {
    eyebrow: { ko: "BACKEND · SYSTEMS · SOFTWARE QUALITY", en: "BACKEND · SYSTEMS · SOFTWARE QUALITY" },
    title: { ko: "재는 기준부터 직접 만듭니다.", en: "I build the yardstick first." },
    summaryLead: { ko: "백엔드와 데이터로 시스템을 만들고,", en: "I build backend and data systems," },
    summaryTail: { ko: "품질을 수치로 확인한 뒤 배포 여부를 판단합니다.", en: "then let measured quality decide what ships." },
    target: { ko: "IT시스템·전산과 소프트웨어 품질 직무를 중심으로 지원하고 있으며, 백엔드·AI 서비스 개발 경험을 보유하고 있습니다.", en: "I focus on IT systems and software quality roles, backed by hands-on backend and AI service development experience." },
    photoAlt: { ko: "조지관 프로필 사진", en: "Portrait of Jigwan Joe" },
    quickFacts: [
      { value: "4.04 / 4.5", label: { ko: "학점", en: "GPA" } }, { value: "2026.02", label: { ko: "컴퓨터공학부 졸업", en: "Computer Engineering" } },
      { value: { ko: "자격 5건", en: "5 certificates" }, label: { ko: "정보처리기사 · SQLD · ADsP · CSTS · 한국사 1급", en: "Info. Processing Engineer · SQLD · ADsP · CSTS · History Lv.1" } }, { value: { ko: "어학 성적", en: "Language scores" }, label: { ko: "OPIc 영어 IH · TOEIC 765", en: "OPIc English IH · TOEIC 765" } },
    ],
  },
  proof: { title: { ko: "핵심 성과", en: "Key outcomes" }, items: [
    { value: "40 → 52%", label: { ko: "RAG 1순위 정답률 — 평가셋 60문항으로 직접 측정", en: "RAG top-1 accuracy, measured on a 60-question set I built" } },
    { value: { ko: "보류 → 재출시", en: "Held, then re-shipped" }, label: { ko: "잔여 OCR 오답으로 배포를 보류하고, 사용자 확인 흐름을 도입해 재출시", en: "Held a release over residual OCR errors, then re-shipped with a user-confirmation flow" } },
    { value: { ko: "논문 2편 · 수상 2회", en: "2 papers · 2 awards" }, label: { ko: "한국정보기술학회 공저 · 캡스톤 은상 · 우수논문상", en: "KIIT co-authorship · Capstone Silver · Best Paper" } },
    { value: { ko: "원스토어 2회 배포", en: "2 ONE store releases" }, label: { ko: "기획·개발·검증·출시·재출시까지 단독 수행", en: "Owned planning, development, validation, launch, and re-release end to end" } },
  ] },
  about: {
    eyebrow: { ko: "HOW I WORK", en: "HOW I WORK" }, title: { ko: "기술을 넓게 연결하고\n결과는 끝까지 책임집니다.", en: "Connect the stack\nown the outcome." },
    copy: { ko: "백엔드 구현에 머무르지 않고 데이터 흐름, 배포 환경, 테스트와 실제 사용자 경험을 함께 봅니다. 아래 세 가지 방식으로 프로젝트를 완성해 왔습니다.", en: "I look beyond backend implementation to data flows, deployment environments, testing, and real user experience. Three habits shape how I deliver projects." },
    strengths: [
      { title: { ko: "측정하고 개선합니다", en: "Measure, then improve" }, copy: { ko: "RAG 검색 품질을 평가셋으로 수치화하고, 리랭킹 전후를 비교해 개선 효과를 검증했습니다.", en: "I quantified RAG retrieval quality with an evaluation set and verified the impact of reranking." } },
      { title: { ko: "경계를 명확히 설계합니다", en: "Design clear boundaries" }, copy: { ko: "Spring Boot 비즈니스 API와 Python ML 서비스를 분리하고, 팀 프로젝트에서는 담당 범위와 인터페이스를 분명히 했습니다.", en: "I separated business APIs from ML services and kept ownership boundaries explicit in team projects." } },
      { title: { ko: "운영과 품질까지 책임집니다", en: "Own operations and quality" }, copy: { ko: "CI/CD, 테스트, 온디바이스 개인정보 보호와 백그라운드 동작까지 챙기며 실제 배포·운영 가능한 상태를 목표로 합니다.", en: "I account for CI/CD, testing, on-device privacy, and background behavior with real deployment in mind." } },
    ],
  },
  projects: {
    eyebrow: { ko: "SELECTED WORK", en: "SELECTED WORK" }, title: { ko: "설명보다\n판단과 결과가 보이는 프로젝트", en: "Not descriptions\nbut decisions and results" },
    copy: { ko: "기술 목록보다 어떤 문제를 맡았고, 무엇을 판단했으며, 결과를 어떻게 검증했는지에 집중했습니다.", en: "Each case focuses on the problem, the decision, my ownership, and how the result was verified." },
    featured: [
      {
        title: "혜택나침반", type: { ko: "개인 · 대표 프로젝트", en: "Solo · Flagship project" }, period: "2026.06 — 2026.07",
        lead: { ko: "흩어진 청년정책을 자연어로 찾을 수 있도록, 데이터 수집부터 검색 품질 평가까지 직접 만든 RAG 서비스입니다.", en: "A RAG service I built end-to-end, from public-data ingestion to measured retrieval quality, so users can find youth policies in natural language." },
        tech: ["Spring Boot", "FastAPI", "pgvector", "React", "E5", "Cross-encoder"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "수천 개 정책이 흩어져 있고, 키워드 검색만으로는 자신에게 맞는 제도를 찾기 어려웠습니다.", en: "Thousands of policies were fragmented, and keyword search made relevant programs hard to discover." } },
          { label: { ko: "기여", en: "Ownership" }, copy: { ko: "2,631건 수집·정제, 임베딩, 벡터 검색, 리랭킹, 근거 기반 답변까지 전 파이프라인을 구현했습니다.", en: "I owned 2,631-record ingestion and cleaning, embeddings, vector search, reranking, and grounded generation." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "원본 데이터의 지역 코드에 다른 지역 값이 섞여 있어 지역 검색을 사용자 노출에서 제외하고 토픽 검색으로 범위를 좁혔습니다. 필터 코드는 데이터 정제 후 재검증할 수 있게 남겨 뒀고, 60문항 평가셋으로 리랭킹 효과를 검증했습니다.", en: "Region codes in the source data were mixed with values from other regions, so I took region search out of the user-facing path and narrowed the scope to topic search. The filter code stays in place for re-verification once the data is cleaned. Reranking was validated with a 60-question evaluation set." } },
          { label: { ko: "운영 관측", en: "Observability" }, copy: { ko: "요청 ID와 Prometheus 지표로 API·ML·DB 구간을 나눠 보도록 구성했습니다. 콜드 요청과 웜 검색을 따로 재고 구간을 분해한 결과, 주요 병목이 무료 인스턴스의 ML scale-from-zero 및 모델 준비 대기 구간에 있음을 확인했습니다.", en: "Request IDs and Prometheus metrics separate the API, ML, and database stages. Measuring cold and warm requests separately showed that the main bottleneck in this deployment was the free instance's ML scale-from-zero and model-readiness wait." } },
        ],
        results: [{ value: "40 → 52%", label: { ko: "recall@1", en: "recall@1" } }, { value: "0.535 → 0.614", label: { ko: "MRR", en: "MRR" } }, { value: "3,083", label: { ko: "검색 청크", en: "search chunks" } }],
        links: [{ href: "https://crushonyou2.github.io/benefit-compass", label: { ko: "데모 보기", en: "View demo" } }, { href: "https://github.com/crushonyou2/benefit-compass", label: { ko: "코드 보기", en: "View code" } }, { href: "https://github.com/crushonyou2/benefit-compass/tree/main/eval", label: { ko: "평가셋·측정 스크립트", en: "Evaluation set & scripts" } }, { href: "https://github.com/crushonyou2/benefit-compass/blob/main/docs/operations/PRODUCTION_LAB_2_2026-07-21.md", label: { ko: "운영 실험 기록", en: "Production lab record" } }, { href: "https://github.com/crushonyou2/benefit-compass/blob/main/docs/operations/RUNBOOK.md", label: { ko: "운영 런북", en: "Runbook" } }],
        media: { type: "image", src: "/benefit-compass-demo.png", alt: { ko: "혜택나침반의 월세 지원 검색 결과", en: "BenefitCompass search results for rental support" }, caption: { ko: "실제 배포 환경에서 확인한 검색 결과", en: "Search result captured from the live deployment" } },
      },
      {
        title: "오늘도 신선", type: { ko: "개인 · Android 출시·재출시", en: "Solo · Android launch and re-release" }, period: "2025.09 — 2026.08",
        lead: { ko: "식품 유통기한 입력의 번거로움을 OCR로 줄이고, 이미지를 서버로 보내지 않는 Android 앱을 기획부터 출시·재출시까지 완주했습니다.", en: "I took an Android app from concept through launch and re-release, using OCR to simplify expiry-date entry while never sending images to a server." },
        tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "MVVM"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "기존 앱은 수동 입력이 번거롭고 인터넷 연결·개인정보 수집에 대한 부담이 있었습니다.", en: "Existing apps relied on tedious manual input and raised concerns around connectivity and personal data." } },
          { label: { ko: "기여", en: "Ownership" }, copy: { ko: "OCR 전처리, Room 기반 로컬 저장, WorkManager 알림, 소비 통계, 위젯과 백업·복원을 단독 구현했습니다.", en: "I built OCR preprocessing, Room storage, WorkManager notifications, statistics, widgets, and backup/restore." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "촬영한 이미지를 서버로 보내지 않고 기기에서 인식하도록 설계했고, 릴리스 APK에 인터넷 권한이나 사설 QA 데이터가 섞이면 빌드를 실패시키는 검증 단계를 CI에 넣어 그 설계가 배포 산출물에서 유지되는지 자동으로 확인했습니다.", en: "Images are recognized on-device and never sent to a server. A CI gate fails the build if the release APK carries internet permission or private QA data, so the design holds in the shipped artifact." } },
          { label: { ko: "품질 검증", en: "Quality gate" }, copy: { ko: "독립 한국 라벨 55장으로 동일 표본 회귀 환경을 만들어 D-30 시나리오 기준 정확 일치율을 67.27%에서 72.73%로 올리고, 단위 테스트 29건·계측 테스트 15건을 배포 조건으로 걸었습니다. 게이트를 모두 통과하고도 오답 15장이 남아 후속 버전 배포를 보류했습니다.", en: "I built a fixed-sample regression set of 55 independent Korean labels, raised exact-match from 67.27% to 72.73% under the D-30 scenario, and gated releases on 29 unit and 15 instrumented tests. Every gate passed, yet 15 labels were still wrong, so I held the next release." } },
          { label: { ko: "그 다음", en: "What followed" }, copy: { ko: "정확도를 더 올리는 대신 인식한 날짜를 사용자가 확인해야 저장되도록 구조를 바꿔 잘못 읽힌 값이 저장되는 경로를 없애고, v1.0.2로 다시 출시했습니다. 공개 배포 이력은 2건입니다.", en: "Instead of chasing accuracy, I made recognised dates require user confirmation before saving, removing the path where a misread date could be stored, and shipped v1.0.2. The app has two public releases." } },
        ],
        results: [{ value: "67.27% → 72.73%", label: { ko: "한국 라벨 55장 D-30 정확 일치율", en: "exact match, 55 Korean labels (D-30)" } }, { value: "29 + 15", label: { ko: "단위·계측 테스트 통과", en: "unit and instrumented tests" } }, { value: { ko: "배포 2건", en: "2 releases" }, label: { ko: "사용자 확인 흐름 도입 후 재출시", en: "re-shipped after adding user confirmation" } }],
        links: [{ href: "https://m.onestore.co.kr/v2/ko-kr/app/0001003331", label: { ko: "스토어에서 보기", en: "View in store" } }, { href: "https://github.com/crushonyou2/Fridge-D-Day", label: { ko: "코드 보기", en: "View code" } }, { href: "https://github.com/crushonyou2/Fridge-D-Day/blob/main/QA_RELEASE_RECORD.md", label: { ko: "QA·릴리스 기록", en: "QA & release record" } }, { href: "https://github.com/crushonyou2/Fridge-D-Day/blob/main/docs/qa/OCR_BENCHMARK.md", label: { ko: "OCR 벤치마크", en: "OCR benchmark" } }, { href: "https://github.com/crushonyou2/Fridge-D-Day/blob/main/.github/workflows/android-ci.yml", label: { ko: "CI 설정", en: "CI workflow" } }],
        media: { type: "gallery", label: { ko: "오늘도 신선 실제 앱 화면", en: "Fresh Today app screens" }, images: [
          { src: "/today-fresh-1.png", alt: { ko: "오늘도 신선 유통기한 목록 화면", en: "Expiration list screen" } },
          { src: "/today-fresh-2.png", alt: { ko: "오늘도 신선 OCR 촬영 화면", en: "OCR capture screen" } },
          { src: "/today-fresh-3.png", alt: { ko: "오늘도 신선 소비 통계 화면", en: "Consumption statistics screen" } },
        ] },
      },
      {
        title: "길동이 · AI 차량 어시스턴트", titleLines: [{ ko: "길동이", en: "GildongE" }, { ko: "AI 차량 어시스턴트", en: "AI Vehicle Assistant" }], type: { ko: "7인 팀 · 백엔드/DB 담당", en: "Team of 7 · Backend/DB owner" }, period: "2025.03 — 2025.06",
        lead: { ko: "서로 다른 장치와 앱의 차량 데이터를 사용자별로 저장·가공하는 Spring Boot 백엔드를 맡았습니다.", en: "I owned the Spring Boot backend that stored and processed per-user vehicle data from multiple devices and apps." },
        tech: ["Java 17", "Spring Boot", "MongoDB", "Spring Data MongoDB", "Kakao OAuth API", "OpenAPI"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "장치마다 데이터 형태가 달랐고, 차량·소모품·주행패턴을 사용자별로 분리해 다룰 서버가 필요했습니다.", en: "Device payloads varied, and the team needed a backend for per-user vehicle, consumable, and driving-pattern data." } },
          { label: { ko: "기여", en: "Ownership" }, copy: { ko: "차량·차종·소모품·주행패턴·사용자 REST API와 MongoDB 모델, 카카오 사용자 조회·등록 흐름, 주간 평균 집계를 구현했습니다.", en: "I built REST APIs and MongoDB models for vehicles, models, consumables, driving patterns, and users, plus Kakao user registration and weekly aggregates." } },
          { label: { ko: "담당 범위", en: "My scope" }, copy: { ko: "7인 팀에서 차량 도메인 백엔드와 MongoDB 데이터 모델을 담당했습니다.", en: "In a seven-person team, I owned the vehicle-domain backend and MongoDB data model." } },
        ],
        results: [{ value: "은상", label: { ko: "캡스톤디자인 경진대회", en: "Capstone Design award" } }, { value: "1편", label: { ko: "학회 논문", en: "Conference paper" } }, { value: "5개", label: { ko: "백엔드 도메인", en: "backend domains" } }],
        links: [{ href: "https://github.com/crushonyou2/gildongE", label: { ko: "백엔드 코드 보기", en: "View backend code" } }],
        media: { type: "poster", src: "/gildongE_poster.jpg", alt: { ko: "길동이 프로젝트 포스터", en: "GildongE project poster" } },
      },
    ],
    posterOpen: { ko: "프로젝트 포스터 보기", en: "View project poster" },
    posterClose: { ko: "프로젝트 포스터 닫기", en: "Hide project poster" },
    moreEyebrow: { ko: "MORE WORK", en: "MORE WORK" }, moreTitle: { ko: "다른 환경에서도 문제를 풀어봤습니다.", en: "More problems, different environments." },
    more: [
      { title: "쓰담", type: "YOLOv8 · Android · Robot", link: null, copy: { ko: "실시간 객체 탐지와 로봇 연동을 담당한 대화형 쓰레기통. 2024 한국정보기술학회 하계종합학술대회 대학생 논문경진대회 우수논문상(2024.05.24).", en: "Interactive trash-can robot with real-time detection and robot integration. Best Paper Award at the 2024 KIIT Summer Conference Student Paper Competition (May 24, 2024)." }, media: { src: "/ssodam_poster.jpg", alt: { ko: "쓰담 프로젝트 포스터", en: "Ssodam project poster" } } },
      { title: "movie_diary", type: "React · FastAPI · Cloud Run", link: "https://github.com/crushonyou2/movie_diary", copy: { ko: "감정 기반 영화 추천 서비스. 외부 API 연동과 서버리스 배포 자동화를 경험했습니다.", en: "Emotion-based film recommendations with third-party APIs and serverless deployment automation." } },
      { title: "Build-Your-Health", type: "JSP/Servlet · MySQL", link: "https://github.com/crushonyou2/Build-Your-Health", copy: { ko: "건강 기록부터 쇼핑·게시판·관리자 CRUD까지 단독 구현한 MVC 웹 애플리케이션.", en: "Solo MVC web app spanning health logs, commerce, community, and admin CRUD." } },
      { title: "dynamic_scraper", type: "Flask · BeautifulSoup", link: "https://github.com/crushonyou2/dynamic_scraper", copy: { ko: "여러 채용 사이트 결과를 사이트별 파서로 나눠 수집하고, 같은 키워드 재검색을 캐싱해 중복 요청을 줄인 뒤 CSV로 내보내는 크롤러.", en: "Job-posting crawler with per-site parsers, response caching to avoid duplicate requests on repeated keywords, and CSV export." } },
    ],
  },
  credentials: {
    eyebrow: { ko: "CREDENTIALS", en: "CREDENTIALS" }, title: { ko: "기본기를 증명하는 이력", en: "Credentials that support the work" }, copy: { ko: "프로젝트 경험을 뒷받침하는 학업, 자격, 연구·수상 이력입니다.", en: "Education, certifications, publications, and awards that support the project work." }, skillsTitle: { ko: "핵심 기술", en: "CORE STACK" },
    groups: [
      { title: { ko: "학력", en: "Education" }, items: [{ ko: "경기대학교 컴퓨터공학부 졸업", en: "B.S. in Computer Engineering, Kyonggi University" }, { ko: "2020.03 — 2026.02 · 학점 4.04/4.5", en: "Mar. 2020 — Feb. 2026 · GPA 4.04/4.5" }] },
      { title: { ko: "자격", en: "Certificates" }, items: [{ ko: "정보처리기사 · SQLD · ADsP", en: "Information Processing Engineer · SQLD · ADsP" }, { ko: "CSTS Foundation Level", en: "CSTS Foundation Level" }] },
      { title: { ko: "연구·수상", en: "Research & awards" }, items: [{ ko: "한국정보기술학회 논문 2편 공저", en: "Co-author of 2 KIIT conference papers" }, { ko: "2025 산학협력 캡스톤디자인 경진대회 심화캡스톤디자인 부문 은상 · 경기대학교 소프트웨어중심대학", en: "2025 Industry-Academia Capstone Design Competition, Advanced Division Silver Prize · Kyonggi University SW-Centered University" }, { ko: "2024 한국정보기술학회 하계종합학술대회 대학생 논문경진대회 우수논문상 · 한국정보기술학회", en: "2024 KIIT Summer Conference Student Paper Competition, Best Paper Award · KIIT" }] },
    ],
  },
  skills: [
    { title: { ko: "언어·백엔드", en: "Languages & Backend" }, items: ["Java", "Kotlin", "Python", "Spring Boot", "FastAPI", "REST API", "JSP/Servlet"] },
    { title: { ko: "데이터·AI", en: "Data & AI" }, items: ["PostgreSQL · pgvector", "MongoDB", "MySQL", "RAG", { ko: "임베딩·리랭킹", en: "Embedding & reranking" }] },
    { title: { ko: "품질·배포", en: "Quality & Delivery" }, items: [{ ko: "회귀 테스트 환경", en: "Regression harness" }, { ko: "CI 품질 게이트", en: "CI quality gates" }, "JUnit", "GitHub Actions", "Docker", "Google Cloud Run", "Prometheus"] },
  ],
  contact: { eyebrow: { ko: "LET'S TALK", en: "LET'S TALK" }, title: { ko: "안정적인 서비스를 함께 만듭니다.", en: "Let's build reliable services together." }, copy: { ko: "IT시스템·전산과 소프트웨어 품질 직무를 중심으로 지원하고 있으며, 백엔드·AI 서비스 개발 경험을 보유하고 있습니다. 프로젝트나 포지션에 대해 편하게 연락해 주세요.", en: "I focus on IT systems and software quality roles, with hands-on backend and AI service development experience. Feel free to reach out about a project or position." }, email: "jigwan.joe@gmail.com", github: "https://github.com/crushonyou2" },
  footer: { ko: "측정하고 끝까지 개선하는 엔지니어", en: "An engineer who measures and improves end-to-end" },
};
