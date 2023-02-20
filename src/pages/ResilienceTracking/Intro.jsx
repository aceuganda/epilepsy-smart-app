import React from 'react';
import ResilienceComponent from '.';
import { ReactComponent as ResilienceImg } from '../../assets/svg/Resilience/resilience.svg';
import Form from '../../components/form/Form';
import Largebtn from '../../components/form/Buttons/Largebtn';
import Footer from '../../components/layouts/Footer';

const ResilienceStartPage = () => {
  return (
    <div className="form start-page">
      <ResilienceComponent backroute={'/home'}>
        <Form>
          <ResilienceImg className="image" />
          <Largebtn title="Track Resilience" link="/resilience-form/1" />
          <Largebtn title="View tallies" link="/resilience/tallies" />
        </Form>
      </ResilienceComponent>
      <Footer />
    </div>
  );
};

export default ResilienceStartPage;
