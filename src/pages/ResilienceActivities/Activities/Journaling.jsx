/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import Journal from '../../../components/journal/Journal';
import { Link } from 'react-router-dom';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import { axiosInstance } from '../../../apis/axiosInstance';

const QUOTES_PER_PAGE = 7; // adjust as needed

const Journaling = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  const [grateful, setGrateful] = useState('');
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);

    if (tabIndex === 2) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const textAreaStyles = {
    width: '300px',
    height: '80px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid rgba(0, 0, 0, 0.19)',
    borderRadius: '8px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    outline: 'none',
    resize: 'none',
    transition: 'height 0.3s ease-out'
  };

  const buttonStyles = {
    position: 'absolute',
    borderStyle: 'none',
    backgroundColor: 'transparent',
    color: 'purple',
    fontWeight: 'bold',
    marginLeft: '240px',
    // marginTop: '-20px'
    top: '130px'
  };

  const focusedStyles = {
    height: '300px'
  };

  const fetchGratefuls = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;
    const fetchedRes = await axiosInstance
      .get(`/gratefuls/${user_id}`)
      .then((res) => {
        setResult(res.data.data.gratefuls);
        console.log(res.data.data.gratefuls, 'GETTING GRATEFULS');
      })
      .catch((err) => console.log(err));

    return fetchedRes;
  };

  const fetchNotebooks = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;

    const response = await axiosInstance
      .get(`/journals/${user_id}`)
      .then((res) => {
        setData(res.data.data.journals);
        console.log(data, 'RESPONSE FROM FETCHING NOTEBOOKS');
      })
      .catch((err) => console.log(err, 'Notebooks'));

    return response;
  };


  useEffect(() => {
    fetchGratefuls();
    fetchNotebooks();
  }, []);

  const handleSubmit = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const user_id = userData.data.id;
    if (!grateful) {
      alert('All fields are required');
    } else {
      const response = await axiosInstance
        .post('/gratefuls', { grateful, user_id })
        .then((res) => {
          console.log(res.data.data.grateful);
          setGrateful('');
        })
        .catch((err) => console.log(err));
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const numPages = Math.ceil(data.length / QUOTES_PER_PAGE);
  const startIndex = (currentPage - 1) * QUOTES_PER_PAGE;
  const endIndex = startIndex + QUOTES_PER_PAGE;

  const notesToDisplay = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  console.log(data, '>>>>>>>>>>>>>>>>>>>>>>');


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
          <div className="tab-content">
            <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
              {notesToDisplay?.map((dta) => (
                <Journal
                  id={dta.id}
                  key={dta.id}
                  title={dta.title}
                  date={dta.timestamp}
                  color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                />
              ))}

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

              <div>
                {result?.map((result) => (
                  <ul key={result.id}>
                    <li>{result?.grateful}</li>
                  </ul>
                ))}
              </div>

              <div>
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
                    placeholder="Example;I am grateful to have a roof over my head"
                  />
                </div>
              </div>

              <div className="Button-grateful">
                <button onClick={handleSubmit} style={buttonStyles}>
                  Save
                </button>
              </div>

              {/* </> */}
              {/* } */}
            </div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Journaling;
