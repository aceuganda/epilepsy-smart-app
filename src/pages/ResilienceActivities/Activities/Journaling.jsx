import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import Journal from '../../../components/Journal/Journal';
import { Link } from 'react-router-dom';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';
import Grateful from '../../../components/Journal/Grateful';

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

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const textAreaStyles = {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    resize: 'none',
    transition: 'height 0.3s ease-out'
  };

  const textStyles = {
    fontSize: '16px',
    color: 'gray'
  };

  const focusedStyles = {
    height: '350px'
  };

  const gratefulStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center'
  };

  const spanStyles = {
    //define border radius
    //give it rounded full
    //dynamic color prop
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
              <AddTime />
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
              <textarea
                style={textAreaStyles}
                onFocus={(e) => {
                  e.target.style.width = focusedStyles.width;
                }}
                onBlur={(e) => {
                  e.target.style.width = textAreaStyles.width;
                }}
                placeholder="Tap to type something"
              />
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
