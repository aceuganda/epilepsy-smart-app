import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

const TopBar = (props) => {
  TopBar.propTypes = {
      title: PropTypes.string,
      route: PropTypes.string
  }
  return (
    <div className='smart form-top-bar'>
        <div className='row container-fluid'>
            <span className='col-2 col-sm-2'>
                <Link to={props.route}><i className='fa fa-arrow-left mt-2 font-size-20 font-weight-600' style={{color:'#8a2be2'}}></i></Link>
            </span>
            <span className='row form-title'>
                <img style={{border:'1px solid yellow', width:'30px', height:'30px'}} className="mr-2"/>
                <p >{props.title}</p>
            </span>
        </div>
    </div>
  )
}

export default TopBar;