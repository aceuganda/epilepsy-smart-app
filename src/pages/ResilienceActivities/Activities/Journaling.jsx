import React, { useState, useEffect } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import Journal from '../../../components/journal/Journal';
import { Link } from 'react-router-dom';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import Grateful from '../../../components/journal/Grateful';
import { axiosInstance } from '../../../apis/axiosInstance';

const data = [
  {
    title: 'Journal 1',
    date: '15 November',
    color: 'red',
    journalId: 1
  },
  {
    title: 'Journal 2',
    date: '15 November',
    color: 'green',
    journalId: 2
  },
  {
    title: 'Journal 3',
    date: '15 November',
    color: 'blue',
    journalId: 3
  },
  {
    title: 'Journal 4',
    date: '15 November',
    color: 'red',
    journalId: 4
  }
];

const Journaling = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  const [grateful, setGrateful] = useState('');
  const [result, setResult] = useState([]);

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
    top: '10px',
    right: '10px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const focusedStyles = {
    height: '300px'
  };

  useEffect(() => {
    fetchNoteBooks();
  }, []);

  const fetchNoteBooks = async () => {
    const user_id = 1;
    const fetchedRes = axiosInstance
      .get(`/gratefuls/${user_id}`)
      .then((res) => {
        setResult(res.data.data.gratefuls);
        console.log(res.data.data.gratefuls, 'gettiinnnnnnnnnng');
      })
      .catch((err) => console.log(err));

    return fetchedRes;
  };

  const handleSubmit = async () => {
    const response = await axiosInstance
      .post('/gratefuls', { grateful, user_id: 1 })
      .then((res) => console.log(res.data.data.grateful))
      .catch((err) => console.log(err));
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
              {data?.map((dta) => (
                <Journal
                  id={dta.journalId}
                  key={dta.title}
                  title={dta.title}
                  date={dta.date}
                  color={dta.color}
                />
              ))}
            </div>
            <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
              {/* if(data)
              {
                <div style = {gratefulStyles}>
                  <span></span>
                  <h4>some data </h4>
                </div>
              }{' '}
              else
              {
                <> */}
              <h6 style={{ fontweight: 'bold' }}>What are you grateful for?</h6>
              {/* {result.map((result) => (
                <ul key={result.id}>
                  <li>{result.grateful}</li>
                </ul>
              ))} */}
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

              <div>
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
