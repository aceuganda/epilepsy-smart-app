import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import AuthPageComponent from '../index';
import { ReactComponent as ResetImg } from '../../../assets/svg/Auth/Reset.svg';
import { PASSWORD_RESET_INITIATIATION } from '../../../config/urls';
import axios from 'axios';
import Spinner from '../../../components/Spinner/Spinner';
import { red } from '@mui/material/colors';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const [loading, setLoading] = useState(false);

  const submitRequest = async (e) => {
    e.preventDefault();
    if (email === '') {
      return;
    }
    setLoading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.post(
        `${PASSWORD_RESET_INITIATIATION}`,
        {
          email
        },
        config
      );
      setFeedBack(
        `An email has been sent to ${email}. Please follow the instructions provided to reset your password.`
      );
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.data) {
        setFeedBack(<div style={{ color: 'red' }}>Failed to send reset password</div>);
        setLoading(false);
      } else {
        setFeedBack(<div style={{ color: 'red' }}>Failed to send reset password</div>);
        setLoading(false);
      }
    }
  };
  return (
    <AuthPageComponent
      title={'Forgot Password'}
      image={<ResetImg />}
      callToAction={'Dont have an account?'}
      link={'/register'}
      linkTitle={'Register Now'}>
      <form onSubmit={() => {}}>
        <div className="form-group">
          <label htmlFor="email">Email Address you registered with.</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Enter email address"
          />
        </div>
        <button onClick={submitRequest} className="o-btn">
          {loading ? <Spinner /> : 'Send Email'}
        </button>
        <div className='feedBackText'>{feedBack}</div>
      </form>
    </AuthPageComponent>
  );
};

export default ForgotPassword;
