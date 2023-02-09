import React from 'react';
import UserSettingsPageComponent from '.';
import LogoutIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Slices/UsersSlice';
import Form from '../../components/form/Form';
import {
  HelpOutlineOutlined,
  LockOutlined,
  NotificationsNone,
  PersonOutline,
  VisibilityOutlined
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Avatar from '../HomePage/Avatar';

const Settings = () => {
  const settingsCategories = [
    {
      name: 'Account',
      icon: <PersonOutline />,
      link: null
    },
    {
      name: 'Notifications',
      icon: <NotificationsNone />,
      link: null
    },
    {
      name: 'Appearance',
      icon: <VisibilityOutlined />,
      link: null
    },
    {
      name: 'Privacy and Security',
      icon: <LockOutlined />,
      link: '/privacy'
    
    },
    {
      name: 'Help',
      icon: <HelpOutlineOutlined />,
      link: null
    }
  ];
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  return (
    <UserSettingsPageComponent backroute={'/home'}>
      <Form>
        <div className="user-profile">
          <Avatar name={userInfo.data.username} alt={''} />
          <div className="user-details">
            <span className="user-name">{userInfo.data.username}</span>
            <span className="user-email">{userInfo.data.email}</span>
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
        <div className="category row" onClick={() => dispatch(logout())}>
          <div
            className="row align-items-center"
            style={{ position: 'absolute', margin: '0 auto', bottom: '25px' }}>
            <LogoutIcon style={{ color: 'red' }} />
            <h4 style={{ fontSize: '21px', textTransform: 'capitalize' }}>Log out</h4>
          </div>
        </div>
      </Form>
    </UserSettingsPageComponent>
  );
};

export default Settings;
