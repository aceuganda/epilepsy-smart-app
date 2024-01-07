import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';
import Spinner from '../../components/Spinner/Spinner';
import { editUserData, getSingleUserDetails, logout } from '../../redux/Slices/UsersSlice';
import Modal from '../../components/modal';

const UserDetailsEdit = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo.data.username);
  const [userEmail, setUserEmail] = useState(userInfo.data.email);
  const [hasCaregiver, sethasCaregiver] = useState('no');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [institute, setInstitute] = useState('');
  const [caregiver, setCaregiver] = useState('');
  const [caregiverContact, setCaregiverContact] = useState('');
  const [onsetAge, setOnsetAge] = useState(1);
  const [seizureType, setSeizureType] = useState('');
  const [errors, setErrors] = useState('');
  const [serverDetails, setServerDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [updateWarning, setUpdateWarning] = useState(false);
  const dispatch = useDispatch();

  const getUserDetails = useMemo(async () => {
    const response = await dispatch(getSingleUserDetails());
    let result;
    if (response?.payload?.status === 200) {
      result = response.payload.data.data.user;
    } else {
      result = null;
    }
    // console.log(result)
    return result;
  }, []);

  useEffect(async () => {
    const response = await getUserDetails;
    // console.log(response)
    //set user details
    if (response) {
      setServerDetails({ ...serverDetails, response });
      setDob(response.dob);
      setCaregiver(response.caregiver_name);
      setGender(response.gender);
      setOnsetAge(response.age_of_onset);
      setInstitute(response.institution);
      setSeizureType(response.seizure_type);
      setCaregiverContact(response.caregiver_contact);
      if (response.caregiver_name && response.caregiver_contact) {
        sethasCaregiver('yes');
      }
    }
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let updateObject = {};
    if (userEmail !== userInfo.data.email) updateObject = { ...updateObject, email: userEmail };
    if (userName !== userInfo.data.username) updateObject = { ...updateObject, username: userName };
    if (dob !== serverDetails.dob) updateObject = { ...updateObject, dob: dob };
    if (gender !== serverDetails.gender) updateObject = { ...updateObject, gender: gender };
    if (caregiver !== serverDetails.caregiver_name && hasCaregiver === 'yes')
      updateObject = { ...updateObject, caregiver_name: caregiver };
    if (caregiverContact !== serverDetails.caregiver_contact && hasCaregiver === 'yes')
      updateObject = { ...updateObject, caregiver_contact: caregiverContact };
    if (hasCaregiver === 'no')
      updateObject = { ...updateObject, caregiver_contact: '', caregiver_name: '' };
    if (institute !== serverDetails.institution)
      updateObject = { ...updateObject, institution: institute };
    if (onsetAge !== serverDetails.age_of_onset)
      updateObject = { ...updateObject, age_of_onset: onsetAge };
    if (seizureType !== serverDetails.seizure_type)
      updateObject = { ...updateObject, seizure_type: seizureType };

    //console.log(updateObject);
    const response = await dispatch(editUserData(updateObject));
    // console.log(response);
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
    if (
      userName === '' ||
      userEmail === '' ||
      onsetAge === '' ||
      institute === '' ||
      !dob ||
      gender === '' ||
      seizureType === ''
    ) {
      setErrors('Empty field(s) detected');
      return;
    }
    if (hasCaregiver === 'yes' && (caregiver === '' || caregiverContact === '')) {
      setErrors('Empty field(s) detected');
      return;
    }

    if (
      userEmail === userInfo.data.email &&
      userName === userInfo.data.username &&
      dob === serverDetails.dob &&
      gender === serverDetails.gender &&
      caregiver === serverDetails.caregiver_name &&
      caregiverContact === serverDetails.caregiver_contact &&
      institute === serverDetails.institution &&
      onsetAge === serverDetails.age_of_onset &&
      seizureType === serverDetails.seizure_type
    ) {
      setErrors('No changes detected');
      return;
    } else {
      setUpdateWarning(true);
    }
  };

  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'}>
        <div className="Auth Profile SettingsContainer">
          <form className="auth-body">
            <div className="Avater">
              <Avatar name={userInfo.data.username} alt={''} />
            </div>
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
            {Object.keys(serverDetails).length > 0 ? (
              <>
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
                      //empty "" to prevent console error
                      className={hasCaregiver === 'yes' ? 'Selected' : ''}
                      onClick={() => {
                        sethasCaregiver('yes');
                      }}>
                      Yes
                    </span>
                    <span
                      className={hasCaregiver === 'no' ? 'Selected' : ''}
                      onClick={() => {
                        sethasCaregiver('no');
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

                {errors && <span className="error">{errors}</span>}

                <button
                  type="submit"
                  disabled={loading}
                  className="o-btn"
                  onClick={openWarningForm}
                  style={{ bottom: '10px' }}>
                  Save
                </button>
              </>
            ) : (
              <div>Loading user data...</div>
            )}

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
