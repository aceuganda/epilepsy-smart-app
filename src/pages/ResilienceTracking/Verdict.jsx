import React from 'react';
import happyEmoji from '../../assets/img/Resilience/HappyEmoji.png';
import sadEmoji from '../../assets/img/Resilience/SadEmoji.png';
import PropTypes from 'prop-types';

const VerdictComponent = ({ verdict, text }) => {
  VerdictComponent.propTypes = {
    verdict: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  };
  return (
    <div className="verdict">
      <div className="row">
        {verdict ? <img src={happyEmoji} alt="" /> : <img src={sadEmoji} alt="" />}
        <div className="text-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VerdictComponent;
