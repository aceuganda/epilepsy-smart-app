import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';
import Spinner from '../../components/Spinner/Spinner';

const UserDetailsEdit = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo.data.username);
  const [userEmail, setUserEmail] = useState(userInfo.data.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.data.email);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  //   const submitForm = (data) => {
  //     dispatch(loginUser(data));
  //   };

  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'}>
        <div className="Auth Profile">
          <Avatar name={userInfo.data.username} alt={''} />
          <form onSubmit="{handleSubmit(submitForm)}" className="auth-body">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                {...register('username')}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                name="email"
                {...register('email')}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Phone Number</label>
              <input
                type="text"
                name="phone-number"
                {...register('phone-number')}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="finish-btn"
              onClick={handleSubmit}
              style={{ bottom: '10px' }}>
              {loading ? <Spinner /> : 'Save'}
            </button>
          </form>
        </div>
      </UserSettingsPageComponent>
    </div>
  );
};

export default UserDetailsEdit;
