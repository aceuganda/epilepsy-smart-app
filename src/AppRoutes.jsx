import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import MedicationAssessmentPageOne from './pages/MedicineTracking/Assessment/PageOne';
import MedicationAssessmentPageZero from './pages/MedicineTracking/Assessment/PageZero';
import MedicationAssessmentPageTwo from './pages/MedicineTracking/Assessment/PageTwo';
import IntroPage from './pages/MedicineTracking/IntroPage';
import MedicationTrackingPageOne from './pages/MedicineTracking/MedicationTracking/PageOne';
import Onboarding from './pages/Onboarding';
import Notify from './pages/Onboarding/notify';
import Track from './pages/Onboarding/track';
import StartPage from './pages/SeizureMonitoring/Page';
import PageOne from './pages/SeizureMonitoring/SeizureAssessment/PageOne';
import PageThree from './pages/SeizureMonitoring/SeizureAssessment/PageThree';
import PageTwo from './pages/SeizureMonitoring/SeizureAssessment/PageTwo';
import ResiliencePageOne from './pages/ResilienceTracking/ResiliencePageOne';
import ResiliencePageTwo from './pages/ResilienceTracking/ResiliencePageTwo';
import ResiliencePageThree from './pages/ResilienceTracking/ResiliencePageThree';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import ProtectedRoute from './routing/ProtectedRoute';
import AllResilienceActivitiesPage from './pages/ResilienceActivities/AllActivitiesPage';
import PositiveAffirmations from './pages/ResilienceActivities/Activities/PositiveAffirmations';
import OneServiceGoal from './pages/ResilienceActivities/Activities/OneServiceGoal';
import OneSocialGoal from './pages/ResilienceActivities/Activities/OneSocialGoal';
import Journaling from './pages/ResilienceActivities/Activities/Journaling';
import Listening from './pages/ResilienceActivities/Activities/Listening';
import Meditation from './pages/ResilienceActivities/Activities/Meditation/index';
import Settings from './pages/UserSettingsPage/Settings';
import ResilienceTallies from './pages/ResilienceTracking/Tallies';
import Privacy from './pages/UserSettingsPage/PrivacyPolicy';
import Terms from './pages/UserSettingsPage/TermsOfService';
import ResilienceStartPage from './pages/ResilienceTracking/Intro';
import UserDetailsEdit from './pages/UserSettingsPage/Profile';
import PasswordReset from './pages/UserSettingsPage/PasswordReset';
import About from './pages/UserSettingsPage/About';
import Journal from './components/journal/Journal';
import NewJournal from './components/journal/NewJournal';
import Journal2 from './components/journal/Journal2';
import InspirationalQuotes from './pages/ResilienceActivities/Activities/InspirationalQuotes';
import VerificationPage from './pages/EmailVerification/VerificationPage';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';
import ManageTriggers from './pages/ResilienceActivities/Activities/ManageTriggers';
import UpdatesPage from './pages/UserSettingsPage/UpdatePage';
import PageNotFound from './pages/PageNotFound';
// import InspirationalQuotes from './pages/ResilienceActivities/InspirationalQuotes';
// import Grateful from './components/journal/Grateful';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const AppRoutes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center text-center load-spinner">
          <div className="loader" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding/notify" element={<Notify />} />
        <Route path="/onboarding/track" element={<Track />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/version-updates" element={<UpdatesPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify/:token" element={<VerificationPage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/seizure-form" element={<StartPage />} />
          <Route path="/seizure-form/assessment/1" element={<PageOne />} />
          <Route path="/seizure-form/assessment/2" element={<PageTwo />} />
          <Route path="/seizure-form/assessment/3" element={<PageThree />} />
          <Route path="/medication" element={<IntroPage />} />
          <Route path="/medication/assessment/0" element={<MedicationAssessmentPageZero />} />
          <Route path="/medication/assessment/1" element={<MedicationAssessmentPageOne />} />
          <Route path="/medication/assessment/2" element={<MedicationAssessmentPageTwo />} />
          <Route path="/medication/tracking" element={<MedicationTrackingPageOne />} />
          <Route path="/resilience-form" element={<ResilienceStartPage />} />
          <Route path="/resilience-form/1" element={<ResiliencePageOne />} />
          <Route path="/resilience-form/2" element={<ResiliencePageTwo />} />
          <Route path="/resilience-form/3" element={<ResiliencePageThree />} />
          <Route path="/resilience-activities" element={<AllResilienceActivitiesPage />} />
          <Route
            path="/resilience-activities/positive-affirmations"
            element={<PositiveAffirmations />}
          />
          <Route path="/resilience-activities/one-social-goal" element={<OneSocialGoal />} />
          <Route path="/resilience-activities/one-service-goal" element={<OneServiceGoal />} />
          <Route path="/resilience-activities/journaling" element={<Journaling />} />
          <Route path="/resilience-activities/listening" element={<Listening />} />
          <Route path="/resilience-activities/meditation" element={<Meditation />} />
          <Route path="/account" element={<Settings />} />
          {/* <Route path="/account/verify" element={<VerificationPage />} /> */}
          <Route path="/resilience/tallies" element={<ResilienceTallies />} />
          <Route path="/account/settings" element={<UserDetailsEdit />} />
          <Route path="/account/password-reset" element={<PasswordReset />} />
          <Route path="/account/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:journalId" element={<Journal2 />} />
          <Route path="/new-journal" element={<NewJournal />} />
          <Route path="/quotes" element={<InspirationalQuotes />} />
          <Route path="/resilience-activities/manage-triggers" element={<ManageTriggers />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
