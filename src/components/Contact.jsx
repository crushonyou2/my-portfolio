import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';  // ← 추가

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xrdjpo8',
      'template_hndz1ts',
      form.current,
      'GoLqvXvUesYtb-S9G'
    ).then(
      () => {
        alert('문의가 성공적으로 전송되었습니다.');
        form.current.reset();
      },
      (error) => {
        alert('전송 중 문제가 발생했습니다: ' + error.text);
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
      <h2 className="text-2xl font-bold mb-4">📮 Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input type="text" name="name" placeholder="이름" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="이메일" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="내용" required rows="5" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          보내기
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
