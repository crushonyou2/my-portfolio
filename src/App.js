import React, { useState } from 'react';
import About from './components/About';
import Info from './components/Info';
import { motion, AnimatePresence } from "framer-motion";
import Contact from './components/Contact';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { content, pick } from './content';
import { useLang } from './useLang';

function App() {
  const lang = useLang();
  const [showOthers, setShowOthers] = useState(false);
  const p = content.projects;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Nav />
      <Hero />
      <div className="p-6 space-y-10">
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
        <h2 className="text-2xl font-bold mb-4">{pick(p.title, lang)}</h2>
        <div className="space-y-6">
          {p.featured.map((project) => (
            <Project key={project.title} project={project} lang={lang} />
          ))}
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
            {showOthers ? pick(p.toggleClose, lang) : pick(p.toggleOpen, lang)}
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
              {p.others.map((project) => (
                <MiniProject key={project.title} project={project} lang={lang} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <Contact />
      <footer className="mt-16 text-sm text-gray-500 text-center">
        {content.footer.text} — GitHub:{' '}
        <a href={content.footer.githubUrl} className="underline">
          {content.footer.githubHandle}
        </a>
      </footer>
      </div>
    </div>
  );
}

function Project({ project, lang }) {
  const [showPoster, setShowPoster] = useState(false);
  const p = content.projects;
  const poster = project.poster ? process.env.PUBLIC_URL + project.poster : null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.period && (
          <span className="text-sm text-gray-400">{project.period}</span>
        )}
      </div>

      {project.tech && project.tech.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <p className="mt-2">
        {pick(project.desc, lang)}
        {project.extraLink && (
          <>
            <br />
            <a
              href={project.extraLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 underline block mt-2"
            >
              {pick(project.extraLink.label, lang)}
            </a>
          </>
        )}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:underline"
        >
          {pick(p.viewGithub, lang)}
        </a>
      )}

      {poster && (
        <div className="mt-3">
          <button
            onClick={() => setShowPoster(!showPoster)}
            className="text-sm text-blue-500 hover:underline"
          >
            {showPoster ? pick(p.posterClose, lang) : pick(p.posterOpen, lang)}
          </button>
          <AnimatePresence>
            {showPoster && (
              <motion.img
                key="poster"
                src={poster}
                alt={`${project.title} 포스터`}
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

function MiniProject({ project, lang }) {
  return (
    <div className="border-l-4 border-blue-300 pl-3">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
        {project.title}
      </a>
      <p>{pick(project.desc, lang)}</p>
    </div>
  );
}

export default App;
