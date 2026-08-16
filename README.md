# 포트폴리오 사이트

**백엔드·QA 프로젝트의 역할과 측정 결과를 한 페이지에서 확인할 수 있는 개인 포트폴리오**

[![Live](https://img.shields.io/badge/live-crushonyou2.github.io-success)](https://crushonyou2.github.io/my-portfolio/)
[![Stack](https://img.shields.io/badge/React-Tailwind%20CSS-61DAFB?logo=react&logoColor=black)](#기술-스택)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![i18n](https://img.shields.io/badge/i18n-한국어%20%2F%20English-informational)](#설계-판단)

**[포트폴리오 바로가기](https://crushonyou2.github.io/my-portfolio/)**

프로젝트를 나열하는 대신 **각 프로젝트에서 맡은 범위와 측정한 결과**가 보이도록 구성했습니다.
지원 방향(IT시스템·SI / QA·TestOps / 백엔드)을 첫 화면에 명시하고, 프로젝트마다 저장소로 바로 이동합니다.

---

## 주요 기능

| 기능 | 내용 |
|---|---|
| **About** | 지원 직무와 핵심 역량 |
| **Projects** | 프로젝트별 역할·결과·저장소 링크 |
| **Contact** | 이메일·GitHub 연결 |
| **다국어** | 한국어 / 영어 토글 |
| **반응형 UI** | 모바일·데스크톱 대응, 섹션 진입 애니메이션 |
| **PDF** | 포트폴리오 PDF 내려받기 |

## 설계 판단

### 내용을 코드에서 분리했다

문구가 컴포넌트 안에 박혀 있으면 프로젝트 하나를 고칠 때마다 화면 코드를 열어야 합니다.
포트폴리오 내용 전체를 `src/portfolioData.js` 한 곳에 모으고, 화면은 그 데이터를 그리기만 합니다.

다국어도 같은 파일에서 처리합니다. 값마다 `{ ko, en }`으로 두고 `pick(value, lang)` 헬퍼가 현재 언어를 고르는 방식이라,
**번역 파일을 따로 관리하지 않아도 문구와 번역이 항상 같은 자리에 붙어 있습니다.**

### 푸시하면 배포되게 했다

포트폴리오는 자주 고치는 문서라 배포가 번거로우면 갱신을 미루게 됩니다.
**GitHub Actions로 빌드·배포를 자동화**해 내용 수정에만 집중할 수 있게 했습니다.

### 프로젝트 카드를 문제 → 기여 → 판단 순으로 서술했다

"무엇을 썼다"만 적으면 다 비슷해 보입니다.
각 카드를 **문제 → 기여 → 판단**으로 두고, 프로젝트 성격에 따라 세 번째 이후 칸을 바꿨습니다 —
품질 검증, 운영 관측, 담당 범위처럼 그 프로젝트에서 실제로 설명할 것이 있는 축입니다.
**측정한 값은 서술에 섞지 않고 별도 결과 타일 3개로 뽑았습니다.**

상단에는 핵심 성과(수집 2,631건, RAG 1순위 정답률 +12%p, 원스토어 배포 2건, 수상 2회)를 따로 보이게 했습니다.

## 기술 스택

| 영역 | 기술 |
|---|---|
| 프론트 | React, Tailwind CSS, Framer Motion |
| 다국어 | 데이터 파일 내 `{ ko, en }` 병기 + `pick()` 헬퍼 |
| 배포 | GitHub Pages, GitHub Actions |

## 프로젝트 구조

```text
src/
├── index.js           React 진입점
├── App.js             화면 구성
├── portfolioData.js   포트폴리오 내용 + 한/영 번역 (단일 데이터 소스)
├── assets/            프로필 이미지
└── index.css
public/                프로젝트 이미지, PDF 이력서, OG 이미지
```

## 실행

```bash
npm install && npm start
```

내용을 고칠 때는 화면 코드가 아니라 `src/portfolioData.js`를 수정합니다.

## 범위와 조건

- 프로젝트 카드의 수치는 **각 저장소 README를 근거**로 하며, 어떤 표본·조건에서 잰 값인지 함께 적습니다.
- 내용을 갱신할 때는 `src/portfolioData.js`를 고칩니다. 화면 코드에는 문구가 없고, 페이지 제목과 OG 태그만 `public/index.html`에 있습니다.

## 만든 사람

**Jigwan Joe**

- GitHub: [@crushonyou2](https://github.com/crushonyou2)
- Email: jigwan.joe@gmail.com
