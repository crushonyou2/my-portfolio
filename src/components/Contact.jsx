import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xrdjpo8',
      'template_hndz1ts',
      form.current,
      'GoLqvXvUesYtb-S9G'
    ).then(
      () => {
        alert(t('contact.success'));
        form.current.reset();
      },
      (error) => {
        alert(t('contact.error') + error.text);
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold mb-4"> {t('contact.title')}</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder={t('contact.name')}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.email')}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder={t('contact.message')}
          required
          rows="5"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {t('contact.send')}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
