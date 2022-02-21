import React from 'react';
import PropTypes from "prop-types";

const Question = (props) => {
    Question.propTypes ={
        question: PropTypes.string
    }
  return (
    <div className='container'>
        <span className='font-weight-600 font-size-14' 
        style={{color:'#003', letterSpacing:'0.8px', padding:'10px'}}>{props.question}</span>
    </div>
  )
}

export default Question;
