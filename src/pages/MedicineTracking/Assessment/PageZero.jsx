import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';
import { getMedicineData } from '../../../redux/Slices/MedicineTracking';
import { useDispatch } from 'react-redux';
import { setMedicationName, setMedicineId } from '../../../redux/Slices/MedicationTracking';
import Spinner from '../../../components/Spinner/Spinner';

const MedicationAssessmentPageZero = () => {
  const [selected_medicine, setSelectedMedicine] = useState(null);
  const [medicineList, setMedicineList] = useState([]);
  const [userMedicinesFeedbackMessage, setUserMedicinesFeedbackMessage] = useState('');

  const dispatch = useDispatch();

  const selectedButtonStyle = (selected) => {
    return selected ? 'button selectedLongPill' : 'button form-button-lg';
  };
  useEffect(() => {
    fetchMedicine();
  }, []);

  const fetchMedicine = async () => {
    const response = await dispatch(getMedicineData());
    if (response.payload?.status === 'success') {
      setMedicineList(response.payload.data.medicines);
    } else if (response.payload.request?.status === 404) {
      setUserMedicinesFeedbackMessage(response.payload.response.data.message);
    } else {
      setUserMedicinesFeedbackMessage('failed to fetct medicine');
    }
  };
  return (
    <MedicationComponent backroute={'/medication/'}>
      <Form>
        <form>
          <Question question={'Select Medicine'}>
            <fieldset className="mt-3 mb-4">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '7px'
                }}>
                {medicineList.length > 0 ? (
                  medicineList.map((medicine, index) => (
                    <button
                      key={index}
                      type="button"
                      className={selectedButtonStyle(selected_medicine === medicine.id)}
                      value={medicine.id}
                      onClick={(e) => {
                        setSelectedMedicine(e.target.value);
                        dispatch(setMedicationName(medicine.name));
                        dispatch(setMedicineId(medicine.id));
                      }}>
                      {medicine.name}
                    </button>
                  ))
                ) : userMedicinesFeedbackMessage === '' && medicineList.length === 0 ? (
                  <div>
                    <Spinner />
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>
                    {userMedicinesFeedbackMessage}
                  </div>
                )}
              </div>
            </fieldset>
          </Question>

          {selected_medicine !== null ? (
            <Pagination
              page_link={'/medication/assessment/1'}
              total_number={3}
              page_number={1}
              button={true}
            />
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </MedicationComponent>
  );
};

export default MedicationAssessmentPageZero;
