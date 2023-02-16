import React from 'react';
import ResilienceActivitiesPageComponent from '.';
import Form from '../../components/form/Form';
import ResilienceActivityPill from '../../components/form/ResilienceActivityPill';

const AllResilienceActivitiesPage = () => {
  const ResilienceActivities = [
    {
      name: 'One service goal',
      icon: null,
      link: null
    },
    {
      name: 'Manage your triggers',
      icon: null,
      link: null
    },
    {
      name: ' Today positive affirmations',
      icon: null,
      link: '/resilience-activities/positive-affirmations'
    },
    {
      name: 'One social goal',
      icon: null,
      link: null
    },
    {
      name: 'Journaling',
      icon: null,
      link: '/resilience-activities/journaling'
    },
    {
      name: 'Link to ESAU',
      icon: null,
      link: null
    },
    {
      name: 'Meditation',
      icon: null,
      link: null
    },
    {
      name: 'Education Epilepsy',
      icon: null,
      link: null
    },
    {
      name: 'Inspirational Cultural quotes',
      icon: null,
      link: null
    },
    {
      name: 'Listening',
      icon: null,
      link: null
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
            />
          ))}
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default AllResilienceActivitiesPage;
