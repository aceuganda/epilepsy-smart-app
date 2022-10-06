import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, children }) => {
  Question.propTypes = {
    question: PropTypes.string,
    children: PropTypes.any
  };
  return (
    <div className="container">
      <span className="question-plain">
        {question}?{children}
      </span>
    </div>
  );
};

export default Question;
