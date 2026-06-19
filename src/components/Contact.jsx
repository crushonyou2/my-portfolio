import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { content, pick } from '../content';
import { useLang } from '../useLang';

const Contact = () => {
  const form = useRef();
  const lang = useLang();
  const c = content.contact;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xrdjpo8',
      'template_hndz1ts',
      form.current,
      'GoLqvXvUesYtb-S9G'
    ).then(
      () => {
        alert(pick(c.success, lang));
        form.current.reset();
      },
      (error) => {
        alert(pick(c.error, lang) + error.text);
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10 scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold mb-4"> {pick(c.title, lang)}</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder={pick(c.name, lang)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder={pick(c.email, lang)}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder={pick(c.message, lang)}
          required
          rows="5"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {pick(c.send, lang)}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
