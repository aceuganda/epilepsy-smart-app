import React from 'react'
import HealthIcon from '../../assets/img/Footer/health.png'
import ArticleIcon from '../../assets/img/Footer/articles.png'

const Footer = () => {
  return (
    <div className="smart footer">
      <div className='row'>
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='icons'>
              <img src={HealthIcon}/>
              <img src={ArticleIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer