/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Journal = ({ title, date, color, id, notes }) => {
  const newDate = new Date(date);
  const { t } = useTranslation();
  const formattedDate = `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`;
  return (
    <Link to={`/Journal/${id}`} state={{ title, date, color, id, notes }}>
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
            <h4 style={{ fontSize: 'small' }}>{t(title)}</h4>
            <p style={{ fontSize: 'x-small' }}>{formattedDate}</p>
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
