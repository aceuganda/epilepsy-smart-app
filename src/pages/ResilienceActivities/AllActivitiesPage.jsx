import React from 'react';
import ResilienceActivitiesPageComponent from '.';
import Form from '../../components/form/Form';
import ResilienceActivityPill from '../../components/form/ResilienceActivityPill';
import { ReactComponent as Meditaion } from '../../assets/svg/Resilience/meditationIcon.svg';
import { ReactComponent as LinkIcon } from '../../assets/svg/Resilience/linkicon.svg';

const AllResilienceActivitiesPage = () => {
  const ResilienceActivities = [
    {
      name: 'One service goal',
      icon: null,
      link: null,
      outerLink:''
    },
    {
      name: 'Manage your triggers',
      icon: null,
      link: null,
      outerLink:''
    },
    {
      name: 'positive affirmations',
      icon: null,
      link: '/resilience-activities/positive-affirmations'
    },
    {
      name: 'One social goal',
      icon: null,
      link: null,
      outerLink:''
    },
    {
      name: 'Secure diary',
      icon: null,
      link: null,
      outerLink:''
    },
    {
      name: 'Education Epilepsy',
      icon: null,
      link: null,
      outerLink:''
    },
    {
      name: 'Inspirational Cultural quotes',
      icon: null,
      link: null,
      outerLink:''
    },
    {
      name: 'Link to ESAU',
      icon: <LinkIcon/>,
      link: '#',
      outerLink:'https://www.epilepsy.org.ug/'
    },
    {
      name: 'Meditation',
      icon: <Meditaion/>,
      link: '/resilience-activities/meditation',
      outerLink:''
    },
    {
      name: 'General Well being',
      icon: null,
      link: null,
      outerLink:''
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
