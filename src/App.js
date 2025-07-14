import React, { useState } from 'react';
import About from './components/About';
import Info from './components/Info';
import { motion, AnimatePresence } from "framer-motion";
import Contact from './components/Contact';

function App() {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 space-y-10">
      {/* 소개 및 핵심 역량 */}
      <About />

      {/* 학력, 자격증, 수상 등 */}
      <Info />

      {/* 주요 프로젝트 */}
      <motion.section
        id="projects"
        className="max-w-4xl mx-auto scroll-mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">💼 주요 프로젝트</h2>
        <div className="space-y-6">
          <Project
            title="movie_diary"
            description="사용자 일기를 분석해 감정을 분류하고, 그에 맞는 영화를 추천하는 AI 감성 기반 서비스입니다. React와 Flask 기반으로 구현했습니다."
            link="https://github.com/crushonyou2/movie_diary"
          />
          <Project
            title="gildongE"
            description="Spring Boot와 MongoDB 기반 차량 어시스턴트 백엔드 시스템. 실시간 알림, 소모품 교체 주기 계산, API 설계 및 배포를 담당했습니다."
            link="https://github.com/crushonyou2/gildongE"
            poster="/gildongE_poster.jpg"
          />
          <Project
            title="Build-Your-Health"
            description="React 기반 건강 루틴 관리 앱. 사용자 상태 데이터를 기록하고 목표 기반 루틴 관리 기능을 구현했습니다."
            link="https://github.com/crushonyou2/Build-Your-Health"
          />
          <Project
            title="kakao-clone"
            description={
              <>
                노마드코더 챌린지 기반의 카카오톡 클론 UI 프로젝트입니다. 해당 기수 우수작으로 선정되었으며,
                HTML/CSS/JS 기반으로 반응형 UI와 메시지 리스트 인터페이스를 구현했습니다.
                <br />
                <a
                  href="https://nomadcoders.co/community/thread/8730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 underline block mt-2"
                >
                  우수작 선정 게시글 보기 →
                </a>
              </>
            }
            link="https://github.com/crushonyou2/kakao-clone"
          />
        </div>
      </motion.section>

      {/* 기타 프로젝트 (토글) */}
      <motion.section
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="mt-10">
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={() => setShowOthers(!showOthers)}
          >
            {showOthers ? '기타 프로젝트 닫기 ▲' : '기타 프로젝트 보기 ▼'}
          </button>
        </div>

        <AnimatePresence>
          {showOthers && (
            <motion.div
              key="others"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4 text-gray-700 text-sm"
            >
              <MiniProject
                title="dragonball"
                description="PC 부품 정보를 비교 분석하는 가격 비교 웹 서비스"
                link="https://github.com/crushonyou2/dragonball"
              />
              <MiniProject
                title="dynamic_scraper"
                description="BeautifulSoup + Playwright 기반 웹 크롤링 연습"
                link="https://github.com/crushonyou2/dynamic_scraper"
              />
              <MiniProject
                title="momentum"
                description="날씨·인삿말·투두리스트를 구현한 모멘텀 앱 클론"
                link="https://github.com/crushonyou2/momentum"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* 연락처 폼 */}
      <Contact />
      {/* 푸터 */}
      <footer className="mt-16 text-sm text-gray-500 text-center">
        © 2025 조지관 — GitHub: <a href="https://github.com/crushonyou2" className="underline">crushonyou2</a>
      </footer>
    </div>
  );
}

function Project({ title, description, link, poster }) {
  const [showPoster, setShowPoster] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-600 hover:underline"
      >
        GitHub 보기 →
      </a>

      {/* 포스터 토글 */}
      {poster && (
        <div className="mt-3">
          <button
            onClick={() => setShowPoster(!showPoster)}
            className="text-sm text-blue-500 hover:underline"
          >
            {showPoster ? '포스터 닫기 ▲' : '프로젝트 포스터 보기 ▼'}
          </button>
          <AnimatePresence>
            {showPoster && (
              <motion.img
                key="poster"
                src={poster}
                alt={`${title} 포스터`}
                className="mt-2 rounded-md shadow max-h-[500px] w-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}


function MiniProject({ title, description, link }) {
  return (
    <div className="border-l-4 border-blue-300 pl-3">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
        {title}
      </a>
      <p>{description}</p>
    </div>
  );
}

export default App;
