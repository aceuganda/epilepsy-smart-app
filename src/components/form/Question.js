import React from 'react';
import PropTypes from "prop-types";

const Question = (props) => {
    Question.propTypes ={
        question: PropTypes.string,
        children: PropTypes.any

    }
  return (
    <div className='container'>
        <span className='question-plain'>{props.question}?
        {props.children}
        </span>
    </div>
  )
}

export default Question;
