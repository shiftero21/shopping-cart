import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className={styles.langButton}
      onClick={toggleLanguage}
    >
      {i18n.language === "es" ? "ES" : "EN"}
    </button>
  );
};

export default LanguageSelector;
