// ============================================================================
//  포트폴리오 콘텐츠 (Single Source of Truth)
// ----------------------------------------------------------------------------
//  이 파일 하나만 수정하면 사이트 전체 내용이 바뀝니다.
//   - 텍스트는 { ko: "한국어", en: "English" } 형태로 두 언어를 나란히 적습니다.
//   - 링크 / 이미지 / 스킬 단어처럼 언어와 무관한 값은 한 번만 적습니다.
//   - 프로젝트 추가: projects.featured 또는 projects.others 배열에 객체 하나 추가
// ============================================================================

export const content = {
  // ── 상단 언어 전환 버튼 라벨 ──────────────────────────────────────────────
  ui: {
    languageToggle: { ko: "English", en: "한국어" },
  },

  // ── 상단 네비게이션 ───────────────────────────────────────────────────────
  nav: {
    about: { ko: "소개", en: "About" },
    projects: { ko: "프로젝트", en: "Projects" },
    contact: { ko: "문의", en: "Contact" },
  },

  // ── 히어로 (첫 화면) ──────────────────────────────────────────────────────
  hero: {
    name: { ko: "조지관", en: "Jigwan Joe" },
    role: { ko: "IT 엔지니어", en: "IT Engineer" },
    tagline: {
      ko: "기획부터 출시·운영까지, 직접 끝까지 만들어 봅니다.",
      en: "I take things end-to-end — from planning to launch and operation.",
    },
    // 첫 화면에 보여줄 핵심 성과
    highlights: [
      { ko: "원스토어 앱 출시", en: "App live on ONE Store" },
      { ko: "학회 논문 2편 게재", en: "2 conference papers" },
      { ko: "수상 2회 (은상)", en: "2 Silver Prizes" },
    ],
    cta: {
      projects: { ko: "프로젝트 보기", en: "View Projects" },
      contact: { ko: "문의하기", en: "Contact Me" },
      github: { ko: "GitHub", en: "GitHub" },
      resume: { ko: "이력서 (PDF)", en: "Resume (PDF)" },
      blog: { ko: "기술 블로그", en: "Blog" },
      linkedin: { ko: "LinkedIn", en: "LinkedIn" },
    },
    // URL을 채우면 버튼이 자동으로 나타납니다 (null이면 숨김).
    resumeUrl: null,    // 예: "/조지관_이력서.pdf" — public 폴더에 PDF를 넣고 경로 지정
    blogUrl: null,      // 예: "https://velog.io/@아이디"
    linkedinUrl: null,  // 예: "https://www.linkedin.com/in/..."
  },

  // ── 소개 (About) ─────────────────────────────────────────────────────────
  about: {
    title: { ko: "👋 About Me", en: "👋 About Me" },
    // 프로필 이미지: src/assets/ 안의 파일명 (교체 시 파일만 바꾸면 됩니다)
    profileImage: "profile.jpg",
    description: {
      ko: [
        "경기대학교 컴퓨터공학부를 졸업한 IT 엔지니어 조지관입니다. 서버·데이터·클라우드 인프라부터 앱 출시까지, 직접 만든 결과물이 실제 환경에서 끝까지 동작하게 만드는 일에 집중해 왔습니다. 직접 개발한 Android 앱을 원스토어에 출시했고, 캡스톤과 연구 프로젝트로 학회 논문 2편 게재와 은상 2회를 기록했습니다.",
        "Spring Boot 기반 REST API 서버 운영과 RDB·MongoDB 데이터 모델링·로그 분석을 중심으로, GitHub Actions와 AWS·Cloud Run을 활용한 배포 자동화·CI/CD를 경험했습니다. 여기에 Android, 풀스택 웹, YOLOv8·RAG 같은 AI까지 폭넓은 환경에서 문제를 풀어오며 서비스 안정성과 운영 효율, 데이터 흐름을 함께 보는 시야를 길렀습니다.",
      ],
      en: [
        "I'm Jigwan Joe, an IT engineer and a Computer Engineering graduate of Kyonggi University. From servers, data, and cloud infrastructure to shipping a mobile app, I focus on building things that actually run end-to-end in production. I shipped a self-built Android app on ONE Store, and through capstone and research projects I co-authored two conference papers and earned two Silver Prizes.",
        "My core work spans operating Spring Boot REST API servers and data modeling/log analysis with RDB and MongoDB, along with deployment automation and CI/CD using GitHub Actions, AWS, and Cloud Run. Beyond that, I've solved problems across a wide range of environments — Android, full-stack web, and AI such as YOLOv8 and RAG — building a perspective that balances service stability, operational efficiency, and data flow.",
      ],
    },
    strengthTitle: { ko: "💡 핵심 역량", en: "💡 Core Strengths" },
    strengths: {
      ko: [
        "Spring Boot 기반 REST API 서버 운영, AWS·Cloud Run 배포 및 GitHub Actions CI/CD 자동화",
        "RDB·MongoDB 데이터 모델링·인덱싱·로그 분석 중심의 데이터 운영 역량 (SQLD·ADsP 보유)",
        "기획부터 원스토어 출시·운영까지 단독으로 진행한 Android 앱 개발 (제품 오너십)",
        "RAG 파이프라인(임베딩·벡터검색·리랭킹·근거기반 생성) 직접 구축 및 평가셋 기반 검색 품질 측정·개선 (recall@1 +12%p)",
        "YOLOv8 대화형 쓰레기통 로봇·RAG 차량 어시스턴트 등 AI·임베디드 문제 해결 (학회 논문 2편, 수상 2회)",
        "JSP/Servlet MVC와 React 기반 풀스택 웹 개발 경험",
      ],
      en: [
        "Operating Spring Boot REST API servers with AWS/Cloud Run deployment and GitHub Actions CI/CD",
        "Data-centric operations with RDB/MongoDB modeling, indexing, and log analysis (SQLD, ADsP certified)",
        "Solely owned an Android app from planning to ONE Store launch and operation (product ownership)",
        "Built a full RAG pipeline (embeddings, vector search, reranking, grounded generation) and measured/improved retrieval quality with an evaluation set (recall@1 +12%p)",
        "AI and embedded problem-solving — a YOLOv8 trash-can robot and a RAG car assistant (2 conference papers, 2 Prizes)",
        "Full-stack web development with JSP/Servlet MVC and React",
      ],
    },
    skillsTitle: { ko: "🛠 나의 스킬", en: "🛠 My Skills" },
  },

  // ── 기술 스택 (언어 공통) ─────────────────────────────────────────────────
  skills: [
    { category: "🔧 Backend", items: ["Java", "Spring Boot", "Spring Data JPA", "JSP/Servlet", "REST API", "OAuth2", "JWT", "FastAPI", "Flask", "MySQL", "MongoDB"] },
    { category: "🎨 Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML/CSS"] },
    { category: "📱 Mobile / Android", items: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "CameraX"] },
    { category: "🚀 Infra / DevOps", items: ["AWS", "Google Cloud Run", "Docker", "GitHub Actions", "Git"] },
    { category: "🧠 AI", items: ["Python", "PyTorch", "YOLOv8", "OpenCV", "RAG", "LLM API (GPT-4o · Gemini)"] },
  ],

  // ── 학력 / 자격증 / 논문 / 수상 / 병역 ────────────────────────────────────
  info: [
    {
      title: { ko: "🎓 학력", en: "🎓 Education" },
      list: {
        ko: ["경기대학교 (수원) 컴퓨터공학부", "2020.03 ~ 2026.02"],
        en: ["Kyonggi University (Suwon), Department of Computer Engineering", "Mar. 2020 ~ Feb. 2026"],
      },
    },
    {
      title: { ko: "📜 자격증", en: "📜 Certifications" },
      list: {
        ko: [
          "CSTS Foundation Level – 2024.08 (한국정보통신기술협회)",
          "TOPCIT – 506점 (2025.05)",
          "정보처리기사 - 2025.12 (한국산업인력공단)",
          "1종 보통 운전면허",
          "SQLD - 2026.03 (한국데이터산업진흥원)",
          "ADsP - 2026.06 (한국데이터산업진흥원)",
        ],
        en: [
          "CSTS Foundation Level – Aug. 2024 (TTA: Telecommunications Technology Association)",
          "TOPCIT – Score 506 (May 2025)",
          "Information Processing Engineer – Dec. 2025 (HRDK)",
          "Class 1 Driver's License",
          "SQLD – Mar. 2026 (Korea Data Agency)",
          "ADsP – Jun. 2026 (Korea Data Agency)",
        ],
      },
    },
    {
      title: { ko: "📄 논문 / 학술활동", en: "📄 Publications" },
      list: {
        ko: [
          "RAG 및 딥러닝 기반 지능형 차량 어시스턴트 시스템 설계와 구현 – 2025 한국정보기술학회 하계 종합학술대회 (공저)",
          "딥러닝 기반 대화형 쓰레기통 로봇 '쓰담' – 2024 한국정보기술학회 하계 종합학술대회 논문경진대회 (공저)",
        ],
        en: [
          "Design and Implementation of an Intelligent Vehicle Assistant Based on RAG and Deep Learning – 2025 KIISE Summer Conference (co-author)",
          "An Interactive Trash-Can Robot 'Ssodam' Based on Deep Learning – 2024 KIISE Summer Conference Paper Competition (co-author)",
        ],
      },
    },
    {
      title: { ko: "🏆 수상", en: "🏆 Awards" },
      list: {
        ko: [
          "2024 한국정보기술학회 하계 종합학술대회 논문경진대회 – 은상 (대화형 쓰레기통 로봇 '쓰담')",
          "2025 경기대학교 졸업 캡스톤 경연대회 – 은상 (AI 차량 어시스턴트 '길동이')",
          "노마드코더 챌린지 우수작 선정 (kakao-clone)",
        ],
        en: [
          "Silver Prize – 2024 KIISE Summer Conference Paper Competition (Interactive trash-can robot 'Ssodam')",
          "Silver Prize – 2025 Kyonggi University Capstone Design Contest (AI car assistant 'GildongE')",
          "Distinguished Submission – Nomad Coders Challenge (kakao-clone)",
        ],
      },
    },
    {
      title: { ko: "🪖 병역", en: "👨‍✈️ Military Service" },
      list: {
        ko: ["육군 병장 만기 전역 (2022.03 ~ 2023.09)"],
        en: ["Honorably discharged as Army Sergeant (Mar. 2022 ~ Sep. 2023)"],
      },
    },
  ],

  // ── 프로젝트 ─────────────────────────────────────────────────────────────
  projects: {
    title: { ko: "💼 주요 프로젝트", en: "💼 Featured Projects" },
    viewGithub: { ko: "GitHub 보기 →", en: "View on GitHub →" },
    toggleOpen: { ko: "기타 프로젝트 보기 ▼", en: "Show more projects ▼" },
    toggleClose: { ko: "기타 프로젝트 닫기 ▲", en: "Hide additional projects ▲" },
    posterOpen: { ko: "프로젝트 포스터 보기 ▼", en: "View project poster ▼" },
    posterClose: { ko: "포스터 닫기 ▲", en: "Hide poster ▲" },

    // 주요 프로젝트 (카드로 표시). link가 null이면 'GitHub 보기' 버튼이 숨겨집니다.
    featured: [
      {
        title: "혜택나침반 (청년정책 RAG 도우미)",
        period: "2026.06",
        tech: ["Spring Boot", "Python", "FastAPI", "RAG", "pgvector", "React", "Gemini", "sentence-transformers"],
        link: "https://github.com/crushonyou2/benefit-compass",
        poster: null,
        desc: {
          ko: "흩어진 공공 청년정책 데이터(2,631건)를 직접 수집·정제해, RAG 파이프라인(임베딩·pgvector 벡터검색·cross-encoder 리랭킹·근거기반 생성)을 컴포넌트 단위로 직접 구축한 검색·질의응답 서비스입니다. LLM API를 단순 호출하는 데 그치지 않고, 합성 평가셋 60문항으로 검색 품질을 측정하고 리랭킹을 적용해 1순위 정답률(recall@1)을 40%→52%로 개선했습니다. 주력인 Spring Boot(API)와 ML(Python)을 분리한 폴리글랏 마이크로서비스로 설계했으며, 답변은 검색된 정책만 근거로 인용해 환각을 방지했습니다. 공공데이터 지역코드 품질 한계를 진단해 토픽 검색으로 스코프를 명확히 정한 의사결정까지 포함합니다.",
          en: "A search and Q&A service for Korean youth-policy benefits where I built the RAG pipeline component by component — embeddings, pgvector vector search, a cross-encoder reranker, and grounded generation — rather than just calling an LLM API. I collected and cleaned 2,631 public-policy records, then used a 60-question synthetic evaluation set to measure retrieval quality and applied reranking to lift top-1 accuracy (recall@1) from 40% to 52%. It's designed as a polyglot microservice that splits a Spring Boot API (my core stack) from a Python ML service, and answers cite only retrieved policies to prevent hallucination. It also reflects a deliberate scoping decision made after diagnosing public-data region-code quality limits — positioning it as topic-based search.",
        },
        extraLink: {
          href: "https://crushonyou2.github.io/benefit-compass",
          label: { ko: "라이브 데모 →", en: "Live demo →" },
        },
      },
      {
        title: "AI 차량 어시스턴트 - 길동이",
        period: "2025.03 ~ 2025.06",
        tech: ["Spring Boot", "Java 17", "MongoDB", "RAG", "AWS EC2", "GitHub Actions"],
        link: "https://github.com/crushonyou2/gildongE",
        poster: "/gildongE_poster.jpg",
        desc: {
          ko: "7인 팀에서 데이터베이스 설계와 백엔드를 담당한 AI 차량 어시스턴트 '길동이'입니다. Spring Boot(Java 17)·MongoDB 기반으로 졸음·센서 데이터 저장 API, 소모품 교체 주기 계산, 알림 처리를 구현하고 RAG 질의응답 시스템을 연동했습니다. 특히 차량 매뉴얼 PDF를 임베딩해 벡터 데이터로 저장할 때 검색 품질이 높아지도록 컬렉션·청크 구조를 정리한 것이 핵심 작업이었습니다. AWS EC2 배포와 GitHub Actions CI/CD까지 구성했으며, 졸업 캡스톤 경연 은상 수상작이자 2025 한국정보기술학회 논문으로 게재되었습니다.",
          en: "An AI vehicle assistant ('GildongE') where, on a 7-person team, I owned the database design and backend. On a Spring Boot (Java 17) and MongoDB stack, I built APIs for drowsiness/sensor data storage, consumable replacement-cycle logic, and notification handling, and integrated a RAG question-answering system. A key part of my work was structuring the collections and chunking so that car-manual PDFs — once embedded and stored as vector data — could be retrieved with higher quality. I also set up AWS EC2 deployment with GitHub Actions CI/CD. It won the Silver Prize at the graduation capstone contest and was published at the 2025 KIISE Summer Conference.",
        },
      },
      {
        title: "쓰담 (대화형 쓰레기통 로봇)",
        period: "2024.03 ~ 2024.06",
        tech: ["YOLOv8", "OpenCV (NDK)", "PyTorch", "Android", "Bluetooth"],
        link: null,
        poster: "/ssodam_poster.jpg",
        desc: {
          ko: "팀 프로젝트에서 객체 탐지와 로봇 연동을 담당한 대화형 쓰레기통 로봇입니다. AI Hub 생활폐기물 데이터셋으로 학습한 YOLOv8 모델을 OpenCV(NDK) 환경에서 실시간으로 동작하도록 최적화하고, 인식 결과를 블루투스로 차량형 로봇(SmartCar)·안드로이드 태블릿과 연동해 자율주행 중 쓰레기를 감지·분류하도록 구현했습니다. 사람들이 직접 쓰레기를 처리하도록 유도하는 컨셉으로, 2024 한국정보기술학회 논문경진대회 은상을 수상했습니다.",
          en: "An interactive trash-can robot where, on a team project, I owned the object detection and robot integration. I optimized a YOLOv8 model — trained on the AI Hub household-waste dataset — to run in real time within an OpenCV (NDK) environment, and linked its detections over Bluetooth to a vehicle-type robot (SmartCar) and an Android tablet so it detects and sorts trash while driving autonomously. Built around a concept that nudges people to dispose of litter themselves, it won the Silver Prize at the 2024 KIISE Paper Competition.",
        },
      },
      {
        title: "오늘도 신선",
        period: "2025.09 ~ 2025.12",
        tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "MVVM"],
        link: "https://github.com/crushonyou2/Fridge-D-Day",
        poster: null,
        desc: {
          ko: "기획부터 원스토어 출시까지 혼자 진행한 Kotlin·Jetpack Compose 기반 Android 식품 유통기한 관리 앱(Physical AI 응용)입니다. Google ML Kit OCR 온디바이스 텍스트 인식, Room DB·WorkManager 기반 백그라운드 알림, 소비 패턴 통계와 홈 화면 위젯을 구현했고, MVVM + Repository 구조로 설계했습니다. 모든 데이터를 기기 내에서 처리하는 프라이버시 우선 설계를 적용해 실제 스토어에 배포·운영까지 경험했습니다.",
          en: "An Android food-expiration management app (Physical AI application) I built solo — from planning to its ONE Store launch — with Kotlin and Jetpack Compose. I implemented an on-device OCR pipeline with Google ML Kit, battery-efficient background notifications via Room DB and WorkManager, consumption statistics, and a home-screen widget, designed with an MVVM + Repository architecture. With a privacy-first design that keeps all data on-device, I took it all the way through real store deployment and operation.",
        },
        extraLink: {
          href: "https://m.onestore.co.kr/v2/ko-kr/app/0001003331",
          label: { ko: "원스토어 앱 페이지 가기 →", en: "Go to ONE Store app page →" },
        },
      },
      {
        title: "movie_diary",
        period: null,
        tech: ["React", "Vite", "FastAPI", "Gemini 2.5", "TMDB API", "Cloud Run", "GitHub Actions"],
        link: "https://github.com/crushonyou2/movie_diary",
        poster: null,
        desc: {
          ko: "일기에서 감정을 분석해 맞춤 영화를 추천하는 서비스입니다. React(Vite)·FastAPI 구조에 Google Gemini 2.5 Flash와 TMDB API를 연동했고, OTT 필터링과 일기 기록(History) 기능을 구현했습니다. 외부 TMDB API에서 영화 데이터를 불러오는 과정에서 생긴 문제를 다루며 외부 API 연동의 안정화를 경험했습니다. 백엔드는 Google Cloud Run(서버리스)에 배포하고 프론트엔드는 GitHub Actions로 자동 배포해 CI/CD를 구성했습니다.",
          en: "A service that analyzes the emotion in a user's diary entry and recommends matching films. Built on React (Vite) and FastAPI, integrating Google Gemini 2.5 Flash and the TMDB API, with OTT filtering and diary-history features. Working through issues that arose while fetching movie data from the external TMDB API, I gained hands-on experience stabilizing third-party API integration. The backend is deployed serverlessly on Google Cloud Run, and the frontend auto-deploys via GitHub Actions (CI/CD).",
        },
      },
      {
        title: "Build-Your-Health",
        period: "2024.09 ~ 2024.12",
        tech: ["JSP/Servlet", "Java", "Tomcat", "MySQL", "JDBC"],
        link: "https://github.com/crushonyou2/Build-Your-Health",
        poster: null,
        desc: {
          ko: "혼자 풀스택으로 개발한 JSP/Servlet 기반 MVC 건강 관리 웹 애플리케이션입니다. Java·Tomcat·MySQL(JDBC) 환경에서 건강 기록과 목표 달성률 시각화, 상품 쇼핑·리뷰, 게시판, 관리자용 상품·콘텐츠 관리(CRUD)까지 직접 설계하고 구현했습니다.",
          en: "A health-management web application built on a JSP/Servlet MVC architecture, which I developed solo as a full-stack project. On a Java, Tomcat, and MySQL (JDBC) stack, I designed and implemented everything — health logging with goal-progress visualization, product shopping and reviews, a community board, and admin-side product/content management (CRUD).",
        },
      },
      {
        title: "kakao-clone",
        period: null,
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/crushonyou2/kakao-clone",
        poster: null,
        desc: {
          ko: "노마드코더 챌린지 우수작으로 선정된 카카오톡 UI 클론 프로젝트입니다. HTML/CSS/JS 기반으로 반응형 UI 구현, DOM 렌더링 구조 이해, 레이아웃 최적화를 수행했습니다.",
          en: "A KakaoTalk UI clone built for a Nomad Coders challenge, selected as a distinguished submission. Implemented with HTML/CSS/JavaScript, focusing on responsive UI patterns, DOM rendering behavior, and layout optimization.",
        },
        extraLink: {
          href: "https://nomadcoders.co/community/thread/8730",
          label: { ko: "우수작 선정 게시글 보기 →", en: "View award announcement →" },
        },
      },
    ],

    // 기타 프로젝트 (토글로 펼쳐지는 간단 목록)
    others: [
      {
        title: "dragonball",
        link: "https://github.com/crushonyou2/dragonball",
        desc: {
          ko: "PC 부품 가격 비교 웹 서비스 — 데이터 수집·정규화 과정에서 웹 자원 처리·API 구조 설계 초기 단계 이해 경험.",
          en: "A PC component price-comparison service — practical experience in API structure planning and early-stage data normalization.",
        },
      },
      {
        title: "dynamic_scraper",
        link: "https://github.com/crushonyou2/dynamic_scraper",
        desc: {
          ko: "BeautifulSoup + Playwright 기반 채용공고 크롤러 — 키워드로 여러 채용 사이트를 크롤링해 결과를 캐싱하고 CSV로 내보내는 Flask 웹앱.",
          en: "A job-posting scraper built with BeautifulSoup and Playwright — a Flask web app that crawls multiple job sites by keyword, caches results, and exports them to CSV.",
        },
      },
      {
        title: "momentum",
        link: "https://github.com/crushonyou2/momentum",
        desc: {
          ko: "날씨·인삿말·투두리스트 UI를 구현한 모멘텀 앱 — 작은 기능 단위 시스템 구성과 클라이언트 렌더링 흐름 학습.",
          en: "A small clone app featuring weather, greetings, and a to-do list — helpful for understanding modular UI functionality and client rendering flow.",
        },
      },
    ],
  },

  // ── 문의 (Contact) ───────────────────────────────────────────────────────
  contact: {
    title: { ko: "📮 문의하기", en: "📮 Contact Me" },
    name: { ko: "이름", en: "Your Name" },
    email: { ko: "이메일", en: "Your Email" },
    message: { ko: "내용", en: "Your Message" },
    send: { ko: "보내기", en: "Send" },
    success: { ko: "문의가 성공적으로 전송되었습니다.", en: "Your message has been sent successfully." },
    error: { ko: "전송 중 문제가 발생했습니다", en: "An error occurred while sending the message" },
  },

  // ── 푸터 ─────────────────────────────────────────────────────────────────
  footer: {
    text: "© 2026 조지관",
    githubUrl: "https://github.com/crushonyou2",
    githubHandle: "crushonyou2",
  },
};

// 현재 언어에 맞는 값을 골라주는 헬퍼.
// field가 { ko, en } 객체면 해당 언어 값을, 아니면 값을 그대로 돌려줍니다.
export const pick = (field, lang) =>
  field && typeof field === "object" && !Array.isArray(field) && ("ko" in field || "en" in field)
    ? field[lang] ?? field.ko
    : field;
