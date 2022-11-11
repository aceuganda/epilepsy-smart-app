import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';

const ResilienceActivitiesPageComponent = (props) => {
  ResilienceActivitiesPageComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string,
    title: PropTypes.string
  };
  return (
    <div>
      <TopBar
        title={props.title ? props.title : 'Resilience Activities'}
        route={`${props.backroute}`}
      />
      {props.children}
    </div>
  );
};

export default ResilienceActivitiesPageComponent;
