import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';
import Spinner from '../../components/Spinner/Spinner';
import { editUserData, logout } from '../../redux/Slices/UsersSlice';
import Modal from '../../components/modal';

const UserDetailsEdit = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo.data.username);
  const [userEmail, setUserEmail] = useState(userInfo.data.email);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const [updateWarning, setUpdateWarning] = useState(false);
  const dispatch = useDispatch();

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let updateObject = {};
    if (userEmail !== userInfo.data.email) updateObject = { ...updateObject, email: userEmail };
    if (userName !== userInfo.data.username) updateObject = { ...updateObject, username: userName };

    const response = await dispatch(editUserData(updateObject));
    console.log(response);
    if (response?.payload.status === 200) {
      dispatch(logout());
      setLoading(false);
    } else {
      setErrors('Something went wrong, please try again');
      setUpdateWarning(false);
      setLoading(false);
    }
  };

  const openWarningForm = async (e) => {
    e.preventDefault();
    if (userName === '' || userEmail === '') {
      setErrors('Empty field(s) detected');
      return;
    }
    if (userEmail === userInfo.data.email && userName === userInfo.data.username) {
      setErrors('No changes detected');
      return;
    } else {
      setUpdateWarning(true);
    }
  };

  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'}>
        <div className="Auth Profile">
          <Avatar name={userInfo.data.username} alt={''} />
          <form className="auth-body">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="username">Phone Number</label>
              <input
                type="text"
                name="phone-number"
                {...register('phone-number')}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div> */}
            {errors && <span className="error">{errors}</span>}
            <button
              type="submit"
              disabled={loading}
              className="finish-btn"
              onClick={openWarningForm}
              style={{ bottom: '10px' }}>
              Save
            </button>
            {updateWarning && (
              <Modal show={updateWarning} closeModal={() => setUpdateWarning(false)}>
                <div>
                  <h3>Save updates</h3>
                  <div>Updating you information will log you out automatically</div>
                  <button onClick={submitData}>{loading ? <Spinner /> : 'Save & logout'}</button>
                </div>
              </Modal>
            )}
          </form>
        </div>
      </UserSettingsPageComponent>
    </div>
  );
};

export default UserDetailsEdit;
