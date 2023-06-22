import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';
import Spinner from '../../components/Spinner/Spinner';
import { editUserData, getSingleUserDetails } from '../../redux/Slices/UsersSlice';
import Modal from '../../components/modal';

const UserDetailsEdit = () => {
  const setUserInfo = useSelector((state) => state.user.userDetails);
  const [userDetails, setUserDetails] = useState(setUserInfo.user || {});

  const [userName, setUserName] = useState(userDetails.username);
  const [userEmail, setUserEmail] = useState(userDetails.email);
  const [hasCaregiver, setHasCaregiver] = useState(
    userDetails.caregiver_name === null ? 'no' : 'yes'
  );
  const [dob, setDob] = useState(userDetails.dob);
  const [gender, setGender] = useState(userDetails.gender);
  const [institute, setInstitute] = useState(userDetails.institution);
  const [caregiver, setCaregiver] = useState(userDetails.caregiver_name);
  const [caregiverContact, setCaregiverContact] = useState(userDetails.caregiver_contact);
  const [onsetAge, setOnsetAge] = useState(userDetails.age_of_onset);
  const [seizureType, setSeizureType] = useState(userDetails.seizure_type);

  const [errors, setErrors] = useState('');
  const [serverDetails, setServerDetails] = useState({});
  const loading = useSelector((state) => state.user.loading);
  const [updateWarning, setUpdateWarning] = useState(false);

  const dispatch = useDispatch();
  // console.log(setUserInfo);

  useEffect(() => {
    if (Object.keys(userDetails).length === 0) {
      dispatch(getSingleUserDetails());
      setUserDetails(setUserInfo.data.data.user);
    }
  }, [userDetails]);

  const submitData = async (e) => {
    e.preventDefault();
    // let updateObject = {};
    // if (userEmail !== userInfo.data.email) updateObject = { ...updateObject, email: userEmail };
    // if (userName !== userInfo.data.username) updateObject = { ...updateObject, username: userName };
    // if (dob !== serverDetails.dob) updateObject = { ...updateObject, dob: dob };
    // if (gender !== serverDetails.gender) updateObject = { ...updateObject, gender: gender };
    // if (caregiver !== serverDetails.caregiver_name && hasCaregiver === 'yes')
    //   updateObject = { ...updateObject, caregiver_name: caregiver };
    // if (caregiverContact !== serverDetails.caregiver_contact && hasCaregiver === 'yes')
    //   updateObject = { ...updateObject, caregiver_contact: caregiverContact };
    // if (hasCaregiver === 'no')
    //   updateObject = { ...updateObject, caregiver_contact: '', caregiver_name: '' };
    // if (institute !== serverDetails.institution)
    //   updateObject = { ...updateObject, institution: institute };
    // if (onsetAge !== serverDetails.age_of_onset)
    //   updateObject = { ...updateObject, age_of_onset: onsetAge };
    // if (seizureType !== serverDetails.seizure_type)
    //   updateObject = { ...updateObject, seizure_type: seizureType };

    //console.log(updateObject);
    // const response = await dispatch(editUserData(updateObject));
    // console.log(response);
    // if (response?.payload.status === 200) {
    //   dispatch(logout());
    // } else {
    //   setErrors('Something went wrong, please try again');
    //   setUpdateWarning(false);
    // }
  };

  const openWarningForm = async (e) => {
    // e.preventDefault();
    // if (
    //   userName === '' ||
    //   userEmail === '' ||
    //   onsetAge === '' ||
    //   institute === '' ||
    //   !dob ||
    //   gender === '' ||
    //   seizureType === ''
    // ) {
    //   setErrors('Empty field(s) detected');
    //   return;
    // }
    // if (hasCaregiver === 'yes' && (caregiver === '' || caregiverContact === '')) {
    //   setErrors('Empty field(s) detected');
    //   return;
    // }
    // if (
    //   userEmail === userInfo.data.email &&
    //   userName === userInfo.data.username &&
    //   dob === serverDetails.dob &&
    //   gender === serverDetails.gender &&
    //   caregiver === serverDetails.caregiver_name &&
    //   caregiverContact === serverDetails.caregiver_contact &&
    //   institute === serverDetails.institution &&
    //   onsetAge === serverDetails.age_of_onset &&
    //   seizureType === serverDetails.seizure_type
    // ) {
    //   setErrors('No changes detected');
    //   return;
    // } else {
    //   setUpdateWarning(true);
    // }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      username: userName,
      email: userEmail.toLowerCase(),
      dob,
      age_of_onset: Number(onsetAge),
      gender,
      institution: institute,
      seizure_type: seizureType,
      caregiver_name: caregiver,
      caregiver_contact: caregiverContact
    };
    console.log('data:', data);
    const response = await dispatch(editUserData(data));

    if (response?.payload?.status !== 200) {
      setErrors(response);
    }
    console.log(errors);
  };

  return (
    <div>
      {Object.keys(userDetails).length > 0 ? (
        <UserSettingsPageComponent backroute={'/account'}>
          <div className="Auth Profile SettingsContainer">
            <form className="auth-body" onSubmit={handleSubmit}>
              <div className="Avater">
                <Avatar name={userName} alt={''} />
              </div>
              {loading && <Spinner />}
              {errors && <span className="error">{errors}</span>}
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
              <div className="form-select-group">
                <div>
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                  {!dob && <span className="error">This is required field</span>}
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Prefer not to say</option>
                  </select>
                  {gender === '' && <span className="error">This is a required field</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="age_of_onset">Age of seizure onset</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={onsetAge}
                  onChange={(e) => {
                    setOnsetAge(e.target.value);
                  }}
                  placeholder="00"
                />
                {onsetAge === '' && <span className="error">This is a required field</span>}
              </div>
              <div className="form-group">
                <label htmlFor="seizure_type">Seizure Type</label>
                <select
                  value={seizureType}
                  onChange={(e) => {
                    setSeizureType(e.target.value);
                  }}
                  style={{ width: '230px', paddingLeft: '2px', marginLeft: '10px' }}>
                  <option value="Tonic">Tonic</option>
                  <option value="Atonic">Atonic</option>
                  <option value="MyoClonic">MyoClonic</option>
                  <option value="Clonic">Clonic</option>
                </select>
              </div>
              <div className="form-checkbox-group">
                <label htmlFor="caregiverOption">Do you have a caregiver?</label>
                <div>
                  <span
                    className={hasCaregiver === 'yes' ? 'Selected' : ''}
                    onClick={() => {
                      setHasCaregiver('yes');
                    }}>
                    Yes
                  </span>
                  <span
                    className={hasCaregiver === 'no' ? 'Selected' : ''}
                    onClick={() => {
                      setHasCaregiver('no');
                    }}>
                    No
                  </span>
                </div>
              </div>
              {hasCaregiver === 'yes' ? (
                <div>
                  <div className="form-group">
                    <label htmlFor="caregiver_name">Name of Caregiver</label>
                    <input
                      type="text"
                      name="caregiver_name"
                      value={caregiver}
                      onChange={(e) => {
                        setCaregiver(e.target.value);
                      }}
                      placeholder="Enter caregiver's name "
                    />
                    {caregiver === '' && hasCaregiver === 'yes' && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="caregiver_contact">Contact of Caregiver</label>
                    <input
                      type="text"
                      name="caregiver_contact"
                      value={caregiverContact}
                      onChange={(e) => {
                        setCaregiverContact(e.target.value);
                      }}
                      placeholder="Enter caregiver's contact "
                    />
                    {caregiverContact === '' && hasCaregiver === 'yes' && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                </div>
              ) : (
                <span />
              )}
              <div className="form-group">
                <label htmlFor="institution">Institution</label>
                <input
                  type="text"
                  name="institution"
                  value={institute}
                  onChange={(e) => {
                    setInstitute(e.target.value);
                  }}
                  placeholder="Enter institution name"
                />
                {institute === '' && <span className="error">Institution is required</span>}
              </div>

              <button type="submit" disabled={loading} className="o-btn" style={{ bottom: '10px' }}>
                Click to update
              </button>

              {/* {updateWarning && (
              <Modal show={updateWarning} closeModal={() => setUpdateWarning(false)}>
                <div>
                  <h3>Save updates</h3>
                  <div>Updating you information will log you out automatically</div>
                  <button onClick={submitData}>{loading ? <Spinner /> : 'Save & logout'}</button>
                </div>
              </Modal>
            )} */}
            </form>
          </div>
        </UserSettingsPageComponent>
      ) : (
        <div>
          <UserSettingsPageComponent>
            <form>
              <span>Error loading details. Please try again</span>
            </form>
          </UserSettingsPageComponent>
        </div>
      )}
    </div>
  );
};

export default UserDetailsEdit;
