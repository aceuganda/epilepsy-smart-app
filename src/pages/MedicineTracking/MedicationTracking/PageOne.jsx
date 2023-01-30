// invoke alarm api
// store alarms
// get ids for alarms
// local storage of alerm Id and times
// alarm api only wakes the app up at a spacified time
// on start of the application, check if time matches any in local storage,
// if so, invoke notification api

import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import MedicationTime from './MedicationTime';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import Question from '../../../components/form/Question';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
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
  const medicineTrackingData = useSelector((state) => state.medicineTracking);
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

  const setAlarmApiTime = async () => {
    const input = '12:18';
    const [hour, minutes] = input.split(':');

    const selectedTime = new Date();
    selectedTime.setHours(hour);
    selectedTime.setMinutes(minutes);
    console.log(selectedTime);

    var data = {
      med: 'panadol',
      time: input,
      owner: 'smartApp'
    };
    var request = window.navigator.mozAlarms.add(selectedTime, 'ignoreTimezone', data);

    request.onsuccess = function () {
      console.log('The alarm has been scheduled');
    };

    request.onerror = function () {
      console.log('An error occurred: ' + this.error.name);
    };
  };

  return (
    <MedicationComponent backroute={'/medication/'}>
      <Form>
        <form>
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
          <div style={{ marginTop: '45px' }}>
            <Question question={'What time will the medicine be taken'}>
              <fieldset>
                <div
                  style={{
                    display: 'flex',
                    marginTop: '10px',
                    flexDirection: 'column'
                  }}>
                  <AddTime />
                  <MedicationTime time={'9:54'} active={true} />
                </div>
              </fieldset>
            </Question>
          </div>
          {medicines !== null ? (
            <Link to="/home">
              <button onClick={()=>{setAlarmApiTime()}} className="finish-btn" type="submit">
                Finish
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </MedicationComponent>
  );
};

export default MedicationTrackingPageOne;
