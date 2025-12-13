import React, { useState } from 'react';
import About from './components/About';
import Info from './components/Info';
import { motion, AnimatePresence } from "framer-motion";
import Contact from './components/Contact';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="absolute top-4 right-4 text-sm text-gray-500 hover:underline">
      {t('language.toggle')}
    </button>
  );
};

function App() {
  const { t } = useTranslation();
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 space-y-10">
      <LanguageToggle />
      <About />
      <Info />

      <motion.section
        id="projects"
        className="max-w-4xl mx-auto scroll-mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">{t('projects.title')}</h2>
        <div className="space-y-6">
          <Project
            title="오늘도 신선"
            description={
              <>
                {t('projects.fridge_d_day')}<br />
                <a
                  href="https://m.onestore.co.kr/v2/ko-kr/app/0001003331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 underline block mt-2"
                >
                  {t('projects.fridge_d_day_link')}
                </a>
              </>
            }
            link="https://github.com/crushonyou2/Fridge-D-Day"
          />
          <Project
            title="movie_diary"
            description={t('projects.movie_diary')}
            link="https://github.com/crushonyou2/movie_diary"
          />
          <Project
            title="gildongE"
            description={t('projects.gildongE')}
            link="https://github.com/crushonyou2/gildongE"
            poster={process.env.PUBLIC_URL + "/gildongE_poster.jpg"}
          />
          <Project
            title="Build-Your-Health"
            description={t('projects.build_your_health')}
            link="https://github.com/crushonyou2/Build-Your-Health"
          />
          <Project
            title="kakao-clone"
            description={
              <>
                {t('projects.kakao_clone')}<br />
                <a
                  href="https://nomadcoders.co/community/thread/8730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 underline block mt-2"
                >
                  {t('projects.kakao_award_link')}
                </a>
              </>
            }
            link="https://github.com/crushonyou2/kakao-clone"
          />
        </div>
      </motion.section>

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
            {showOthers ? t('projects.toggle_close') : t('projects.toggle_open')}
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
                description={t('projects.dragonball')}
                link="https://github.com/crushonyou2/dragonball"
              />
              <MiniProject
                title="dynamic_scraper"
                description={t('projects.dynamic_scraper')}
                link="https://github.com/crushonyou2/dynamic_scraper"
              />
              <MiniProject
                title="momentum"
                description={t('projects.momentum')}
                link="https://github.com/crushonyou2/momentum"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <Contact />
      <footer className="mt-16 text-sm text-gray-500 text-center">
        © 2025 조지관 — GitHub: <a href="https://github.com/crushonyou2" className="underline">crushonyou2</a>
      </footer>
    </div>
  );
}

function Project({ title, description, link, poster }) {
  const { t } = useTranslation();
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
        {t('projects.view_github')}
      </a>

      {poster && (
        <div className="mt-3">
          <button
            onClick={() => setShowPoster(!showPoster)}
            className="text-sm text-blue-500 hover:underline"
          >
            {showPoster ? t('projects.poster_close') : t('projects.poster_open')}
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
