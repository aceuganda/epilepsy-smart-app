import React from 'react';
import Form from '../../components/form/Form';
import Footer from '../../components/layouts/Footer';
import { ReactComponent as MedicationImg } from '../../assets/svg/Medication/medication.svg';
import Largebtn from '../../components/form/Buttons/Largebtn';
import MedicationComponent from '.';

const IntroPage = () => {
  return (
    <div className="form start-page">
      <MedicationComponent backroute={'/home'}>
        <Form>
          <MedicationImg className="image" />
          <Largebtn title="Add Medicine" link="/medication/tracking" />
          <Largebtn title="Monitor Medicines" link="/medication/assessment/0" />
          <Largebtn title="Record Your Medicines" link="" />
        </Form>
      </MedicationComponent>
      <Footer />
    </div>
  );
};

export default IntroPage;
