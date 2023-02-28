import React, { useState } from 'react';
import Form from '../../components/form/Form';
import TopBar from '../../components/form/TopBar';
import { Chart } from 'react-google-charts';
import VerdictComponent from './Verdict';
import { useSelector } from 'react-redux';
import { loadUserTallies } from '../../redux/Slices/ResilienceTracking';
import { useEffect } from 'react';

const ResilienceTallies = () => {
  const resilienceTalliesData = useSelector(loadUserTallies);
  const resilienceTallies =
    resilienceTalliesData.length > 0 ? resilienceTalliesData.resiliences : null;

  const [moodVerdict, setMoodVerdict] = useState();
  const [socialVerdict, setSocialVerdict] = useState();
  const [treatedVerdict, setTreatedVerdict] = useState();

  const [selectedTab, setSelectedTab] = useState('Mood');
  const onClickTabItem = (tab) => setSelectedTab(tab);

  const moodTally = resilienceTallies
    ? resilienceTallies[5].three_day_av_positive_feeling_percentage
    : null;
  const socialTally = resilienceTallies
    ? resilienceTallies[1].three_day_social_activity_count
    : null;
  const treatedTally = resilienceTallies ? resilienceTallies[3].three_day_av_treatment : null;

  useEffect(() => {
    setMoodVerdict(resilienceTallies ? resilienceTallies[6].three_day_av_feeling_comment : null);
    setSocialVerdict(
      resilienceTallies ? resilienceTallies[2].three_day_social_activity_comment : null
    );
    setTreatedVerdict(
      resilienceTallies ? resilienceTallies[4].three_day_av_treatment_comment : null
    );
  }, [resilienceTallies]);

  const moodData = [
    ['Mood', 'Percentage'],
    ['Positive Mood', moodTally],
    ['Negative Mood', 100 - moodTally]
  ];

  const socialData = [
    ['Activities', 'Number'],
    ['Done Activities', socialTally],
    ['Undone Activities', 6 - socialTally]
  ];

  const treatedData = [
    ['Treatment', 'Percentage'],
    ['Positive Treatment', 100 - treatedTally],
    ['Negative Treatment', treatedTally]
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
    pieStartAngle: -30
  };

  return (
    <div className="tallies">
      {resilienceTalliesData.length > 0 ? (
        <>
          <TopBar title="Tallies" route="/resilience-form" />
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
                  <VerdictComponent verdict={moodTally >= 50 ? true : false} text={moodVerdict} />
                </div>
              )}
              {selectedTab === 'Social' && (
                <div className="chart-body">
                  <h2>Score</h2>
                  <div className="chart-container">
                    <Chart chartType="PieChart" data={socialData} options={options} />
                  </div>
                  <VerdictComponent
                    verdict={socialTally >= 3 ? true : false}
                    text={socialVerdict}
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
                    verdict={treatedTally <= 65 ? true : false}
                    text={treatedVerdict}
                  />
                </div>
              )}
            </div>
          </Form>
        </>
      ) : (
        <div>
          <TopBar title="Tallies" route="/resilience-form" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Internal Server error</h4>
            <div style={{ width: '80%', textAlign: 'center', fontWeight: '300' }}>
              Please check your network connection and try again later.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResilienceTallies;
