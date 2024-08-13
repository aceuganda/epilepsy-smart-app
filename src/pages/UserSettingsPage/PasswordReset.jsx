import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';
import { ReactComponent as ClosedEye } from '../../assets/svg/UserAccount/closed-eye.svg';
import { ReactComponent as OpenEye } from '../../assets/svg/UserAccount/open-eye.svg';
import { updatePassWord } from '../../redux/Slices/UsersSlice';
import Spinner from '../../components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const PasswordReset = () => {
  useFirebaseScreenTracking('PasswordsChangePage');
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.user);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [feedBackMessage, setFeedBackMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const dispatch = useDispatch();

  const SubmitNewPassword = async (e) => {
    e.preventDefault();
    if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
      setError('Fill all the fields to update a password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Password mismatch');
      return;
    }
    setError('');
    setLoading(true);
    const passwordObject = {
      current_password: currentPassword,
      new_password: newPassword,
      id: userInfo.data.id
    };
    const response = await dispatch(updatePassWord(passwordObject));
    // console.log(passwordObject);
    // console.log(response);
    if (response?.payload?.status === 200) {
      resetState();
      setFeedBackMessage('Successfully updated password');
    } else {
      setError(
        'Something went wrong, your password may be incorrect please try again with the right password.'
      );
      setLoading(false);
    }
  };
  const resetState = () => {
    setLoading(false);
    setConfirmPassword('');
    setNewPassword('');
    setError('');
    setCurrentPassword('');
  };

  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'}>
        <div className="Auth Profile">
          <Avatar name={userInfo.data.username} alt={''} />
          <form className="auth-body">
            <div
              onClick={() => setShowPasswords(!showPasswords)}
              style={{ width: 'full', paddingTop: '1rem', paddingBottom: '.2rem' }}>
              {showPasswords ? <OpenEye /> : <ClosedEye />}
            </div>
            <div className="form-group">
              <label htmlFor="username">{t('Current password')}</label>
              <input
                type={showPasswords ? 'text' : 'password'}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
                name="current-password"
                value={currentPassword}
              />
            </div>
            <div className="form-group">
              <label htmlFor="current-passowrd">{t('New password')}</label>
              <input
                type={showPasswords ? 'text' : 'password'}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                name="new-password"
                value={newPassword}
              />
            </div>

            <div className="form-group">
              <label htmlFor="current-passowrd">{t('Confirm new password')}</label>
              <input
                type={showPasswords ? 'text' : 'password'}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                name="confirm-password"
                value={confirmPassword}
              />
            </div>
            {error && <span className="error">{error}</span>}
            {feedBackMessage && <span className="feedBack">{feedBackMessage}</span>}
            <button
              type="submit"
              disabled={loading}
              className="o-btn"
              onClick={(e) => {
                SubmitNewPassword(e);
              }}
              style={{ bottom: '10px' }}>
              {loading ? <Spinner /> : 'Save'}
            </button>
          </form>
        </div>
      </UserSettingsPageComponent>
    </div>
  );
};

export default PasswordReset;
