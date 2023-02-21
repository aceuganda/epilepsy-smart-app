import React from 'react';
import UserSettingsPageComponent from '.';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Slices/UsersSlice';
import { Link } from 'react-router-dom';
import Avatar from '../HomePage/Avatar';
import Footer from '../../components/layouts/Footer';
import { ReactComponent as LogoutIcon } from '../../assets/svg/UserAccount/sign_out.svg';
import { ReactComponent as ProfileIcon } from '../../assets/svg/UserAccount/profile_icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/svg/UserAccount/password_icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/svg/UserAccount/settings_icon.svg';
import { ReactComponent as AboutIcon } from '../../assets/svg/UserAccount/about_icon.svg';

const Settings = () => {
  const settingsCategories = [
    {
      name: 'Profile',
      icon: <ProfileIcon />,
      link: '/account/settings'
    },
    {
      name: 'Change password',
      icon: <PasswordIcon />,
      link: '/account/password-reset'
    },
    {
      name: 'Settings',
      icon: <SettingsIcon />,
      link: null
    },
    {
      name: 'About',
      icon: <AboutIcon />,
      link: '/account/about'
    }
  ];
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  return (
    <UserSettingsPageComponent backroute={'/home'}>
      <div className="user-profile">
        <div className="left">
          <Avatar name={userInfo.data.username} alt={''} />
          <div className="user-details">
            <span className="welcome">Welcome</span>
            <span className="user-name">{userInfo.data.username}</span>
          </div>
        </div>
        <div className="right" onClick={() => dispatch(logout())}>
          <LogoutIcon />
          <div>Logout</div>
        </div>
      </div>
      {settingsCategories &&
        settingsCategories.map((category, key) => (
          <div key={key} className="category row">
            <div className="row align-items-center">
              {category.icon}
              <h4>{category.name}</h4>
            </div>
            <Link to={category.link ? `${category.link}` : '#'}>
              <span>{'>'}</span>
            </Link>
          </div>
        ))}
      <Footer />
    </UserSettingsPageComponent>
  );
};

export default Settings;
