import React, { useState } from 'react';
import Form from '../../components/form/Form';
import TopBar from '../../components/form/TopBar';
import { Chart } from 'react-google-charts';
import VerdictComponent from './Verdict';
import { useSelector } from 'react-redux';
import { getResilienceTallies, loadUserTallies } from '../../redux/Slices/ResilienceTracking';
import { useEffect } from 'react';
import store from '../../store';
import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/img/Resilience/error.webp';
import { useTranslation } from 'react-i18next';

const ResilienceTallies = () => {
  const resilienceTalliesData = useSelector(loadUserTallies);
  const { t } = useTranslation();
  const [resilienceTallies, setResilienceTallies] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [moodTally, setMoodTally] = useState();
  const [socialTally, setSocialTally] = useState();
  const [treatedTally, setTreatedTally] = useState();
  const [moodVerdict, setMoodVerdict] = useState();
  const [socialVerdict, setSocialVerdict] = useState();
  const [treatedVerdict, setTreatedVerdict] = useState();

  const [selectedTab, setSelectedTab] = useState('Mood');
  const onClickTabItem = (tab) => setSelectedTab(tab);

  useEffect(() => {
    if (resilienceTalliesData.length < 0) {
      store.dispatch(getResilienceTallies);
    }
    setResilienceTallies(resilienceTalliesData.resiliences);
  }, [resilienceTalliesData]);

  useEffect(() => {
    setMoodTally(
      resilienceTallies.length > 0
        ? resilienceTallies[4].three_day_av_positive_feeling_percentage
        : null
    );
    setTreatedTally(
      resilienceTallies.length > 0 ? resilienceTallies[2].three_day_av_treatment : null
    );
    setSocialTally(
      resilienceTallies.length > 0 ? resilienceTallies[0].three_day_social_activity_count : null
    );
    setMoodVerdict(
      resilienceTallies.length > 0 ? resilienceTallies[5].three_day_av_feeling_comment : 'Undefined'
    );
    setSocialVerdict(
      resilienceTallies.length > 0
        ? resilienceTallies[1].three_day_social_activity_comment
        : 'Undefined'
    );
    setTreatedVerdict(
      resilienceTallies.length > 0
        ? resilienceTallies[3].three_day_av_treatment_comment
        : 'Undefined'
    );
  }, [resilienceTallies]);

  const moodData = [
    ['Mood', 'Percentage'],
    ['Positive Mood Logged', moodTally],
    ['Negative Mood Logged', 100 - moodTally]
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

  // TODO: Profile update

  const recommendedActivities = [
    {
      name: t('One service goal'),
      link: '/resilience-activities/one-service-goal',
      outerLink: ''
    },
    {
      name: t('Manage your triggers'),
      link: '/resilience-activities/manage-triggers',
      outerLink: ''
    },
    {
      name: t('positive affirmations'),
      link: '/resilience-activities/positive-affirmations'
    },
    {
      name: t('One social goal'),
      link: '/resilience-activities/one-social-goal',
      outerLink: ''
    },
    {
      name: t('Journaling'),
      link: '/resilience-activities/journaling',
      outerLink: ''
    },
    {
      name: t('Epilepsy Education'),
      link: '#',
      outerLink: 'https://www.youtube.com/watch?v=SshVn6MUGxA'
    },
    {
      name: t('Inspirational Cultural quotes'),
      link: '/quotes',
      outerLink: ''
    },
    {
      name: t('Meditation'),
      link: '/resilience-activities/meditation',
      outerLink: ''
    },
    {
      name: t('Listening'),
      link: '/resilience-activities/listening',
      outerLink: ''
    }
  ];

  useEffect(() => {
    while (selectedActivities.length < 3) {
      const randomIndex = Math.floor(Math.random() * recommendedActivities.length);
      const randomObject = recommendedActivities[randomIndex];
      if (!selectedActivities.includes(randomObject)) {
        selectedActivities.push(randomObject);
      }
    }
  }, []);

  return (
    <div className="tallies">
      {resilienceTallies.length > 0 ? (
        <>
          <TopBar title="Tallies" route="/resilience-form" />
          <Form style={{ maxHeight: 'none', height: '600px' }}>
            <div className="tallies-body">
              <h2 id="header">{t('Recent Assessment')}</h2>
              <div className="header-nav">
                <span id="tab1">
                  <button
                    className={selectedTab === 'Mood' ? 'selected' : ''}
                    onClick={() => onClickTabItem('Mood')}>
                    {t('Mood')}
                  </button>
                </span>
                <span id="tab2">
                  <button
                    className={selectedTab === 'Social' ? 'selected' : ''}
                    onClick={() => onClickTabItem('Social')}>
                    {t('Social')}
                  </button>
                </span>
                <span id="tab3">
                  <button
                    className={selectedTab === 'Treated' ? 'selected' : ''}
                    onClick={() => onClickTabItem('Treated')}>
                    {t('Treated')}
                  </button>
                </span>
              </div>
              {selectedTab === 'Mood' && (
                <div className="chart-body">
                  <h2>{t('Score')}</h2>
                  <div className="chart-container">
                    <Chart chartType="PieChart" data={moodData} options={options} />
                  </div>
                  <VerdictComponent verdict={moodTally >= 50 ? true : false} text={moodVerdict} />
                </div>
              )}
              {selectedTab === 'Social' && (
                <div className="chart-body">
                  <h2>{t('Score')}</h2>
                  <div className="chart-container">
                    <Chart chartType="PieChart" data={socialData} options={options} />
                  </div>
                  <VerdictComponent
                    verdict={socialTally >= 3 ? true : false}
                    text={socialVerdict}
                  />
                  {socialTally < 3 ? (
                    <div className="recommendations">
                      <div className="title">{t('Recommended Resilience Activities')}</div>
                      {selectedActivities.map((activity, index) => (
                        <div key={index} className="activity-pill">
                          <Link to={`${activity.link}`}>{t(activity.name)}</Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span />
                  )}
                </div>
              )}
              {selectedTab === 'Treated' && (
                <div className="chart-body">
                  <h2>{t('Score')}</h2>
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
          <TopBar title={t('Tallies')} route="/resilience-form" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <img src={ErrorImage} alt="" />
            </div>
            <div style={{ width: '80%', textAlign: 'center', fontWeight: '300' }}>
              {t('Something went wrong. Please try again later')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResilienceTallies;
