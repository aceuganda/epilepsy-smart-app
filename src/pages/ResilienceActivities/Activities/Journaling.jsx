/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import Journal from '../../../components/journal/Journal';
import { Link } from 'react-router-dom';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import {
  getAllUserGratefulls,
  getAllUserJournals,
  postUserGratefuls
} from '../../../redux/Actions/journalingActions';
import { useDispatch } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner.js';

const QUOTES_PER_PAGE = 7; // adjust as needed

const Journaling = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  const [grateful, setGrateful] = useState('');
  const [gratefulsList, setGratefulsList] = useState([]);
  const [fetchGrateFulError, setFetchGrateFulError] = useState('');
  const [fetchingGratefuls, setFetchingGratefuls] = useState(false);
  const [savingGrateful, setSavingGrateful] = useState(false);
  const [gratefulError, setgratefulError] = useState('');
  const [journalsList, setJournalsList] = useState([]);
  const [fetchJournalError, setFetchJournalError] = useState('');
  const [fetchingJournals, setFetchingJournals] = useState(false);
  const dispatch = useDispatch();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 2) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // This is a very problematic way to style components as it is not reusable or scalable. Use StyleSheets cc: Brenda and Khalifan
  const textAreaStyles = {
    width: '300px',
    height: '80px',
    padding: '10px',
    fontSize: '16px',
    marginTop: '7px',
    border: '1px solid rgba(0, 0, 0, 0.19)',
    borderRadius: '8px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    outline: 'none',
    resize: 'none',
    transition: 'height 0.3s ease-out'
  };

  const buttonStyles = {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    color: 'purple',
    fontWeight: 'bold',
    marginLeft: '240px'
  };

  const focusedStyles = {
    height: '300px'
  };

  const fetchGratefuls = async () => {
    setFetchingGratefuls(true);
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;
    const response = await dispatch(getAllUserGratefulls(user_id));
    if (response.error) {
      setFetchGrateFulError(response.payload);
      setFetchingGratefuls(false);
      return;
    }
    if (response.payload?.status === 'success') {
      setGratefulsList(response.payload.data.gratefuls);
      setFetchingGratefuls(false);
      return;
    } else {
      setFetchGrateFulError('Failed to fetch gratefuls');
      setFetchingGratefuls(false);
      return;
    }
  };

  const fetchNotebooks = async () => {
    setFetchingJournals(true);
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;
    const response = await dispatch(getAllUserJournals(user_id));
    if (response?.error) {
      setFetchJournalError(response.payload);
      setFetchingJournals(false);
      return;
    }
    if (response.payload?.status === 'success') {
      setJournalsList(response.payload.data.journals);
      setFetchingJournals(false);
      return;
    } else {
      setFetchJournalError('Failed to fetch journals');
      setFetchingJournals(false);
      return;
    }
  };

  useEffect(() => {
    fetchGratefuls();
    fetchNotebooks();
  }, []);

  const handleSubmit = async () => {
    setSavingGrateful(true);
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;
    if (!grateful) {
      //may not be reachable since save can't appear if '!gratefull'
      return;
    } else {
      const response = await dispatch(
        postUserGratefuls({
          grateful,
          user_id
        })
      );
      if (response?.error) {
        setgratefulError('Failed to add note');
        setSavingGrateful(false);
        return;
      }
      if (response.payload?.status === 'success') {
        setSavingGrateful(false);
        setgratefulError('');
        fetchGratefuls();
        return;
      } else {
        setgratefulError('Failed to add note');
        setSavingGrateful(false);
        return;
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const numPages = Math.ceil(journalsList?.length / QUOTES_PER_PAGE);
  const startIndex = (currentPage - 1) * QUOTES_PER_PAGE;
  const endIndex = startIndex + QUOTES_PER_PAGE;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ResilienceActivitiesPageComponent title={'Journaling'} backroute={'/resilience-activities'}>
      <Form>
        <div className="tab-component">
          <div className="tab-header">
            <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
              Notebooks
            </button>
            <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
              Gratefuls
            </button>
          </div>
          {activeTab === 1 && (
            <Link to="/new-journal">
              <div
                style={{
                  display: 'flex',
                  marginTop: '10px',
                  flexDirection: 'column'
                }}>
                {show ? '' : <AddTime />}
              </div>
            </Link>
          )}
          <div className="tab-content">
            <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
              {fetchingJournals && (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Spinner />
                </div>
              )}
              {journalsList?.length === 0 && fetchJournalError ? (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'red',
                    fontSize: '10px'
                  }}>
                  {fetchJournalError}
                </div>
              ) : (
                journalsList
                  ?.slice(startIndex, endIndex)
                  ?.map((dta) => (
                    <Journal
                      id={dta.id}
                      key={dta.id}
                      title={dta.title}
                      date={dta.timestamp}
                      notes={dta.notes}
                      color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                    />
                  ))
              )}

              {numPages > 1 && (
                <div style={{ marginTop: '1rem', display: 'flex' }}>
                  {Array.from({ length: numPages }).map((_, index) => (
                    <button
                      key={index}
                      style={{
                        margin: '0.5rem',
                        padding: '0.5rem',
                        backgroundColor: index + 1 === currentPage ? '#553791' : 'white',
                        color: index + 1 === currentPage ? 'white' : 'black',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer'
                      }}
                      onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
              <h6 style={{ font: 'bold' }}>What are you grateful for?</h6>
              {fetchingGratefuls && (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Spinner />
                </div>
              )}
              {gratefulsList?.length === 0 && fetchGrateFulError ? (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'red',
                    fontSize: '10px'
                  }}>
                  {fetchGrateFulError}
                </div>
              ) : (
                <div>
                  {gratefulsList?.map((result) => (
                    <div key={result.id}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: '15px',
                          color: '#000'
                        }}>
                        {' '}
                        <div
                          style={{
                            display: 'flex',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            alignItems: 'center',
                            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                          }}></div>
                        {result?.grateful}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '7px'
                }}>
                {grateful && (
                  <button onClick={handleSubmit} style={buttonStyles}>
                    {savingGrateful ? <Spinner /> : 'Save'}
                  </button>
                )}
                <div>
                  <textarea
                    style={textAreaStyles}
                    value={grateful}
                    onChange={(e) => setGrateful(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.height = focusedStyles.height;
                    }}
                    onBlur={(e) => {
                      e.target.style.height = textAreaStyles.height;
                    }}
                    placeholder="Example: I am grateful to have a home to live in"
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
                    {gratefulError}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Journaling;
