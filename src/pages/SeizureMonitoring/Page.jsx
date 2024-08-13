import React from 'react';
import SeizureComponent from '.';
import Form from '../../components/form/Form';
import Footer from '../../components/layouts/Footer';
import { ReactComponent as SeizureImg } from '../../assets/svg/Seizure/seizure.svg';
import Largebtn from '../../components/form/Buttons/Largebtn';
import { ReactComponent as RecordIcon } from '../../assets/svg/Seizure/RecordSeizure.svg';
import { ReactComponent as MonitorIcon } from '../../assets/svg/Seizure/MonitorSeizure.svg';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const StartPage = () => {
  useFirebaseScreenTracking('SeizureAssessmentStartPage');
  const { t } = useTranslation();
  return (
    <div className="form start-page">
      <SeizureComponent backroute={'/home'}>
        <Form>
          <SeizureImg className="image" />
          <Largebtn
            title={t("Record Seizure Details")}
            link="/seizure-form/assessment/1"
            icon={<MonitorIcon />}
          />
          {/* <Largebtn title="Monitor Seizure History" link="" icon={<RecordIcon />} /> */}
        </Form>
      </SeizureComponent>
      <Footer />
    </div>
  );
};

export default StartPage;
