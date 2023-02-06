
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material';
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import { ReactComponent as Arrow } from '../../../assets/svg/Form/Selectors/togglearrow.svg';
import MedicationTime from './MedicationTime';
import TimeSelector from './TimeSelector';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import Question from '../../../components/form/Question';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal/index.jsx'
import { setMedicineName, postMedicineFormData } from '../../../redux/Slices/MedicineTracking';

const medicineNames = ['Sodium Vaporate', 'Diclofenac', 'Gofen', 'Ibuprofen'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const MedicationTrackingPageOne = () => {
  const [medicines, setMedicines] = useState([]);
  const [addMedicineFeedback, setAddMedicineFeedback] = useState('');
  const [timePickerModalVisibility, setTimePickerModalVisibility] = useState(false);
  const [activeTab, setActiveTab] = useState('medicine');// medicine or reminder
  const [medicineAccodianVisibilty, setMedicineAccodianVisibilty] = useState(false)
  const [selectedAccodianMedicine, setSelectedAccodianMedicine] = useState("")
  const [selectedHours,setSelectedHours] = useState('00')
  const [selectedMins,setSelectedMins] = useState('00')
  const [selectedZone,setSelectedZone] = useState('AM')
  const medicineTrackingData = useSelector((state) => state.medicineTracking);
  const [savedReminders, setSavedReminders] = useState(localStorage.getItem('reminders') ? 
  JSON.parse(localStorage.getItem('reminders')):
  [])
  
  // const savedReminders = localStorage.getItem('reminders') ? 
  // JSON.parse(localStorage.getItem('reminders')):
  // []

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setMedicines(typeof value === 'string' ? value.split(',') : value);
    dispatch(setMedicineName((typeof value === 'string' ? value.split(',') : value).join(',')));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //call medicine post
    console.log(medicineTrackingData);
    if (medicines.length > 0) {
      const response = await dispatch(postMedicineFormData(medicineTrackingData));
      if (response.payload.status === 'success') {
        setAddMedicineFeedback(`Medicine added.`);
      } else {
        setAddMedicineFeedback('Failed to add medicine.');
      }
    }
  };

  const handleTimeSelectorModalClosure = ()=>{
    setTimePickerModalVisibility(false)
  }
  const handleHours= (target)=>{
    setSelectedHours(target.value)
  }
  const handleMinutes= (target)=>{
    setSelectedMins(target.value)
  }
  const handleZone= (target)=>{
    setSelectedZone(target.value)
  }
  const HandleSave = () =>{
     // collect time data medicine
     let fullTime = selectedHours+":"+selectedMins+":"+selectedZone
     let remindersArray =  savedReminders
     if(selectedAccodianMedicine){
       let currentReminderObject = {
         time: fullTime,
         medicine:selectedAccodianMedicine,
         active: true
       }
       remindersArray.push(currentReminderObject)
       localStorage.setItem("reminders", JSON.stringify(remindersArray))
       setSelectedAccodianMedicine("")
       setSavedReminders(remindersArray)
       setTimePickerModalVisibility(false)
       
     }else{
      alert('Please select medicine for the reminder')
     }

  }
  const EditReminders = (index,value) =>{
    let remindersArray =  [...savedReminders]
    remindersArray[index].active = value
    localStorage.setItem("reminders", JSON.stringify(remindersArray))
    setSavedReminders(remindersArray) 
  }

  const DeleteReminders = (index) =>{
    let remindersArray =  [...savedReminders]
    remindersArray.splice(index, 1); 
    localStorage.setItem("reminders", JSON.stringify(remindersArray))
    setSavedReminders(remindersArray) 
  }

  return (
    <MedicationComponent backroute={'/medication/'}>
      <Form>
        <div className='medicinesTabs' >
           <div className={activeTab==='medicine' ?  'medicineTabActive' : 'medicineTabInactive'} 
           onClick={()=>{setActiveTab('medicine')}}
           >Add Medicine</div>
           <div className={activeTab==='reminder' ?  'medicineTabActive' : 'medicineTabInactive'} 
           onClick={()=>{setActiveTab('reminder')}} style={{
            paddingRight:'0.9rem'
           }}>
            Add Reminder
           </div>
        </div>
         {activeTab==='medicine' ? 
         <form  >
          <Question question={'What medication are you taking'}>
            <fieldset style={{ marginTop: '10px' }}>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel>Select medicine</InputLabel>
                <Select
                  value={medicines}
                  renderValue={(selected) => selected.join(', ')}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                  input={<OutlinedInput label="Select medicine" />}
                  multiple>
                  {medicineNames.length > 0 ? (
                    medicineNames.map((medicine) => (
                      <MenuItem key={medicine} value={medicine}>
                        <Checkbox checked={medicines.indexOf(medicine) > -1} />
                        <ListItemText primary={medicine} />
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>
                      <InputLabel>No medicine listed</InputLabel>
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </fieldset>
          </Question>
          {addMedicineFeedback && (
            <div
              style={{
                marginTop: '2px',
                marginBottom: '1px',
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>
              {addMedicineFeedback}
            </div>
          )}
          <button
            style={{
              position: 'absolute',
              right: '20px',
              borderRadius: '8px',
              background: '#8C3E79',
              color: '#fff',
              boxShadow: '0.8px 2px 2px 0.8px #e4e4e4'
            }}
            type="submit"
            className="button form-button-pill text-uppercase"
            onClick={(e) => handleSubmit(e)}>
            add
          </button>
          {medicines !== null ? (
            <Link to="/home">
              <button onClick={()=>{}} className="finish-btn" type="submit">
                Finish
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </form>:
        <form className='tabTransition' >
        <div style={{ marginTop: '45px' }}>
          <div className='reminderSelection' >
            <fieldset>
              <div
                style={{
                  display: 'flex',
                  marginTop: '10px',
                  flexDirection: 'column'
                }}>
                <AddTime onClick={()=>{
                  setTimePickerModalVisibility(true)
                }} />
                <div
                style={{
                  display: 'flex',
                  marginTop: '10px',
                  gap:'7px',
                  flexDirection: 'column'
                }}>
                {(Array.isArray(savedReminders)) && savedReminders?.map((reminder,index)=>(
                  <MedicationTime key={index} 
                  time={reminder.time} 
                  index={index}
                  active={reminder.active} 
                  medicine={reminder.medicine}
                  handleToggleClickCallback={EditReminders}
                  handleDeleteClickCallback={DeleteReminders}
                  />
                ))
               }
               </div>
              </div>
            </fieldset>
          </div>
        </div>
        <Modal show={timePickerModalVisibility}
        //  closeModal={handleTimeSelectorModalClosure}
          >
          <div className='contentContainer' >
           <div className='HeadSection'>
            <div className='headerButton' onClick={()=>{handleTimeSelectorModalClosure()}} > 
            cancel</div>
            <div className='heading'>Add time</div>
            <div onClick={HandleSave}  className='headerButton'>save</div>
           </div>       
           <div className='ModalTimeSelector'>
           <TimeSelector 
           onChangeMinutesCallBack={handleMinutes} 
           onChangeHoursCallBack={handleHours}
           onChangeZoneCallBack={handleZone}
           />
           </div>
            <div className='MedicineSelection'>
            <div className='SelectionHeadWrapper'>
            <div className='MedicineSelectionheader'>Medicine</div>
             <div 
             onClick={()=>{setMedicineAccodianVisibilty(!medicineAccodianVisibilty)}}
             className={medicineAccodianVisibilty?'OpenArrowclass': 'Arrowclass'}>
              <Arrow/></div>
             </div>
             <div className='MedicineAccordianSections'>
               <div className='timerMedicine'>{selectedAccodianMedicine!==''?
               selectedAccodianMedicine:"select medicine"}
               </div>
              {medicineAccodianVisibilty === true &&
               (<div className='MedicineList'>
               {medicineNames.map((medicine,index)=>(
                <div key={index} style={{
                  color:'#000000',
                  fontSize:'13px',
                  padding:'2px',
                 }}
                 onClick={()=>{
                  setSelectedAccodianMedicine(medicine)
                  setMedicineAccodianVisibilty(false)
                }}
                 >{medicine}</div>
               ))}
              </div>)}
             </div>
            </div>
          </div>
        </Modal>
      </form>
     
        }
      </Form>
    </MedicationComponent>
  );
};

export default MedicationTrackingPageOne;
