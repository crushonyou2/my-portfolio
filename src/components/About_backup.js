const About = () => {
  return (
    <section className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-xl text-justify">
      <h2 className="text-2xl font-bold mb-4">👋 About Me</h2>
      <p className="mb-4">
        안녕하세요. 경기대학교 컴퓨터공학부 4학년에 재학 중인 <strong>조지관</strong>입니다.
      </p>
      <p className="mb-4">
        학부 과정에서 ‘이론’과 ‘실무’를 접목해보고자 Java와 Spring Boot로 RESTful 백엔드를,
        React와 TypeScript로 SPA를 구현하며 풀스택 역량을 키웠고,
        MongoDB Change Streams + SSE 기반 실시간 알림,
        Swagger 기반 API 문서 자동화,
        Postman E2E 테스트(90% 커버리지)를 경험했습니다.
      </p>
      <p className="mb-4">
        3학년 캡스톤에서는 TACO Dataset과 YOLO를 활용해 거리 쓰레기 탐지 로봇의 객체 탐지 AI를 구현했고,
        해당 프로젝트는 한국정보기술학회 논문경진대회에서 은상을 수상했습니다.
      </p>
      <p className="mb-4">
        4학년 졸업 캡스톤에서는 딥러닝과 RAG 기반 지능형 차량 비서 시스템의 백엔드를 맡아,
        Spring Boot와 MongoDB로 API 서버를 개발하고 AWS 배포 및 유지보수를 담당했으며,
        교내 캡스톤 경연대회에서 은상을 수상했습니다.
      </p>
      <p className="mb-4">
        Node.js·MySQL 기반 서버부터 GitHub Actions CI/CD, OAuth2 소셜 로그인까지
        다양한 기술 환경에 유연하게 대응하며,
        구조적 설계와 안정성, 확장성을 고려한 개발자로 성장하고 있습니다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💡 핵심 역량</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Spring Boot 기반 RESTful API 서버 설계 및 AWS 클라우드</li>
        <li>React + TypeScript 기반 SPA 구현 및 풀스택 개발 역량</li>
        <li>YOLO + TACO 데이터셋 기반 객체 탐지 AI 모델 구현 및 논문상 수상</li>
        <li>RAG 기반 지능형 차량 비서 시스템 백엔드 개발 및 교내 캡스톤 은상 수상</li>
        <li>Swagger 문서화 + Postman 기반 E2E 테스트 자동화 경험</li>
      </ul>

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
    </section>
  );
};

export default About;
