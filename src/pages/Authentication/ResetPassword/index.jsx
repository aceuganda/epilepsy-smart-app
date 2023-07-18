import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthPageComponent from '../index';
import { ReactComponent as ResetImg } from '../../../assets/svg/Auth/Reset.svg';
import { PASSWORD_RESET_URL } from '../../../config/urls';
import axios from 'axios';
import Spinner from '../../../components/Spinner/Spinner';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [feedBack, setFeedback] = useState('');
  const [loading, setLoader] = useState(false);

  const handleResetPassword = async (e) => {
    setLoader(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.post(
        `${PASSWORD_RESET_URL}/${token}`,
        {
          password: newPassword
        },
        config
      );
      setFeedback(
        <div>
          Password reset successfull. Please{' '}
          <Link to={'/login'} style={{ color: '#007bff' }}>
            Login
          </Link>{' '}
        </div>
      );
      setLoader(false);
    } catch (err) {
      if (err.response && err.response.data) {
        setFeedback(<div style={{ color: 'red' }}>Failed to reset password</div>);
        setLoader(false);
      } else {
        setFeedback(<div style={{ color: 'red' }}>Failed to reset password</div>);
        setLoader(false);
      }
    }
  };

  const handleSubmit = (e) => {
    setFeedback('');
    e.preventDefault();
    if (newPassword === confirmPassword) {
      handleResetPassword();
    } else {
      setFeedback(<div style={{ color: 'red' }}>Password mismatch</div>);
    }
  };

  return (
    <AuthPageComponent
      title={'Reset Password'}
      image={<ResetImg />}
      callToAction={"Don't have an account?"}
      link={'/register'}
      linkTitle={'Register Now'}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="******"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="*******"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button disabled={loading} className="o-btn" type="submit">
          {loading ? <Spinner /> : 'Reset'}
        </button>
        {feedBack && <p className="feedBackText">{feedBack}</p>}
      </form>
    </AuthPageComponent>
  );
};

export default ResetPassword;
