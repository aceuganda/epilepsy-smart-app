import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import { FaPlusCircle } from 'react-icons/fa';
import Journal from '../../../components/Journal/Journal';
import { Link } from 'react-router-dom';
import { ReactComponent as AddTime } from '../../../assets/svg/Medication/addtime.svg';

const data = [
  {
    title: 'Journal 1',
    date: '15 November',
    color: 'red'
  },
  {
    title: 'Journal 2',
    date: '15 November',
    color: 'green'
  },
  {
    title: 'Journal 3',
    date: '15 November',
    color: 'blue'
  },
  {
    title: 'Journal 4',
    date: '15 November',
    color: 'red'
  }
];

const Journaling = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <ResilienceActivitiesPageComponent>
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
                <Journal key={dta.title} title={dta.title} date={dta.date} color={dta.color} />
              ))}
            </div>
            <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
              <p>Content for tab 2 goes here</p>
            </div>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Journaling;
