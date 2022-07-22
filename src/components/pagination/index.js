import React from 'react';
import PropTypes from "prop-types";
import { ReactComponent as ArrowRight } from "../../assets/svg/Form/Pagination/arrow.svg"
import { Link } from 'react-router-dom';

const Pagination = ({ page_number, total_number, page_link, button }) => {
    Pagination.propTypes = {
        page_number: PropTypes.string,
        total_number: PropTypes.string,
        page_link: PropTypes.string,
        button: PropTypes.bool
    }

    return (
        <div className='paginate'>
            <div className='container'>
                <span>
                    <span id='page'>{page_number}</span>
                    <span id='total'>{' '}of {' '}{total_number}</span>
                </span>
                <Link to={`${page_link}`}>
                    {button === true ?
                        <button>
                            <ArrowRight />
                        </button>
                        :
                        <span></span>
                    }
                </Link>
            </div>
        </div>
    )
}

export default Pagination;