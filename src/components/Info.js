import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();

  // 공통 렌더 함수
  const renderSection = (title, items) => (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {renderSection(
        t('info.education.title'),
        t('info.education.list', { returnObjects: true })
      )}

      {renderSection(
        t('info.certifications.title'),
        t('info.certifications.list', { returnObjects: true })
      )}

      {renderSection(
        t('info.awards.title'),
        t('info.awards.list', { returnObjects: true })
      )}

      {renderSection(
        t('info.military.title'),
        t('info.military.list', { returnObjects: true })
      )}
    </motion.section>
  );
};

export default Info;
