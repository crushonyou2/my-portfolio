import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // 이미지 경로 맞게 수정

const About = () => {
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
          alt="조지관 프로필 사진"
          className="w-40 h-40 rounded-full object-cover shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* 텍스트 영역 */}
        <div className="text-justify flex-1">
          <h2 className="text-2xl font-bold mb-4">👋 About Me</h2>
          <p className="mb-4">
            경기대학교 컴퓨터공학부 4학년 재학 중인 <strong>조지관</strong>입니다.
            객체 탐지 AI, RAG 기반 차량 비서 등 다양한 프로젝트를 경험하며
            실전 중심의 백엔드 역량을 길렀습니다.
          </p>
          <p className="mb-4">
            Java/Spring Boot 기반 REST API 개발, MongoDB 실시간 알림, AWS 배포 등
            팀 프로젝트와 캡스톤 경험을 통해 다양한 기술을 실무에 적용했습니다.
          </p>
        </div>
      </div>

      {/* 핵심 역량 */}
      <h3 className="text-xl font-semibold mt-8 mb-2">💡 핵심 역량</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Spring Boot 기반 RESTful API 서버 설계 및 AWS 배포 경험</li>
        <li>React + TypeScript 기반 SPA 프론트엔드 및 풀스택 개발</li>
        <li>YOLO + TACO 데이터셋 기반 객체 탐지 모델 구현 및 논문 수상</li>
        <li>RAG 기반 차량 비서 시스템 백엔드 개발 및 캡스톤 은상 수상</li>
      </ul>

      {/* 기술 스택 */}
      <h3 className="text-xl font-semibold mt-6 mb-2">🛠 나의 스킬</h3>
      <div className="flex flex-wrap gap-2">
        {[
          'Java', 'Spring Boot', 'REST API', 'AWS', 'TypeScript', 'ReactJS', 'Node.js',
          'MySQL', 'MongoDB', 'Python', 'YOLO', 'AI/인공지능', 'C', 'JavaScript',
          'Git', 'JSP', 'Postman', 'OAuth2'
        ].map(skill => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="text-center mt-6">
</div>

    </motion.section>
  );
};

export default About;
