import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const Card = ({img, title, link}) => {
    Card.propTypes = {
        img: PropTypes.string,
        title: PropTypes.string.isRequired,
        link: PropTypes.string
    }
  return (
    <div className='card'>
        <img src={img}/>
        <Link to={`${link}`}><span className='text-uppercase'>{title}</span></Link>
    </div>
  )
}

export default Card