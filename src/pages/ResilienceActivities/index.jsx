import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ResilienceActivitiesPageComponent = (props) => {
  ResilienceActivitiesPageComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string,
    title: PropTypes.string
  };
  const { t } = useTranslation();
  return (
    <div>
      <TopBar
        title={props.title ? t(props.title) : t('Resilience Activities')}
        route={`${props.backroute}`}
      />
      <div className="resilience-activities">{props.children}</div>
    </div>
  );
};

export default ResilienceActivitiesPageComponent;
