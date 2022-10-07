import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowRight } from '../../assets/svg/Form/Pagination/arrow.svg';
import { Link } from 'react-router-dom';

const Pagination = ({ page_number, total_number, page_link, button, onClick }) => {
  Pagination.propTypes = {
    page_number: PropTypes.number,
    total_number: PropTypes.number,
    page_link: PropTypes.string,
    button: PropTypes.bool,
    onClick: PropTypes.func
  };

  return (
    <div className="paginate">
      <div className="container">
        <span>
          <span id="page">{page_number}</span>
          <span id="total"> of {total_number}</span>
        </span>
        <Link to={`${page_link}`}>
          {button === true ? (
            <button onClick={onClick}>
              <ArrowRight />
            </button>
          ) : (
            <span></span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
