import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Question = ({ question, children }) => {
  const { t } = useTranslation();
  Question.propTypes = {
    question: PropTypes.string,
    children: PropTypes.any
  };
  return (
    <div className="container">
      <span className="question-plain">
        {t(question)}?{children}
      </span>
    </div>
  );
};

export default Question;
