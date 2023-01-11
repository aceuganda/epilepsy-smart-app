import React, { useState } from 'react';
import Form from '../../components/form/Form';
import TopBar from '../../components/form/TopBar';
import { Chart } from 'react-google-charts';
import VerdictComponent from './Verdict';

const ResilienceTallies = () => {
  const [selectedTab, setSelectedTab] = useState('Mood');
  const onClickTabItem = (tab) => setSelectedTab(tab);
  const [moodVerdict, setMoodVerdict] = useState(true);
  const [socialVerdict, setSocialVerdict] = useState(false);
  const [treatedVerdict, setTreatedVerdict] = useState(true);

  const moodData = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 4]
  ];

  const socialData = [
    ['Task', 'Hours per Day'],
    ['Work', 5],
    ['Eat', 14]
  ];

  const treatedData = [
    ['Task', 'Hours per Day'],
    ['Work', 50],
    ['Eat', 9]
  ];

  const options = {
    is3D: true,
    chartArea: {
      left: 0,
      top: 10,
      width: '100%',
      height: '300'
    },
    colors: ['#553791', '#FFB300'],
    legend: {
      position: 'none'
    },
    pieSliceText: 'percentage',
    pieSliceTextStyle: {
      color: '#fff',
      fontName: 'Poppins',
      fontSize: 21
    },
    pieStartAngle: -45,
    slices: {
      0: {
        offset: 0.07
      }
    }
  };

  return (
    <div className="tallies">
      <TopBar title="Tallies" route="/home" />
      <Form>
        <div className="tallies-body">
          <h2 id="header">Recent Assessment</h2>
          <div className="header-nav">
            <span id="tab1">
              <button
                className={selectedTab === 'Mood' ? 'selected' : ''}
                onClick={() => onClickTabItem('Mood')}>
                Mood
              </button>
            </span>
            <span id="tab2">
              <button
                className={selectedTab === 'Social' ? 'selected' : ''}
                onClick={() => onClickTabItem('Social')}>
                Social
              </button>
            </span>
            <span id="tab3">
              <button
                className={selectedTab === 'Treated' ? 'selected' : ''}
                onClick={() => onClickTabItem('Treated')}>
                Treated
              </button>
            </span>
          </div>
          {selectedTab === 'Mood' && (
            <div className="chart-body">
              <h2>Score</h2>
              <div className="chart-container">
                <Chart chartType="PieChart" data={moodData} options={options} />
              </div>
              <VerdictComponent
                verdict={moodVerdict}
                text={'Well done you have been feeling well lately!'}
              />
            </div>
          )}
          {selectedTab === 'Social' && (
            <div className="chart-body">
              <h2>Score</h2>
              <div className="chart-container">
                <Chart chartType="PieChart" data={socialData} options={options} />
              </div>
              <VerdictComponent
                verdict={socialVerdict}
                text={'Negative! Noted. You report you have been feeling distressed of late.'}
              />
            </div>
          )}
          {selectedTab === 'Treated' && (
            <div className="chart-body">
              <h2>Score</h2>
              <div className="chart-container">
                <Chart chartType="PieChart" data={treatedData} options={options} />
              </div>
              <VerdictComponent
                verdict={treatedVerdict}
                text={'Positive! You’re being treated well lately!'}
              />
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};

export default ResilienceTallies;
