import React from 'react'
import TopBar from '../../components/form/TopBar'
import PropTypes from "prop-types"

const SeizureComponent = (props) => {
    SeizureComponent.propTypes = {
        children: PropTypes.any,
        backroute:PropTypes.string,
    }
  return (
    <div>
          <TopBar title='Seizure Tracking' route={`${props.backroute}`}/>
          {props.children}
    </div>
  )
}

export default SeizureComponent