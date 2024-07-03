/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';
import { useDispatch } from 'react-redux';
import { postUserJournal } from '../../redux/Actions/journalingActions';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import { ReactComponent as InfoIcon } from '../../assets/svg/Form/Question/info.svg';

const NewJournal = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [journalActionError, setJournalActionError] = useState('');
  const { t } = useTranslation();

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
      title={t('New Journal')}
      backroute={'/resilience-activities/Journaling'}>
      <Form style={{ backgroundColor: '#E8E8E8' }}>
        <div className="journal-page">
          <div className="content">
            <div
              style={{
                fontSize: '11px',
                marginBottom: '20px',
                fontStyle: 'italic',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly'
              }}>
              <InfoIcon />
              <span>
                {t(
                  'Some people find that journaling about their experiences and perceptions offers calm and clarity. In the space above, reflect upon matters of importance to you'
                )}
              </span>
            </div>
            <div className="title">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
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
                  {loading ? <Spinner /> : t('Save')}
                </button>
              </div>
            </div>
            <div className="error-field">{t(journalActionError)}</div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default NewJournal;
