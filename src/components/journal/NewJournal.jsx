/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';
import { axiosInstance } from '../../apis/axiosInstance';
import { useNavigate } from 'react-router-dom';

const NewJournal = ({ placeholder }) => {
  // const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const navigate = useNavigate();

  const handleSave = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;

    if (title && notes) {
      await axiosInstance
        .post('https://epilepsy-smartapp-api.onrender.com/journals', {
          title,
          notes,
          user_id
        })
        .then((res) => {
          console.log(res.data.data.journal, 'SUCCESS');
          navigate('/resilience-activities/Journaling');
        })
        .catch((err) => console.log(err, 'ERROR WHILE SAVING  JOURNAL '));
    } else {
      alert('All Fields must not be empty');
    }
  };
  return (
    <ResilienceActivitiesPageComponent
      title={'New Journal'}
      backroute={'/resilience-activities/Journaling'}>
      <Form style={{ backgroundColor: '#E8E8E8' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {/* input */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '120px'
              }}>
              <div style={{ borderBottom: '3px solid #F42C56' }}>
                {' '}
                <input
                  style={{ backgroundColor: '#E8E8E8' }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type here"
                  type="text"
                />
                {/* {children} */}
              </div>

              <div style={{ marginTop: '7px', fontSize: '13px' }}>
                <span>Today</span>
              </div>
            </div>

            <div>
              <button
                onClick={handleSave}
                style={{
                  borderStyle: 'none',
                  backgroundColor: '#E8E8E8',
                  color: 'purple',
                  fontWeight: 'bold'
                }}>
                Save
              </button>
            </div>
          </div>
          <div>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              placeholder="Tap to type something "
            />
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default NewJournal;
