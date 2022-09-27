import React from 'react';
import SeizureComponent from '.';
import Form from '../../components/form/Form';
import Footer from '../../components/layouts/Footer';
import { ReactComponent as SeizureImg } from '../../assets/svg/Seizure/seizure.svg';
import Largebtn from '../../components/form/Buttons/Largebtn';

const StartPage = () => {
  return (
    <div className="form start-page">
      <SeizureComponent backroute={'/home'}>
        <Form>
          <SeizureImg className="image" />
          <Largebtn title="Record Seizure Details" link="/seizure-form/assessment/1" />
          <Largebtn title="Monitor Seizure History" link="" />
        </Form>
      </SeizureComponent>
      <Footer />
    </div>
  );
};

export default StartPage;
