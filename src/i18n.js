import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 텍스트는 src/content.js 에서 직접 읽습니다.
// 여기서는 현재 언어 상태(ko/en) 관리와 전환만 담당합니다.
i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: {} }, ko: { translation: {} } },
    lng: 'ko', // 기본 언어
    fallbackLng: 'ko',
    interpolation: { escapeValue: false }
  });

export default i18n;
