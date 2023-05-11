import React from 'react';
import ResilienceActivitiesPageComponent from '.';
import Form from '../../components/form/Form';
import ResilienceActivityPill from '../../components/form/ResilienceActivityPill';
import { ReactComponent as Meditation } from '../../assets/svg/Resilience/meditationIcon.svg';
import { ReactComponent as LinkIcon } from '../../assets/svg/Resilience/linkicon.svg';
import { ReactComponent as OneServiceGoal } from '../../assets/svg/Resilience/one_service_goal.svg';
import { ReactComponent as OneSocialGoal } from '../../assets/svg/Resilience/one_social_goal.svg';
import { ReactComponent as ManageTrigger } from '../../assets/svg/Resilience/manage_trigger.svg';
import { ReactComponent as Journaling } from '../../assets/svg/Resilience/journal_icon.svg';
import { ReactComponent as Education } from '../../assets/svg/Resilience/education epp_icon.svg';
import { ReactComponent as Inspiration } from '../../assets/svg/Resilience/Inspirational_icon.svg';
import { ReactComponent as Listening } from '../../assets/svg/Resilience/listening.svg';
import { ReactComponent as Affirm } from '../../assets/svg/Resilience/todays_positive.svg';

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
      icon: <ManageTrigger />,
      link: '/resilience-activities/manage-your-triggers',
      outerLink: ''
    },
    {
      name: 'positive affirmations',
      icon: <Affirm />,
      link: '/resilience-activities/positive-affirmations'
    },
    {
      name: 'One social goal',
      icon: <OneSocialGoal />,
      link: '/resilience-activities/one-social-goal',
      outerLink: ''
    },
    {
      name: 'Journaling',
      icon: <Journaling />,
      link: '/resilience-activities/journaling',
      outerLink: ''
    },
    {
      name: 'Epilepsy Education',
      icon: <Education />,
      link: '#',
      outerLink: 'https://www.youtube.com/watch?v=SshVn6MUGxA'
    },
    {
      name: 'Inspirational Cultural quotes',
      icon: <Inspiration />,
      link: '/quotes',
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
      name: 'Listening',
      icon: <Listening />,
      link: '/resilience-activities/listening',
      outerLink: ''
    },
    {
      name: 'General Well being',
      icon: <OneServiceGoal />,
      link: '#',
      outerLink: 'https://www.cdc.gov/hrqol/wellbeing.htm'
    }
  ];
  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/home'}>
        <Form style={{ maxHeight: 'none', height: '660px' }}>
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
