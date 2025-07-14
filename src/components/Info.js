import { motion } from 'framer-motion';

const Info = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
        {/* 학력 */}
        <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">🎓 학력</h2>
            <ul className="list-disc list-inside">
            <li>경기대학교 (수원) 컴퓨터공학부</li>
            <li>2020.03 ~ 2026.02 (졸업예정)</li>
            </ul>
        </div>

        {/* 자격증 */}
        <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">📜 자격증</h2>
            <ul className="list-disc list-inside">
            <li>CSTS Foundation Level – 2024.08 (한국정보통신기술협회)</li>
            <li>정보처리기사 – 필기합격 (2025.03, 한국산업인력공단)</li>
            <li>1종 보통 운전면허 – 2021.09 취득 (경찰청)</li>
            </ul>
        </div>

        {/* 수상 */}
        <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">🏆 수상</h2>
            <ul className="list-disc list-inside">
            <li>2024 한국정보기술학회 하계 종합학술대회 논문경진대회 – 은상</li>
            <li>2025 경기대학교 졸업 캡스톤 경연대회 – 은상</li>
            </ul>
        </div>

        {/* 병역 */}
        <div>
            <h2 className="text-2xl font-bold mb-2">👨‍✈️ 병역</h2>
            <ul className="list-disc list-inside">
            <li>육군 병장 만기 전역 (2022.03 ~ 2023.09)</li>
            </ul>
        </div>
    </motion.section>
  );
};

export default Info;
