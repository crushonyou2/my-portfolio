import { motion } from "framer-motion";
import { content, pick } from "../content";
import { useLang } from "../useLang";

// 프로필 이미지는 content.about.profileImage 파일명을 src/assets/ 에서 불러옵니다.
const profileImage = require(`../assets/${content.about.profileImage}`);

const SkillTag = ({ text }) => (
  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">
    {text}
  </span>
);

const About = () => {
  const lang = useLang();
  const a = content.about;
  const description = pick(a.description, lang);
  const strengths = pick(a.strengths, lang);

  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-xl scroll-mt-20"
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
          <h2 className="text-2xl font-bold mb-4">{pick(a.title, lang)}</h2>
          {description.map((line, index) => (
            <p key={index} className="text-gray-800 leading-relaxed mb-2">{line}</p>
          ))}
        </div>
      </div>

      {/* 핵심 역량 */}
      <h3 className="text-xl font-semibold mt-8 mb-2">{pick(a.strengthTitle, lang)}</h3>
      <ul className="list-disc list-inside space-y-1">
        {strengths.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* 기술 스택 */}
      <h3 className="text-xl font-semibold mt-6 mb-4">{pick(a.skillsTitle, lang)}</h3>

      <div className="space-y-4">
        {content.skills.map((group) => (
          <div key={group.category}>
            <h4 className="font-semibold text-gray-700 mb-1">{group.category}</h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillTag key={skill} text={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
