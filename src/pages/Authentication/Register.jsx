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
  const [imageUrl, setImageUrl] = useState("");

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
  const updateProfileUrl = (event) => {
    //required when no image is selected
    if (event.target.files[0] === undefined) {
      setImageUrl("");
    } else {
      setImageUrl(event.target.files[0]);
    }
  }


  const submitForm = (data) => {
    console.log(data);

    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
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
            <label htmlFor="age">Age</label>
            <input
              type="number"
              min="10"
              max="100"
              {...register('age', { required: true })}
              placeholder="10"
            />
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
            <label htmlFor="ageOfOnset">Age of onset</label>
            <input
              type="number"
              min="0"
              max="100"
              {...register('ageOfOnset', { required: true })}
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
          <label htmlFor="seizureType">Seizure Type</label>
          <input
            type="text"
            name="seizureType"
            {...register('seizureType', { required: true })}
            placeholder="Enter type"
          />
          {errors.seizureType && <span className="error">Seizure type is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="caregiverName">Name of caregiver</label>
          <input
            type="text"
            name="caregiverName"
            {...register('caregiverName', { required: true })}
            placeholder="Enter caregiver's name "
          />
          {errors.caregiverName && <span className="error">name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="caregiverContact">Contact of caregiver</label>
          <input
            type="text"
            name="caregiverContact"
            {...register('caregiverContact', { required: true })}
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
              src={
                imageUrl === ""
                  ? ProfilePlaceholder
                  : URL.createObjectURL(imageUrl)
              }
            />
          </section>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            {...register("profileImage")}
            name="profileImage"
            onChange={(event) => {
              updateProfileUrl(event);
            }}
          />
        </div>
        <button className="o-btn">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
    </AuthPageComponent>
  );
};
export default Register;
