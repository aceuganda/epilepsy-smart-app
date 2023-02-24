import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Actions/userActions';
import ProfilePlaceholder from '../../assets/img/HomePage/UserProfile.png';
import { useDispatch, useSelector } from 'react-redux';
//import Error from '../../components/Error/Error';

import { useEffect } from 'react';
import AuthPageComponent from '.';
import { ReactComponent as RegisterImg } from '../../assets/svg/Auth/Register.svg';

const Register = () => {
  //const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector((state) => state.user);
  const [imageObject, setImageObject] = useState(null);
  const [hasCaregiver, sethasCaregiver] = useState('no');

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
    submittion.dob = submittion.age;
    submittion.age_of_onset = Number(submittion.age_of_onset);
    delete submittion.confirmPassword;
    delete submittion.age;

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

    // console.log(data,'hey am here sir')
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            {...register('username', { required: true })}
            placeholder="Enter username"
          />
          {errors.username && <span className="error">Username is required</span>}
        </div>
        <div className="form-select-group">
          <div>
            <label htmlFor="age">Date of birth</label>
            <input type="date" {...register('age', { required: true })} placeholder="01/01/2000" />
            {errors.age && <span className="error">required field</span>}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select {...register('gender', { required: true })}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            {errors.gender && <span className="error">required field</span>}
          </div>
          <div>
            <label htmlFor="age_of_onset">Age of onset</label>
            <input
              type="number"
              min="0"
              max="100"
              {...register('age_of_onset', { required: true })}
              placeholder="00"
            />
            {errors.ageOfOnset && <span className="error">required field</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="seizure_type">Seizure Type</label>
          <input
            type="text"
            name="seizure_type"
            {...register('seizure_type')}
            placeholder="Enter type"
          />
          {errors.seizureType && <span className="error">Seizure type is required</span>}
        </div>
        <div className="form-checkbox-group">
          <label htmlFor="caregiverOption">Do you have a caregiver?</label>
          <div>
            <span
              className={hasCaregiver === 'no' ? 'Selected' : ''}
              onClick={() => {
                sethasCaregiver('no');
              }}>
              No
            </span>
            <span
              //empty "" to prevent console error
              className={hasCaregiver === 'yes' ? 'Selected' : ''}
              onClick={() => {
                sethasCaregiver('yes');
              }}>
              Yes
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="caregiver_name">Name of caregiver</label>
          <input
            type="text"
            name="caregiver_name"
            {...register('caregiver_name', { required: hasCaregiver === 'yes' })}
            placeholder="Enter caregiver's name "
          />
          {errors.caregiverName && <span className="error">name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="caregiver_contact">Contact of caregiver</label>
          <input
            type="text"
            name="caregiver_contact"
            {...register('caregiver_contact', { required: hasCaregiver === 'yes' })}
            placeholder="Enter caregiver's contact "
          />
          {errors.caregiverContact && <span className="error">contact is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            name="institution"
            {...register('institution', { required: true })}
            placeholder="Enter institution name"
          />
          {errors.institution && <span className="error">Institution is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            placeholder="Enter password"
          />
          {errors.password && <span className="error">Password is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            {...register('confirmPassword', { required: true })}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <span className="error">Confirm password is required</span>}
        </div>
        <div className="form-group">
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
        </div>
        <button className="o-btn">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
    </AuthPageComponent>
  );
};
export default Register;
