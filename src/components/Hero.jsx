import { motion } from "framer-motion";
import { content, pick } from "../content";
import { useLang } from "../useLang";

const Hero = () => {
  const lang = useLang();
  const h = content.hero;

  // URL이 있는 보조 링크만 자동으로 버튼을 만듭니다.
  const secondaryLinks = [
    { url: content.footer.githubUrl, label: pick(h.cta.github, lang) },
    { url: h.resumeUrl, label: pick(h.cta.resume, lang) },
    { url: h.blogUrl, label: pick(h.cta.blog, lang) },
    { url: h.linkedinUrl, label: pick(h.cta.linkedin, lang) },
  ].filter((l) => l.url);

  return (
    <motion.section
      id="top"
      className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-blue-600 font-semibold tracking-wide">{pick(h.role, lang)}</p>
      <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
        {pick(h.name, lang)}
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{pick(h.tagline, lang)}</p>

      {/* 핵심 성과 배지 */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {h.highlights.map((item, idx) => (
          <span
            key={idx}
            className="bg-white border border-gray-200 shadow-sm text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {pick(item, lang)}
          </span>
        ))}
      </div>

      {/* CTA 버튼 */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {pick(h.cta.projects, lang)}
        </a>
        <a
          href="#contact"
          className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          {pick(h.cta.contact, lang)}
        </a>
        {secondaryLinks.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
