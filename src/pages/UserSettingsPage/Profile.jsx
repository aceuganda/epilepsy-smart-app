import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSettingsPageComponent from '.';
import Avatar from '../HomePage/Avatar';
import Spinner from '../../components/Spinner/Spinner';
import { editUserData, getSingleUserDetails, logout } from '../../redux/Slices/UsersSlice';
import Modal from '../../components/modal';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const UserDetailsEdit = () => {
  useFirebaseScreenTracking('ProfilePage');
  const { t } = useTranslation();
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


  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await dispatch(getSingleUserDetails());
      if (response?.payload?.status === 200) {
        const userDetails = response.payload.data.data.user;
        setServerDetails(userDetails);
        setDob(userDetails.dob);
        setCaregiver(userDetails.caregiver_name);
        setGender(userDetails.gender);
        setOnsetAge(userDetails.age_of_onset);
        setInstitute(userDetails.institution);
        setSeizureType(userDetails.seizure_type);
        if (userDetails.caregiver_name && userDetails.caregiver_contact) {
          sethasCaregiver('yes');
        }
      }
    };
    fetchUserDetails();
  }, [dispatch]);


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
      setErrors(t('Something went wrong, please try again'));
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
              <label htmlFor="username">{t('Name')}</label>
              <input
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">{t('Email')}</label>
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
                    <label htmlFor="dob">{t('Date of Birth')}</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                    />
                    {!dob && <span className="error">{t('This is required field')}</span>}
                  </div>
                  <div>
                    <label htmlFor="gender">{t('Gender')}</label>
                    <select
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}>
                      <option value="female">{t('Female')}</option>
                      <option value="male">{t('Male')}</option>
                      <option value="other">{t('Prefer not to say')}</option>
                    </select>
                    {gender === '' && (
                      <span className="error">{t('This is a required field<')}</span>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="age_of_onset">{t('Age of seizure onset')}</label>
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
                  {onsetAge === '' && (
                    <span className="error">{t('This is a required field')}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="seizure_type">{t('Seizure Type')}</label>
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
                  <label htmlFor="caregiverOption">{t('Do you have a caregiver')}?</label>
                  <div>
                    <span
                      //empty "" to prevent console error
                      className={hasCaregiver === 'yes' ? 'Selected' : ''}
                      onClick={() => {
                        sethasCaregiver('yes');
                      }}>
                      {t('Yes')}
                    </span>
                    <span
                      className={hasCaregiver === 'no' ? 'Selected' : ''}
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
                        value={caregiver}
                        onChange={(e) => {
                          setCaregiver(e.target.value);
                        }}
                        placeholder={t("Enter caregiver's name")}
                      />
                      {caregiver === '' && hasCaregiver === 'yes' && (
                        <span className="error">{t('This field is required')}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="caregiver_contact">{t('Contact of Caregiver')}</label>
                      <input
                        type="text"
                        name="caregiver_contact"
                        value={caregiverContact}
                        onChange={(e) => {
                          setCaregiverContact(e.target.value);
                        }}
                        placeholder={t("Enter caregiver's contact")}
                      />
                      {caregiverContact === '' && hasCaregiver === 'yes' && (
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
                    value={institute}
                    onChange={(e) => {
                      setInstitute(e.target.value);
                    }}
                    placeholder="Enter institution name"
                  />
                  {institute === '' && (
                    <span className="error">{t('Institution is required')}</span>
                  )}
                </div>

                {errors && <span className="error">{errors}</span>}

                <button
                  type="submit"
                  disabled={loading}
                  className="o-btn"
                  onClick={openWarningForm}
                  style={{ bottom: '10px' }}>
                  {t('Save')}
                </button>
              </>
            ) : (
              <div>{t('Loading user data')}...</div>
            )}

            {updateWarning && (
              <Modal show={updateWarning} closeModal={() => setUpdateWarning(false)}>
                <div>
                  <h3>{t('Save updates')}</h3>
                  <div>{t('Updating you information will log you out automatically')}</div>
                  <button onClick={submitData}>{loading ? <Spinner /> : t('Save & logout')}</button>
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
