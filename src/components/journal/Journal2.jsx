import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserJournal, deleteUserJournal } from '../../redux/Actions/journalingActions';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';
import { HiEllipsisHorizontalCircle } from 'react-icons/hi2';
import CustomPopup from './CustomPopup';
import { useTranslation } from 'react-i18next';

const Journal2 = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { title, notes, id } = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [journalActionError, setJournalActionError] = useState('');

  const [notesInput, setNotesInput] = useState(notes);
  const [titleInput, setTitleInput] = useState(title);

  const showCustomPopup = () => {
    setShowPopup(!showPopup);
  };
  const editJournal = async () => {
    if (notesInput === '' || titleInput === '') {
      return;
    }
    if (notes !== notesInput || title !== titleInput) {
      setUpdateLoading(true);
      const response = await dispatch(
        updateUserJournal({ title: titleInput, notes: notesInput, id })
      );
      if (response?.error) {
        setJournalActionError('Failed to update journal');
        setUpdateLoading(false);
        return;
      }
      if (response.payload?.status === 'success') {
        //redirect
        setUpdateLoading(false);
        navigate('/resilience-activities/Journaling');
        return;
      } else {
        setJournalActionError('Failed to update journal');
        setUpdateLoading(false);
        return;
      }
    } else {
      return;
    }
  };
  const deleteJournal = async () => {
    setDeleteLoading(true);
    const response = await dispatch(deleteUserJournal(id));
    if (response?.error) {
      setJournalActionError('Failed to delete journal');
      setDeleteLoading(false);
      return;
    }
    if (response.payload?.status === 'success') {
      //redirect
      navigate('/resilience-activities/Journaling');
      setDeleteLoading(false);
      return;
    } else {
      setJournalActionError('Failed to delete journal');
      setDeleteLoading(false);
      return;
    }
  };

  return (
    <ResilienceActivitiesPageComponent
      title={t('Journaling')}
      backroute={'/resilience-activities/Journaling'}>
      <Form>
        <div className="journal-entry">
          <div className="header">
            <div className="title">
              <input
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                type="text"
              />
            </div>
            <div
              onClick={showCustomPopup}
              style={{
                fontSize: '30px',
                color: '#53368E'
              }}>
              <HiEllipsisHorizontalCircle />
            </div>
          </div>
          {showPopup && (
            <CustomPopup
              onDeleteClick={deleteJournal}
              deleteLoading={deleteLoading}
              onUpdateClick={editJournal}
              updateLoading={updateLoading}
            />
          )}
          <div className="entry">
            <textarea value={notesInput} onChange={(e) => setNotesInput(e.target.value)} />
            <div className="error-field">{t(journalActionError)}</div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Journal2;
