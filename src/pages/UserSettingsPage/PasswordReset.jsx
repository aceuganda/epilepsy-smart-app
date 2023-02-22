import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';

const PasswordReset = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [userEmail, setUserEmail] = useState(userInfo.data.email);

  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'}>
        <div className="Auth Profile">
          <Avatar name={userInfo.data.username} alt={''} />
          <form className="auth-body">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email" name="username" value={userEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="current-passowrd">Current password</label>
              <input type="password" name="current-password" value={userEmail} />
            </div>
          </form>
        </div>
      </UserSettingsPageComponent>
    </div>
  );
};

export default PasswordReset;
