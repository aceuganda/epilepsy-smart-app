import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import VerifyImg from '../../assets/img/Onboarding/verification.png';
import axios from 'axios';
import { VERIFY_USER } from '../../config/urls';
import Spinner from '../../components/Spinner/Spinner';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const VerificationPage = () => {
  useFirebaseScreenTracking('EmailVerificationPage');
  const { token } = useParams();
  const [loader, setLoader] = useState(false);
  const [feedback, setFeedback] = useState('');

  const verifyUserByToken = () => {
    setLoader(true);
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios
      .get(`${VERIFY_USER}/${token}`, config)
      .then((res) => {
        setFeedback('You have successfully verified your account, please login.');
        console.log('Returned Data:', res.data);
      })
      .catch((error) => {
        setFeedback(<div style={{ color: 'red' }}>Failed to verify account</div>);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    if (token && loader === false) {
      verifyUserByToken();
    }
  },[]);

  return (
    <div className="onboarding">
      <div className="verify-section">
        <img src={VerifyImg} alt=""  />
      </div>
      <div className="bottom-section">
        <h4>Account Verification</h4>
        {loader === true ? <Spinner /> : <span className="content">{feedback}</span>}
      </div>
      <Link to="/login">
        <button className="o-btn">Login to your account</button>
      </Link>
    </div>
  );
};

export default VerificationPage;
