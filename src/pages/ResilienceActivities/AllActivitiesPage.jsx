import React from 'react';
import ResilienceActivitiesPageComponent from '.';
import Form from '../../components/form/Form';
import ResilienceActivityPill from '../../components/form/ResilienceActivityPill';

import { ReactComponent as OServiceGoalIcon } from '../../assets/svg/ResilienceActivities/one_service_goal.svg';
import { ReactComponent as OSocialGoalIcon } from '../../assets/svg/ResilienceActivities/one_social_goal.svg';
import { ReactComponent as TriggerIcon } from '../../assets/svg/ResilienceActivities/manage_trigger.svg';
import { ReactComponent as AffirmationIcon } from '../../assets/svg/ResilienceActivities/todays_positive.svg';
import { ReactComponent as JournalIcon } from '../../assets/svg/ResilienceActivities/journal.svg';
import { ReactComponent as LinkIcon } from '../../assets/svg/ResilienceActivities/link.svg';
import { ReactComponent as MeditationIcon } from '../../assets/svg/ResilienceActivities/meditation.svg';
import { ReactComponent as EducationIcon } from '../../assets/svg/ResilienceActivities/education.svg';
import { ReactComponent as QuoteIcon } from '../../assets/svg/ResilienceActivities/quote.svg';
import { ReactComponent as ListeningIcon } from '../../assets/svg/ResilienceActivities/listening.svg';

const AllResilienceActivitiesPage = () => {
  const ResilienceActivities = [
    {
      name: 'One service goal',
      icon: <OServiceGoalIcon />,
      link: '/resilience-activities/one-service-goal'
    },
    {
      name: 'Manage your triggers',
      icon: <TriggerIcon />,
      link: null
    },
    {
      name: 'Todays positive affirmation',
      icon: <AffirmationIcon />,
      link: '/resilience-activities/positive-affirmations'
    },
    {
      name: 'One Social goal',
      icon: <OSocialGoalIcon />,
      link: '/resilience-activities/one-social-goal'
    },
    {
      name: ' journaling',
      icon: <JournalIcon />,
      link: '/resilience-activities/journaling'
    },
    {
      name: 'LINK TO ESAU',
      icon: <LinkIcon />,
      link: null
    },
    {
      name: 'meditation',
      icon: <MeditationIcon />,
      link: null
    },
    {
      name: 'Epilepsy Education',
      icon: <EducationIcon />,
      link: ' https://www.youtube.com/watch?v=SshVn6MUGxA   '
    },
    {
      name: 'INSPIRATIONAL CULTURAL QUOTES',
      icon: <QuoteIcon />,
      link: null
    },
    {
      name: 'listening',
      icon: <ListeningIcon />,
      link: '/resilience-activities/listening'
    }
  ];
  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/home'}>
        <Form style={{ maxHeight: 'none', height: '640px' }}>
          <div className="resilience-activities">
            {ResilienceActivities.map((activity, key) => (
              <ResilienceActivityPill
                key={key}
                title={activity.name}
                icon={activity.icon}
                link={activity.link}
              />
            ))}
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default AllResilienceActivitiesPage;
