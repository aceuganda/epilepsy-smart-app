/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';
import { useDispatch } from 'react-redux';
import { postUserJournal } from '../../redux/Actions/journalingActions';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const NewJournal = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [journalActionError, setJournalActionError] = useState('');

  const navigate = useNavigate();

  const handleSave = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;
    const journal = {
      title,
      notes,
      user_id
    };

    if (title && notes) {
      setLoading(true);
      const response = await dispatch(postUserJournal(journal));
      // console.log(response);
      if (response?.error) {
        setJournalActionError('Failed to delete journal');
        setLoading(false);
        return;
      }
      if (response.payload?.status === 'success') {
        //redirect
        navigate('/resilience-activities/Journaling');
        setLoading(false);
        return;
      } else {
        setJournalActionError('Failed to delete journal');
        setLoading(false);
        return;
      }
    } else {
      setJournalActionError('All Fields must not be empty');
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
                {loading ? <Spinner /> : 'Save'}
              </button>
            </div>
          </div>
          <div>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              placeholder="Tap to type something "
            />
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'red',
                fontSize: '10px'
              }}>
              {journalActionError}
            </div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default NewJournal;
