import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="language-selector-container">
      <select
        id="language-select"
        className="selector-label"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}>
        <option value="en">English</option>
        <option value="lg">Luganda</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
