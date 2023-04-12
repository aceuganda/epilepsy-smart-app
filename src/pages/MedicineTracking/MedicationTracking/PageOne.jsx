import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import { ReactComponent as Arrow } from '../../../assets/svg/Form/Selectors/togglearrow.svg';
import MedicationTime from './MedicationTime';
import TimeSelector from './TimeSelector';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import Question from '../../../components/form/Question';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal/index.jsx';
import SingleOptionCheckbox from '../../../components/form/SingleOptionCheckbox';
import Spinner from '../../../components/Spinner/Spinner';
import {
  setMedicineName,
  postMedicineFormData,
  getMedicineData,
  setUserID
} from '../../../redux/Slices/MedicineTracking';

const medicineNames = ['Sodium Vaporate', 'Diclofenac', 'Gofen', 'Ibuprofen'];

const MedicationTrackingPageOne = () => {
  const [addingMedicine, setAddingMedicine] = useState(false);
  const [addMedicineFeedback, setAddMedicineFeedback] = useState('');
  const [timePickerModalVisibility, setTimePickerModalVisibility] = useState(false);
  const [activeTab, setActiveTab] = useState('medicine'); // medicine or reminder
  const [timerFeedbackMessage, setTimerFeedbackMessage] = useState('');
  const [timerOuterFeedbackMessage, setOuterTimerFeedbackMessage] = useState('');
  const [medicineAccodianVisibilty, setMedicineAccodianVisibilty] = useState(false);
  const [showMedicineSelector, setShowMedicineSelector] = useState(false);
  const [checkedMedicine, setCheckedMedicine] = useState('');
  const [selectedAccodianMedicine, setSelectedAccodianMedicine] = useState('');
  const [selectedHours, setSelectedHours] = useState('00');
  const [selectedMins, setSelectedMins] = useState('00');
  const [selectedZone, setSelectedZone] = useState('AM');
  const [userMedicines, setUserMedicines] = useState([]);
  const [userMedicinesFeedbackMessage, setUserMedicinesFeedbackMessage] = useState('');
  const [otherMedicine, setOtherMedicine] = useState('');
  const medicineTrackingData = useSelector((state) => state.medicineTracking);
  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).data.id
    : null;
  const [savedReminders, setSavedReminders] = useState(
    localStorage.getItem(`${userId}Reminders`)
      ? JSON.parse(localStorage.getItem(`${userId}Reminders`))
      : []
  );

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  dispatch(setUserID(userId));
  useEffect(() => {
    fetchMedicine();
  }, []);

  const fetchMedicine = async () => {
    // console.log(userId);
    const response = await dispatch(getMedicineData(userId));
    if (response.payload?.status === 'success') {
      setUserMedicines(response.payload.data.medicines);
    } else if (response.payload.request?.status === 404) {
      setUserMedicinesFeedbackMessage(response.payload.response.data.message);
    } else {
      setUserMedicinesFeedbackMessage('failed to fetct medicine');
    }
  };

  const handleMedicineSubmit = async (event) => {
    event.preventDefault();
    //call medicine post
    if (checkedMedicine !== '') {
      setAddingMedicine(true);
      try {
        const response = await dispatch(postMedicineFormData(medicineTrackingData));
        if (response.payload?.status === 'success') {
          setAddMedicineFeedback(`Medicine added.`);
          setAddingMedicine(false);
          window.location.reload();
        } else {
          setAddMedicineFeedback(
            "Failed to add medicine. Be sure you haven't already added the medicine"
          );
          setAddingMedicine(false);
        }
      } catch (error) {
        setAddMedicineFeedback('Failed to add medicine.');
      }
    }
  };

  const handleTimeSelectorModalClosure = () => {
    setTimePickerModalVisibility(false);
  };
  const handleUserMedsModalClosure = () => {
    setShowMedicineSelector(false);
  };
  const handleHours = (target) => {
    setSelectedHours(target.value);
  };
  const handleMinutes = (target) => {
    setSelectedMins(target.value);
  };
  const handleZone = (target) => {
    setSelectedZone(target.value);
  };
  const HandleSave = () => {
    // collect time data medicine
    let fullTime = selectedHours + ':' + selectedMins + ':' + selectedZone;
    let remindersArray = savedReminders;
    if (selectedAccodianMedicine) {
      let currentReminderObject = {
        time: fullTime,
        medicine: selectedAccodianMedicine,
        active: true
      };
      remindersArray.push(currentReminderObject);
      localStorage.setItem(`${userId}Reminders`, JSON.stringify(remindersArray));
      setSelectedAccodianMedicine('');
      setSavedReminders(remindersArray);
      setTimePickerModalVisibility(false);
    } else {
      // alert('Please select saved medicine for the reminder. Add a medicine if you dont have any.');
      setTimerFeedbackMessage(
        'Please select saved medicine for the reminder. Add a medicine if you dont have any.'
      );
    }
  };
  const EditReminders = (index, value) => {
    let remindersArray = [...savedReminders];
    remindersArray[index].active = value;
    localStorage.setItem(`${userId}Reminders`, JSON.stringify(remindersArray));
    setSavedReminders(remindersArray);
  };

  const DeleteReminders = (index) => {
    let remindersArray = [...savedReminders];
    remindersArray.splice(index, 1);
    localStorage.setItem(`${userId}Reminders`, JSON.stringify(remindersArray));
    setSavedReminders(remindersArray);
  };

  return (
    <MedicationComponent backroute={'/medication/'}>
      <Form>
        <div className="medicinesTabs">
          <div
            className={activeTab === 'medicine' ? 'medicineTabActive' : 'medicineTabInactive'}
            onClick={() => {
              setActiveTab('medicine');
            }}>
            Add Medicine
          </div>
          <div
            className={activeTab === 'reminder' ? 'medicineTabActive' : 'medicineTabInactive'}
            onClick={() => {
              setActiveTab('reminder');
            }}
            style={{
              paddingRight: '0.9rem'
            }}>
            Add Reminder
          </div>
        </div>
        {activeTab === 'medicine' ? (
          <form className="tabTransition">
            <Question question={'What medication are you taking'}>
              <fieldset style={{ marginTop: '10px' }}>
                <div
                  style={{
                    display: 'flex',
                    marginTop: '10px',
                    flexDirection: 'column'
                  }}>
                  <AddTime
                    onClick={() => {
                      setShowMedicineSelector(true);
                    }}
                  />
                </div>
              </fieldset>
            </Question>
            {timerOuterFeedbackMessage && (
              <div
                style={{
                  color: 'red',
                  fontSize: '13px',
                  padding: '2px',
                  textAlign: 'center'
                }}>
                {timerOuterFeedbackMessage}
              </div>
            )}
            {userMedicines.length > 0 ? (
              <div
                style={{
                  marginTop: '42px'
                }}>
                {userMedicines.map((medicine, index) => (
                  <div
                    key={index}
                    style={{
                      marginTop: '5px',
                      marginBottom: '1px',
                      marginLeft: '27px',
                      marginRight: '27px',
                      padding: '7px',
                      flexDirection: 'row',
                      borderBottom: '1px solid #ccc',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '15px'
                    }}>
                    <div className="MedicineIconWrapper">
                      <div className="MedicineIconInnerYellow"></div>
                    </div>
                    <div className="Medicine">{medicine.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  marginTop: '47px',
                  marginBottom: '1px',
                  marginLeft: '27px',
                  marginRight: '27px',
                  padding: '7px',
                  color: '#000',
                  textAlign: 'center',
                  fontSize: '14px'
                }}>
                {' '}
                {userMedicinesFeedbackMessage}
              </div>
            )}
            <Modal show={showMedicineSelector} closeModal={handleUserMedsModalClosure}>
              <div>
                <div className="ItemList">
                  {medicineNames.map((label, index) => (
                    <SingleOptionCheckbox
                      key={index}
                      label={label}
                      id="default-checkbox"
                      //since one can add one medicine at a time
                      checked={label === checkedMedicine}
                      onChange={() => {
                        dispatch(setMedicineName(label));
                        setCheckedMedicine(label);
                      }}
                    />
                  ))}
                  <SingleOptionCheckbox
                    label={'other'}
                    id="default-checkbox"
                    //since one can add one medicine at a time
                    checked={checkedMedicine === 'other'}
                    onChange={() => {
                      setCheckedMedicine('other');
                    }}
                  />
                  {checkedMedicine === 'other' && (
                    <input
                      className="other-input"
                      value={otherMedicine}
                      onChange={(e) => {
                        setOtherMedicine(e.target.value);
                        dispatch(setMedicineName(e.target.value));
                      }}
                    />
                  )}
                </div>
                <button onClick={handleMedicineSubmit} className="SaveButton">
                  {addingMedicine ? <Spinner /> : 'Save'}
                </button>
                {addMedicineFeedback && (
                  <div
                    style={{
                      marginTop: '2px',
                      marginBottom: '1px',
                      alignSelf: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontSize: '12px'
                    }}>
                    {addMedicineFeedback}
                  </div>
                )}
              </div>
            </Modal>
          </form>
        ) : (
          <form className="tabTransition">
            <div style={{ marginTop: '45px' }}>
              <div className="reminderSelection">
                <fieldset>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '10px',
                      flexDirection: 'column'
                    }}>
                    <AddTime
                      onClick={() => {
                        setOuterTimerFeedbackMessage('');
                        if (userMedicines.length > 0) {
                          setTimePickerModalVisibility(true);
                        } else {
                          setOuterTimerFeedbackMessage(
                            'Please add some medicine to your profile to access the timer'
                          );
                        }
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        marginTop: '10px',
                        gap: '7px',
                        flexDirection: 'column'
                      }}>
                      {Array.isArray(savedReminders) &&
                        savedReminders?.map((reminder, index) => (
                          <MedicationTime
                            key={index}
                            time={reminder.time}
                            index={index}
                            active={reminder.active}
                            medicine={reminder.medicine}
                            handleToggleClickCallback={EditReminders}
                            handleDeleteClickCallback={DeleteReminders}
                          />
                        ))}
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <Modal show={timePickerModalVisibility} closeModal={handleTimeSelectorModalClosure}>
              <div className="contentContainer">
                <div className="HeadSection">
                  <div
                    className="headerButton"
                    onClick={() => {
                      handleTimeSelectorModalClosure();
                    }}>
                    Cancel
                  </div>
                  <div className="heading">Add time</div>
                  <div onClick={HandleSave} className="headerButton">
                    Save
                  </div>
                </div>
                <div className="ModalTimeSelector">
                  <TimeSelector
                    onChangeMinutesCallBack={handleMinutes}
                    onChangeHoursCallBack={handleHours}
                    onChangeZoneCallBack={handleZone}
                  />
                </div>
                {timerFeedbackMessage && (
                  <div
                    style={{
                      color: 'red',
                      fontSize: '13px',
                      padding: '2px',
                      textAlign: 'center'
                    }}>
                    {timerFeedbackMessage}
                  </div>
                )}
                <div className="MedicineSelection">
                  <div className="SelectionHeadWrapper">
                    <div className="MedicineSelectionheader">Medicine</div>
                    <div
                      onClick={() => {
                        setMedicineAccodianVisibilty(!medicineAccodianVisibilty);
                        setTimerFeedbackMessage('');
                      }}
                      className={medicineAccodianVisibilty ? 'OpenArrowclass' : 'Arrowclass'}>
                      <Arrow />
                    </div>
                  </div>
                  <div className="MedicineAccordianSections">
                    <div className="timerMedicine">
                      {selectedAccodianMedicine !== ''
                        ? selectedAccodianMedicine
                        : 'select medicine'}
                    </div>
                    {medicineAccodianVisibilty === true && (
                      <div className="MedicineList">
                        {userMedicines.length > 0 &&
                          userMedicines.map((medicine, index) => (
                            <div
                              key={index}
                              style={{
                                color: '#000000',
                                fontSize: '13px',
                                padding: '2px'
                              }}
                              onClick={() => {
                                setSelectedAccodianMedicine(medicine.name);
                                setMedicineAccodianVisibilty(false);
                              }}>
                              {medicine.name}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Modal>
          </form>
        )}
      </Form>
    </MedicationComponent>
  );
};

export default MedicationTrackingPageOne;
