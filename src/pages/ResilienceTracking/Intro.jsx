import React from 'react';
import ResilienceComponent from '.';
import { ReactComponent as ResilienceImg } from '../../assets/svg/ResilienceTracking/resilience.svg';
import Form from '../../components/form/Form';
import Largebtn from '../../components/form/Buttons/Largebtn';
import Footer from '../../components/layouts/Footer';
import { ReactComponent as RecordIcon } from '../../assets/svg/Seizure/RecordSeizure.svg';
import { ReactComponent as MonitorIcon } from '../../assets/svg/Seizure/MonitorSeizure.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/Form/Question/info.svg';
import { getResilienceTallies } from '../../redux/Slices/ResilienceTracking';
import store from '../../store';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

store.dispatch(getResilienceTallies);
const ResilienceStartPage = () => {
  useFirebaseScreenTracking('ResilienceTrackingIntroPage');
  const { t } = useTranslation();
  return (
    <div className="form start-page">
      <ResilienceComponent backroute={'/home'}>
        <Form>
          <ResilienceImg className="image" />
          <Largebtn title={t("Track Resilience")} link="/resilience-form/1" icon={<RecordIcon />} />
          <Largebtn title={t("View tallies")} link="/resilience/tallies" icon={<MonitorIcon />} />
          <div className="disclaimer">
            <InfoIcon />
            <span>{t('Tallies updated every after 3 days')}</span>
          </div>
        </Form>
      </ResilienceComponent>
      <Footer />
    </div>
  );
};

export default ResilienceStartPage;
