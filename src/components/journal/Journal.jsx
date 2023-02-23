/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const Journal = ({ title, date, color, id }) => {
  return (
    <Link to={'/Journal/:' + id}>
      <div
        style={{ borderLeft: `10px solid ${color}`, marginTop: '10px' }}
        className="Journal-card">
        <div
          style={{
            display: 'flex',
            alignItems: 'center ',
            justifyContent: 'space-between',
            width: '100%'
          }}>
          <div
            style={{
              width: '100%',
              height: '25px',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 7
            }}>
            <h4 style={{ fontSize: 'small' }}>{title}</h4>
            <p style={{ fontSize: 'x-small' }}>{date}</p>
          </div>
          <div>
            <FiChevronRight style={{ width: '20px' }} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Journal;
