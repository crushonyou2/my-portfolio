import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { useTranslation } from 'react-i18next';

const SkillTag = ({ text }) => (
  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">
    {text}
  </span>
);

const About = () => {
  const { t } = useTranslation(); // i18n hook
  const description = t('about.description', { returnObjects: true });

  return (
    <motion.section
      className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* 프로필 이미지 */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* 텍스트 영역 */}
        <div className="text-justify flex-1">
          <h2 className="text-2xl font-bold mb-4">{t('about.title')}</h2>
          {Array.isArray(description) ? (
            description.map((line, index) => (
              <p key={index} className="text-gray-800 leading-relaxed mb-2">{line}</p>
            ))
          ) : (
            <p className="text-gray-800 leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* 핵심 역량 */}
      <h3 className="text-xl font-semibold mt-8 mb-2">{t('about.strengthTitle')}</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>{t('about.strength1')}</li>
        <li>{t('about.strength2')}</li>
        <li>{t('about.strength3')}</li>
        <li>{t('about.strength4')}</li>
      </ul>

      {/* 기술 스택 */}
      <h3 className="text-xl font-semibold mt-6 mb-4">{t('about.skillsTitle')}</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-1">🔧 Backend</h4>
          <div className="flex flex-wrap gap-2">
            <SkillTag text="Java" />
            <SkillTag text="Spring Boot" />
            <SkillTag text="Spring Data JPA" />
            <SkillTag text="REST API" />
            <SkillTag text="OAuth2" />
            <SkillTag text="JWT" />
            <SkillTag text="MySQL" />
            <SkillTag text="MongoDB" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-1">🚀 Infra / DevOps</h4>
          <div className="flex flex-wrap gap-2">
            <SkillTag text="AWS" />
            <SkillTag text="Docker" />
            <SkillTag text="GitHub Actions" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-1">🎨 Frontend</h4>
          <div className="flex flex-wrap gap-2">
            <SkillTag text="React" />
            <SkillTag text="TypeScript" />
            <SkillTag text="JavaScript" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-1">🧠 AI</h4>
          <div className="flex flex-wrap gap-2">
            <SkillTag text="Python" />
            <SkillTag text="YOLO" />
            <SkillTag text="PyTorch" />
            <SkillTag text="OpenCV" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
