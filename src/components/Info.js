import { motion } from 'framer-motion';
import { content, pick } from '../content';
import { useLang } from '../useLang';

const Info = () => {
  const lang = useLang();

  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {content.info.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{pick(section.title, lang)}</h2>
          <ul className="list-disc list-inside">
            {pick(section.list, lang).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
};

export default Info;
