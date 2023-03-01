import React from 'react';
import ResilienceActivitiesPageComponent from '.';
import Form from '../../components/form/Form';
import ResilienceActivityPill from '../../components/form/ResilienceActivityPill';
import { ReactComponent as Meditation } from '../../assets/svg/Resilience/meditationIcon.svg';
import { ReactComponent as LinkIcon } from '../../assets/svg/Resilience/linkicon.svg';
import { ReactComponent as OneServiceGoal } from '../../assets/svg/Resilience/one_service_goal.svg';

const AllResilienceActivitiesPage = () => {
  const ResilienceActivities = [
    {
      name: 'One service goal',
      icon: <OneServiceGoal />,
      link: '/resilience-activities/one-service-goal',
      outerLink: ''
    },
    {
      name: 'Manage your triggers',
      icon: null,
      link: null,
      outerLink: ''
    },
    {
      name: 'positive affirmations',
      icon: null,
      link: '/resilience-activities/positive-affirmations'
    },
    {
      name: 'One social goal',
      icon: null,
      link: '/resilience-activities/one-social-goal',
      outerLink: ''
    },
    {
      name: 'Journaling',
      icon: null,
      link: '/resilience-activities/journaling',
      outerLink: ''
    },
    {
      name: 'Education Epilepsy',
      icon: null,
      link: '#',
      outerLink: 'https://www.youtube.com/watch?v=SshVn6MUGxA'
    },
    {
      name: 'Inspirational Cultural quotes',
      icon: null,
      link: null,
      outerLink: ''
    },
    {
      name: 'Link to ESAU',
      icon: <LinkIcon />,
      link: '#',
      outerLink: 'https://www.epilepsy.org.ug/'
    },
    {
      name: 'Meditation',
      icon: <Meditation />,
      link: '/resilience-activities/meditation',
      outerLink: ''
    },
    {
      name: 'General Well being',
      icon: null,
      link: '#',
      outerLink: 'https://www.cdc.gov/hrqol/wellbeing.htm'
    }
  ];
  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/home'}>
        <Form>
          {ResilienceActivities.map((activity, key) => (
            <ResilienceActivityPill
              key={key}
              title={activity.name}
              icon={activity.icon}
              link={activity.link}
              outerLink={activity.outerLink}
            />
          ))}
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default AllResilienceActivitiesPage;
