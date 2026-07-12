import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/profile.jpg";
import { portfolio, pick } from "./portfolioData";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
};
const publicAsset = (src) => `${process.env.PUBLIC_URL}${src}`;

function App() {
  const [lang, setLang] = useState("ko");
  const t = (value) => pick(value, lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="portfolio-app">
      <a className="skip-link" href="#main-content">{t(portfolio.ui.skipToContent)}</a>
      <Nav lang={lang} setLang={setLang} t={t} />
      <main id="main-content">
        <section id="top" className="hero-grid section-shell pt-16 sm:pt-24">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="eyebrow">{t(portfolio.hero.eyebrow)}</p>
            <h1 className="display-title mt-5">{t(portfolio.hero.title)}</h1>
            <p className="hero-summary mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              <span>{t(portfolio.hero.summaryLead)}</span>
              <span className="hero-summary-tail">{t(portfolio.hero.summaryTail)}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="button button-primary">{t(portfolio.ui.viewWork)}</a>
              <a href={publicAsset("/jigwan-joe-portfolio-2026.pdf")} target="_blank" rel="noreferrer" className="button button-secondary">{t(portfolio.ui.resume)} ↗</a>
              <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="button button-ghost">GitHub ↗</a>
            </div>
            <p className="hero-target mt-7 flex items-center gap-2 text-sm"><span className="status-dot" aria-hidden="true" />{t(portfolio.hero.target)}</p>
          </motion.div>
          <motion.aside {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="profile-card">
            <div className="flex items-center gap-4">
              <img src={profileImage} alt={t(portfolio.hero.photoAlt)} className="h-20 w-20 rounded-2xl object-cover" />
              <div><p className="profile-name text-xl font-bold">{t(portfolio.name)}</p><p className="profile-role mt-1 text-sm">{t(portfolio.role)}</p></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {portfolio.hero.quickFacts.map((fact) => <div key={t(fact.label)} className="mini-fact"><strong>{t(fact.value)}</strong><span>{t(fact.label)}</span></div>)}
            </div>
          </motion.aside>
        </section>

        <section aria-label={t(portfolio.proof.title)} className="section-shell py-12 sm:py-16">
          <motion.div {...reveal} className="proof-grid">
            {portfolio.proof.items.map((item) => <div key={t(item.label)} className="proof-item"><strong>{t(item.value)}</strong><span>{t(item.label)}</span></div>)}
          </motion.div>
        </section>

        <section id="about" className="section-shell section-gap">
          <SectionHeading eyebrow={t(portfolio.about.eyebrow)} title={t(portfolio.about.title)} copy={t(portfolio.about.copy)} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {portfolio.about.strengths.map((strength, index) => (
              <motion.article key={t(strength.title)} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className="strength-card">
                <span className="card-number">0{index + 1}</span><h3>{t(strength.title)}</h3><p>{t(strength.copy)}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell section-gap">
          <SectionHeading eyebrow={t(portfolio.projects.eyebrow)} title={t(portfolio.projects.title)} copy={t(portfolio.projects.copy)} />
          <div className="mt-12 space-y-7">{portfolio.projects.featured.map((project, index) => <CaseStudy key={project.title} project={project} index={index} t={t} />)}</div>
          <motion.div {...reveal} className="mt-12">
            <p className="eyebrow">{t(portfolio.projects.moreEyebrow)}</p><h3 className="more-title mt-2 text-2xl font-bold">{t(portfolio.projects.moreTitle)}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {portfolio.projects.more.map((project) => <ArchiveProject key={project.title} project={project} t={t} />)}
            </div>
          </motion.div>
        </section>

        <section id="credentials" className="section-shell section-gap">
          <SectionHeading eyebrow={t(portfolio.credentials.eyebrow)} title={t(portfolio.credentials.title)} copy={t(portfolio.credentials.copy)} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {portfolio.credentials.groups.map((group) => <motion.article key={t(group.title)} {...reveal} className="credential-card"><h3>{t(group.title)}</h3><ul>{group.items.map((item) => <li key={t(item)}>{t(item)}</li>)}</ul></motion.article>)}
          </div>
          <motion.div {...reveal} className="skill-panel mt-5">
            <p>{t(portfolio.credentials.skillsTitle)}</p>
            <div className="skill-row">{portfolio.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </motion.div>
        </section>

        <section id="contact" className="section-shell pb-20 pt-24 sm:pb-28">
          <motion.div {...reveal} className="contact-panel">
            <div><p className="eyebrow">{t(portfolio.contact.eyebrow)}</p><h2>{t(portfolio.contact.title)}</h2><p>{t(portfolio.contact.copy)}</p></div>
            <div className="flex flex-wrap gap-3 lg:justify-end"><a href={`mailto:${portfolio.contact.email}`} className="button button-primary">{portfolio.contact.email}</a><a href={publicAsset("/jigwan-joe-portfolio-2026.pdf")} target="_blank" rel="noreferrer" className="button button-secondary">{t(portfolio.ui.resume)} ↗</a><a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="button button-secondary">GitHub ↗</a></div>
          </motion.div>
        </section>
      </main>
      <footer className="site-footer py-8"><div className="section-shell flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between"><span>© 2026 {t(portfolio.name)}</span><span>{t(portfolio.footer)}</span></div></footer>
    </div>
  );
}

function Nav({ lang, setLang, t }) {
  return <nav className="site-nav sticky top-0 z-50 backdrop-blur-xl"><div className="section-shell flex h-16 items-center justify-between"><a href="#top" className="brand-mark">JIGWAN JOE</a><div className="nav-links flex items-center gap-4 text-sm sm:gap-7"><a href="#about" className="nav-link hidden sm:inline">{t(portfolio.ui.about)}</a><a href="#projects" className="nav-link">{t(portfolio.ui.projects)}</a><a href="#credentials" className="nav-link hidden sm:inline">{t(portfolio.ui.credentials)}</a><a href="#contact" className="nav-link">{t(portfolio.ui.contact)}</a><button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="lang-button" aria-label={t(portfolio.ui.languageLabel)}>{lang === "ko" ? "EN" : "KO"}</button></div></div></nav>;
}

function SectionHeading({ eyebrow, title, copy }) { return <motion.div {...reveal} className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><p className="section-copy">{copy}</p></motion.div>; }

function CaseStudy({ project, index, t }) {
  return <motion.article {...reveal} className={`case-study project-${index + 1}`}>
    <div className="case-summary"><div className="flex items-center justify-between gap-3"><span className="case-index">0{index + 1} / {t(project.type)}</span><span className="text-sm text-slate-500">{project.period}</span></div><h3>{project.title}</h3><p className="case-lead">{t(project.lead)}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}</div><div className="mt-7 flex flex-wrap gap-3">{project.links.map((link, linkIndex) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={linkIndex === 0 ? "text-link primary-link" : "text-link"}>{t(link.label)} ↗</a>)}</div><ProjectMedia media={project.media} t={t} /></div>
    <div className="case-details">{project.details.map((detail) => <div key={t(detail.label)} className="detail-row"><span>{t(detail.label)}</span><p>{t(detail.copy)}</p></div>)}<div className="result-grid">{project.results.map((result) => <div key={t(result.label)}><strong>{t(result.value)}</strong><span>{t(result.label)}</span></div>)}</div></div>
  </motion.article>;
}

function ProjectMedia({ media, t }) {
  const [open, setOpen] = useState(false);
  if (!media) return null;

  if (media.type === "gallery") {
    return <div className="project-gallery" aria-label={t(media.label)}>{media.images.map((item) => <img key={item.src} src={publicAsset(item.src)} alt={t(item.alt)} loading="lazy" />)}</div>;
  }

  if (media.type === "image") {
    return <figure className="project-evidence"><img src={publicAsset(media.src)} alt={t(media.alt)} loading="lazy" /><figcaption>{t(media.caption)}</figcaption></figure>;
  }

  return <div className="poster-toggle"><button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? t(portfolio.projects.posterClose) : t(portfolio.projects.posterOpen)}</button>{open && <img src={publicAsset(media.src)} alt={t(media.alt)} loading="lazy" />}</div>;
}

function ArchiveProject({ project, t }) {
  const [open, setOpen] = useState(false);
  if (!project.media && project.link) {
    return <a href={project.link} target="_blank" rel="noreferrer" className="archive-card"><div><span>{project.type}</span><h4>{project.title}</h4><p>{t(project.copy)}</p></div><span aria-hidden="true" className="archive-arrow">↗</span></a>;
  }

  return <article className={`archive-card archive-card-static ${open ? "media-open" : ""}`}><div><span>{project.type}</span><h4>{project.title}</h4><p>{t(project.copy)}</p>{project.media && <button type="button" className="archive-media-button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? t(portfolio.projects.posterClose) : t(portfolio.projects.posterOpen)}</button>}</div>{open && project.media && <img className="archive-poster" src={publicAsset(project.media.src)} alt={t(project.media.alt)} loading="lazy" />}</article>;
}

export default App;
