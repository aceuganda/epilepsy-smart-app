import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserJournal, deleteUserJournal } from '../../redux/Actions/journalingActions';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';

import { HiEllipsisHorizontalCircle } from 'react-icons/hi2';
import CustomPopup from './CustomPopup';
// import {withRouter} from 'react-router-dom'

const Journal2 = () => {
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
      // console.log('no');
      return;
    }
  };
  const deleteJournal = async () => {
    setDeleteLoading(true);
    const response = await dispatch(deleteUserJournal(id));
    // console.log(response);
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
      title={'Journaling'}
      backroute={'/resilience-activities/Journaling'}>
      <Form>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px'
            }}>
            <div>
              <div style={{ borderBottom: '3px solid #F42C56', width: '9rem' }}>
                {' '}
                <input
                  style={{ backgroundColor: '#E8E8E8', width: '9rem' }}
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  type="text"
                />
                {/* {children} */}
              </div>
            </div>
            <div
              onClick={showCustomPopup}
              style={{
                fontSize: '30px',
                color: '#53368E'
              }}>
              {' '}
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

          <div>
            <textarea
              style={{ fontSize: '10px' }}
              value={notesInput}
              onChange={(e) => setNotesInput(e.target.value)}
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

export default Journal2;
