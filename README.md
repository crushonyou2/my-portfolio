# 포트폴리오 사이트

**IT 시스템·소프트웨어 품질을 중심으로, 백엔드·AI 서비스 개발 경험과 검증 결과를 한 페이지에서 확인할 수 있는 개인 포트폴리오**

[![Live](https://img.shields.io/badge/live-crushonyou2.github.io-success)](https://crushonyou2.github.io/my-portfolio/)
[![Stack](https://img.shields.io/badge/React-Tailwind%20CSS-61DAFB?logo=react&logoColor=black)](#기술-스택)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![i18n](https://img.shields.io/badge/i18n-한국어%20%2F%20English-informational)](#설계-판단)

**[포트폴리오 바로가기](https://crushonyou2.github.io/my-portfolio/)**

프로젝트를 단순히 나열하는 대신 **어떤 문제를 맡았고, 무엇을 판단했으며, 결과를 어떻게 검증했는지**가 보이도록 구성했습니다.
첫 화면에서는 IT시스템·전산과 소프트웨어 품질을 주 지원 방향으로 두고, 백엔드·AI 서비스 개발 경험을 이를 뒷받침하는 기술 경험으로 제시합니다.

대표 프로젝트는 다음 순서로 배치했습니다.

1. **혜택나침반** — RAG·백엔드·데이터·운영 관측·정량 평가
2. **오늘도 신선** — Android 제품 개발·회귀 검증·릴리스 판단·재출시
3. **길동이** — 7인 팀 백엔드·MongoDB·OpenAPI·수상/논문

---

## 주요 기능

| 기능 | 내용 |
|---|---|
| **About** | 지원 방향과 일하는 방식 |
| **Key outcomes** | RAG 정량 개선, 릴리스 보류·재출시, 논문·수상, 실제 스토어 배포 |
| **Projects** | 프로젝트별 문제·기여·판단·결과·근거 링크 |
| **Credentials** | 학력·자격·연구·수상·핵심 기술 |
| **Contact** | 이메일·GitHub 연결 |
| **다국어** | 한국어 / 영어 토글 |
| **반응형 UI** | 모바일·데스크톱 대응, 섹션 진입 애니메이션 |
| **PDF** | 정적 포트폴리오 PDF 열기 |

## 설계 판단

### 내용을 코드에서 분리했다

문구가 컴포넌트 안에 박혀 있으면 프로젝트 하나를 고칠 때마다 화면 코드를 열어야 합니다.
포트폴리오 내용 전체를 `src/portfolioData.js` 한 곳에 모으고, 화면은 그 데이터를 그리기만 합니다.

다국어도 같은 파일에서 처리합니다. 값마다 `{ ko, en }`으로 두고 `pick(value, lang)` 헬퍼가 현재 언어를 고르는 방식이라,
**한글 문구와 영문 번역이 같은 데이터 구조 안에서 함께 관리됩니다.**

### 푸시하면 배포되게 했다

포트폴리오는 자주 고치는 문서라 배포가 번거로우면 갱신을 미루게 됩니다.
**GitHub Actions로 빌드·배포를 자동화**해 내용 수정에만 집중할 수 있게 했습니다.

### 프로젝트 카드를 문제 → 기여 → 판단 → 결과 순으로 읽게 했다

"무엇을 썼다"만 적으면 프로젝트가 서로 비슷해 보입니다.
대표 프로젝트는 **문제 → 기여 → 판단**을 기본 골격으로 두고, 품질 검증·운영 관측·후속 조치·담당 범위처럼 프로젝트에서 실제로 설명할 가치가 있는 축을 추가했습니다.
측정값은 본문과 분리해 결과 타일로 제시하고, 저장소·평가셋·QA 기록·런북 등 검증 가능한 근거로 바로 이동할 수 있게 했습니다.

상단 핵심 성과는 다음 네 축으로 구성합니다.

- RAG 1순위 정답률 **40% → 52%** — 직접 만든 60문항 평가셋 기준
- **배포 보류 → 재출시** — OCR 잔여 오답을 근거로 보류하고 사용자 확인 흐름 도입
- **논문 2편 · 수상 2회**
- **원스토어 2회 배포** — 기획·개발·검증·출시·재출시 단독 수행

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
public/                프로젝트 이미지, 정적 PDF, OG 이미지
```

## 실행

```bash
npm install && npm start
```

내용을 고칠 때는 화면 코드가 아니라 `src/portfolioData.js`를 수정합니다.

## 범위와 조건

- 프로젝트 카드의 수치는 **각 프로젝트 저장소의 README·평가 기록을 근거**로 합니다.
- 혜택나침반의 지연 원인은 콜드/웜 요청과 구간을 나눠 측정한 해당 배포 환경의 결과로 표현하며, 일반적인 코드 원인까지 배제하는 식으로 단정하지 않습니다.
- 오늘도 신선의 OCR 수치는 독립 한국 라벨 55장·D-30 시나리오 기준의 회귀 측정값이며, 실사용 전체 정확도로 일반화하지 않습니다.
- `public/jigwan-joe-portfolio-2026.pdf`는 별도 정적 파일이므로 웹 콘텐츠 변경 후 별도 동기화가 필요합니다.

## 만든 사람

**조지관 (Jigwan Joe)**

- GitHub: [@crushonyou2](https://github.com/crushonyou2)
- Email: jigwan.joe@gmail.com
