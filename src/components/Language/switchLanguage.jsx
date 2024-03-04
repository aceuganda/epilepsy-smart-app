import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="language-selector-container">
      <select
        id="language-select"
        className="selector-label"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}>
        <option value="en">English</option>
        <option value="lg">Luganda</option>
        <option value="rk">Runyankole</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
