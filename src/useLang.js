import { useTranslation } from "react-i18next";

// 현재 언어('ko' | 'en')를 돌려주고, 언어가 바뀌면 컴포넌트를 다시 그려줍니다.
export function useLang() {
  const { i18n } = useTranslation();
  return i18n.language && i18n.language.startsWith("en") ? "en" : "ko";
}
