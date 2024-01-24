import React from 'react';
import UserSettingsPageComponent from '.';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <UserSettingsPageComponent backroute={'/account/about'} title="Privacy Policy">
      <div className="legal">
        <p>
          {t(`ACE Uganda built the EPILEPSY SMART app as a Free app. This SERVICE is provided by ACE
          Uganda at no cost and is intended for use as is.`)}
        </p>{' '}
        <p>
          {t(`This page is used to inform visitors regarding my policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use my Service.`)}
        </p>{' '}
        <p>
          {t(`If you choose to use our Service, then you agree to the collection and use of information
          in relation to this policy. The Personal Information that we collect is used for providing
          and improving the Service. We will not use or share your information with anyone except as
          described in this Privacy Policy.`)}
        </p>{' '}
        <p>
          {t(`The terms used in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at EPILEPSY SMART app unless otherwise defined in this
          Privacy Policy.`)}
        </p>{' '}
        <h1>{t('Information Collection and Use')}</h1>
        <p>
          {t(`For a better experience, while using our Service, we may require you to provide us with
          certain personally identifiable information, including but not limited to name, email
          address, phone contact. The information that we request will be retained on your device
          and is not collected by us in any way.`)}
        </p>{' '}
        <div>
          <p>
            {t('The app does use third-party services that declare their Terms and Conditions')} (
            <a
              href="https://www.google.com/policies/privacy"
              target="_blank"
              rel="noopener noreferrer">
              {t('Google Play Services')}
            </a>
            ).
          </p>
        </div>{' '}
        <h1>{t('Log Data')}</h1>
        <p>
          {t(` We want to inform you that whenever you use our Service, in a case of an error in the app
          we collect data and information (through third-party products) on your phone called Log
          Data. This Log Data may include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of the app when
          utilizing my Service, the time and date of your use of the Service, and other statistics.`)}
        </p>{' '}
        <h1>{t('Cookies')}</h1>
        <p>
          {t(`Cookies are files with a small amount of data that are commonly used as anonymous unique
          identifiers. These are sent to your browser from the websites that you visit and are
          stored on your devices internal memory.`)}
        </p>{' '}
        <p>
          {t(`This Service does not use these “cookies” explicitly. However, the app may use third-party
          code and libraries that use “cookies” to collect information and improve their services.
          You have the option to either accept or refuse these cookies and know when a cookie is
          being sent to your device. If you choose to refuse our cookies, you may not be able to use
          some portions of this Service.`)}
        </p>{' '}
        <h1>{t('Service Providers')}</h1>
        <p>
          {t('We may employ third-party companies and individuals due to the following reasons')}:
        </p>{' '}
        <ul>
          <li>{t('To facilitate our Service')};</li>
          <li>{t('To provide the Service on our behalf')};</li>{' '}
          <li>
            {t('To perform Service-related services')}; {t('or')}
          </li>{' '}
          <li>{t('To assist us in analyzing how our Service is used.')}</li>
        </ul>{' '}
        <p>
          {t(`We want to inform users of this Service that these third parties have access to their
          Personal Information. The reason is to perform the tasks assigned to them on our behalf.
          However, they are obligated not to disclose or use the information for any other purpose.`)}
        </p>{' '}
        <h1>{t('Security')}</h1>
        <p>
          {t(`We value your trust in providing us your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. But remember that no method of
          transmission over the internet, or method of electronic storage is 100% secure and
          reliable, and we cannot guarantee its absolute security.`)}
        </p>{' '}
        <h1>{t('Links to Other Sites')}</h1>
        <p>
          {t(`This Service may contain links to other sites. If you click on a third-party link, you
          will be directed to that site. Note that these external sites are not operated by us.
          Therefore, we strongly advise you to review the Privacy Policy of these websites. We have
          no control over and assume no responsibility for the content, privacy policies, or
          practices of any third-party sites or services.`)}
        </p>{' '}
        <h1>{t('Children’s Privacy')}</h1>
        <div>
          <p>
            {t(`These Services do not address anyone under the age of 13. We do not knowingly collect
            personally identifiable information from children under 13 years of age. In the case we
            discover that a child under 13 has provided me with personal information, we immediately
            delete this from our servers. If you are a parent or guardian and you are aware that
            your child has provided us with personal information, please contact us so that we will
            be able to do the necessary actions.`)}
          </p>
        </div>{' '}
        <h1>{t('Changes to this Privacy Policy')}</h1>
        <p>
          {t(`The owners of this application may update our Privacy Policy from time to time. Thus, you
          are advised to review this page periodically for any changes. We will notify you of any
          changes by posting the new Privacy Policy on this page.`)}
        </p>{' '}
        <p>{t('This policy is effective as of 2023-01-04')}</p> <h1>{t('Contact Us')}</h1>
        <p>
          {t(`If you have any questions or suggestions about this Privacy Policy, do not hesitate to
          contact us at`)}
          <b>ace@idi.co.ug</b>
        </p>{' '}
      </div>
    </UserSettingsPageComponent>
  );
};

export default Privacy;
