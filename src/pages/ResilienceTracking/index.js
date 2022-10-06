/* eslint-disable */
import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';

const ResilienceComponent = (props) => {
    ResilienceComponent.propTypes = {
        children: PropTypes.any,
        backroute: PropTypes.string
    };
    return (
        <div>
        <TopBar title="Resilience Tracking" route={`${props.backroute}`} />
        {props.children}
        </div>
    );
    };

export default ResilienceComponent;