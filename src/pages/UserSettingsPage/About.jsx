import React from 'react';
import UserSettingsPageComponent from '.';
import { ReactComponent as AboutIcon } from '../../assets/svg/UserAccount/about_icon.svg';
import Largebtn from '../../components/form/Buttons/Largebtn';

const About = () => {
  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'} title="About the App">
        <AboutIcon style={{ marginTop: '50px' }} />
        <Largebtn title="Terms of Service" link="/terms" />
        <Largebtn title="Privacy Policy" link="/privacy" />
      </UserSettingsPageComponent>
    </div>
  );
};

export default About;
