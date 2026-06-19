import { useTranslation } from "react-i18next";
import { content, pick } from "../content";
import { useLang } from "../useLang";

const Nav = () => {
  const { i18n } = useTranslation();
  const lang = useLang();
  const n = content.nav;

  const toggleLanguage = () => {
    i18n.changeLanguage(lang === "en" ? "ko" : "en");
  };

  const linkClass = "text-sm text-gray-600 hover:text-blue-600 transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-gray-100/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-bold text-gray-800">
          {pick(content.hero.name, lang)}
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#about" className={linkClass}>{pick(n.about, lang)}</a>
          <a href="#projects" className={linkClass}>{pick(n.projects, lang)}</a>
          <a href="#contact" className={linkClass}>{pick(n.contact, lang)}</a>
          <button onClick={toggleLanguage} className="text-sm text-gray-500 hover:underline">
            {pick(content.ui.languageToggle, lang)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
