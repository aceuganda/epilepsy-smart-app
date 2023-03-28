import React from 'react';
import Form from '../../components/form/Form';
import Footer from '../../components/layouts/Footer';
import { ReactComponent as MedicationImg } from '../../assets/svg/Medication/medication.svg';
import Largebtn from '../../components/form/Buttons/Largebtn';
import MedicationComponent from '.';
import { ReactComponent as RecordIcon } from '../../assets/svg/Seizure/RecordSeizure.svg';
import { ReactComponent as AddMedication } from '../../assets/svg/Medication/addMedication.svg';

const IntroPage = () => {
  return (
    <div className="form start-page">
      <MedicationComponent backroute={'/home'}>
        <Form>
          <MedicationImg className="image" />
          <Largebtn title="Add Medicine" link="/medication/tracking" icon={<AddMedication />} />
          <Largebtn
            title="Record Your Medication"
            link="/medication/assessment/0"
            icon={<RecordIcon />}
          />
          {/* <Largebtn title="Record Your Medicines" link="" /> */}
        </Form>
      </MedicationComponent>
      <Footer />
    </div>
  );
};

export default IntroPage;
