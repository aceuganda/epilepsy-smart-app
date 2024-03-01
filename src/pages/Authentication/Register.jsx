import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Actions/userActions';
import ProfilePlaceholder from '../../assets/img/HomePage/UserProfile.png';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
//import Error from '../../components/Error/Error';

import { useEffect } from 'react';
import AuthPageComponent from '.';
import { ReactComponent as RegisterImg } from '../../assets/svg/Auth/Register.svg';
import { useTranslation } from 'react-i18next';

const Register = () => {
  //const [customError, setCustomError] = useState(null);
  const { t } = useTranslation();
  const { loading, userInfo, error, success } = useSelector((state) => state.user);
  const [imageObject, setImageObject] = useState(null);
  const [hasCaregiver, sethasCaregiver] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }

    if (success) {
      navigate('/login');
    }
  }, [navigate, userInfo, success]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const addUserProfileImage = (event) => {
    //required when no image is selected
    if (event.target.files[0] === undefined) {
      setImageObject(null);
    } else {
      setImageObject(event.target.files[0]);
    }
  };

  const submitForm = (data) => {
    var submittion = data;
    if (submittion.password !== submittion.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    submittion.email = submittion.email.toLowerCase();
    // submittion.age = Number(submittion.age);
    submittion.age_of_onset = Number(submittion.age_of_onset);
    delete submittion.confirmPassword;
    if (imageObject !== null) {
      let reader = new FileReader();
      reader.readAsDataURL(imageObject);
      reader.onload = () => {
        submittion = { ...data, profileImage: reader.result };
        //required to only dispatch onload
        dispatch(registerUser(submittion));
      };
    } else {
      submittion = { ...data, profileImage: '' };
      dispatch(registerUser(submittion));
    }
  };

  return (
    <AuthPageComponent
      title={'Register'}
      image={<RegisterImg />}
      callToAction={'Have an account?'}
      link={'/login'}
      linkTitle={'Login Now'}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="email">{t('Email')}</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            placeholder={t('Enter your email address')}
          />
          {errors.email && <span className="error">{t('Your email is required')}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="username">{t('Username')}</label>
          <input
            type="text"
            name="username"
            {...register('username', { required: true })}
            placeholder={t('Choose a username')}
          />
          {errors.username && <span className="error">{t('Username is required')}</span>}
        </div>
        <div className="form-select-group">
          <div>
            <label htmlFor="dob">{t('Date of Birth')}</label>
            <input type="date" {...register('dob', { required: true })} />
            {errors.age && <span className="error">{t('This is required field')}</span>}
          </div>
          <div>
            <label htmlFor="gender">{t('Gender')}</label>
            <select {...register('gender', { required: true })}>
              <option value="female">{t('Female')}</option>
              <option value="male">{t('Male')}</option>
              <option value="other">{t('Prefer not to say')}</option>
            </select>
            {errors.gender && <span className="error">{t('This is a required field')}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="age_of_onset">{t('Age of seizure onset')}</label>
          <input
            type="number"
            min="0"
            max="100"
            {...register('age_of_onset', { required: true })}
            placeholder="00"
          />
          {errors.ageOfOnset && <span className="error">{t('This is a required field')}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="seizure_type">{t('Seizure Type')}</label>
          <select
            {...register('seizure_type')}
            style={{ width: '230px', paddingLeft: '2px', marginLeft: '10px' }}>
            <option value="Tonic">Tonic</option>
            <option value="Atonic">Atonic</option>
            <option value="MyoClonic">MyoClonic</option>
            <option value="Clonic">Clonic</option>
          </select>
          {errors.seizureType && <span className="error">{t('Check this field')}</span>}
        </div>
        <div className="form-checkbox-group">
          <label htmlFor="caregiverOption">{t('Do you have a caregiver')}?</label>
          <div>
            <span
              //empty "" to prevent console error
              className={hasCaregiver === 'yes' ? 'Selected' : ''}
              style={{
                fontSize: '11px'
              }}
              onClick={() => {
                sethasCaregiver('yes');
              }}>
              {t('Yes')}
            </span>
            <span
              className={hasCaregiver === 'no' ? 'Selected' : ''}
              style={{
                fontSize: '11px'
              }}
              onClick={() => {
                sethasCaregiver('no');
              }}>
              {t('No')}
            </span>
          </div>
        </div>
        {hasCaregiver === 'yes' ? (
          <div>
            <div className="form-group">
              <label htmlFor="caregiver_name">{t('Name of Caregiver')}</label>
              <input
                type="text"
                name="caregiver_name"
                {...register('caregiver_name', { required: hasCaregiver === 'yes' })}
                placeholder={t("Enter caregiver's name")}
              />
              {errors.caregiverName && <span className="error">{t('This field is required')}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="caregiver_contact">{t('Contact of Caregiver')}</label>
              <input
                type="text"
                name="caregiver_contact"
                {...register('caregiver_contact', { required: hasCaregiver === 'yes' })}
                placeholder={t("Enter caregiver's contact ")}
              />
              {errors.caregiverContact && (
                <span className="error">{t('This field is required')}</span>
              )}
            </div>
          </div>
        ) : (
          <span />
        )}
        <div className="form-group">
          <label htmlFor="institution">{t('Institution')}</label>
          <input
            type="text"
            name="institution"
            {...register('institution', { required: true })}
            placeholder="Enter institution name"
          />
          {errors.institution && <span className="error">{t('Institution is required')}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            {t('Create Password')} <i>({t('8 characters minimum')})</i>
          </label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            placeholder={t('Create a password')}
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&]).{8,}$"
            title="Password should include an uppercase letter, lowercase letter, a number and special character(#?!@$^&)"
            minLength="8"
            maxLength="20"
          />
          {errors.password && <span className="error">{t('Password is required')}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">{t('Confirm Password')}</label>
          <input
            type="password"
            name="confirmPassword"
            {...register('confirmPassword', { required: true })}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <span className="error">{t('Password does not match')}</span>}
        </div>
        {/* <div className="form-group">
          <section>
            <label htmlFor="profilePicture">Profile picture (optional) </label>
            <img
              alt=""
              src={imageObject === null ? ProfilePlaceholder : URL.createObjectURL(imageObject)}
            />
          </section>
          {imageObject !== null && <div className="Imagename">{imageObject.name}</div>}
          <label className="customButton">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              name="profileImage"
              onChange={(event) => {
                addUserProfileImage(event);
              }}
            />
            Upload image
          </label>
        </div> */}
        <button disabled={loading} className="o-btn">
          {loading ? <Spinner /> : t('Register')}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </AuthPageComponent>
  );
};
export default Register;
