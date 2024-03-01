import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ResilienceComponent = (props) => {
  ResilienceComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string
  };
  const { t } = useTranslation();
  return (
    <div>
      <TopBar title={t('Resilience Tracking')} route={`${props.backroute}`} />
      {props.children}
    </div>
  );
};

export default ResilienceComponent;
