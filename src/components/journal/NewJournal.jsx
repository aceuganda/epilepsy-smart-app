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
      setJournalActionError('All Fields must be filled');
    }
  };

  return (
    <ResilienceActivitiesPageComponent
      title={'New Journal'}
      backroute={'/resilience-activities/Journaling'}>
      <Form style={{ backgroundColor: '#E8E8E8' }}>
        <div className="journal-page">
          <div className="content">
            <div className="title">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Entry title"
                value={title}
              />
            </div>
            <div className="text-area">
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
                placeholder="Type something here..."
              />
              <div>
                <button onClick={handleSave} className="finish-btn">
                  {loading ? <Spinner /> : 'Save'}
                </button>
              </div>
            </div>
            <div className="error-field">{journalActionError}</div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default NewJournal;
