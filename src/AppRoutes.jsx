import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import MedicationAssessmentPageOne from './pages/MedicineTracking/Assessment/PageOne';
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


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const AppRoutes = () => {
  return (
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding/notify" element={<Notify />} />
          <Route path="/onboarding/track" element={<Track />} />
          <Route path="/seizure-form" element={<StartPage />} />
          <Route path="/seizure-form/assessment/1" element={<PageOne />} />
          <Route path="/seizure-form/assessment/2" element={<PageTwo />} />
          <Route path="/seizure-form/assessment/3" element={<PageThree />} />
          <Route path="/medication" element={<IntroPage />} />
          <Route path="/medication/assessment/1" element={<MedicationAssessmentPageOne />} />
          <Route path="/medication/assessment/2" element={<MedicationAssessmentPageTwo />} />
          <Route path="/medication/tracking" element={<MedicationTrackingPageOne />} />
          <Route path="/resilience-form/1" element={<ResiliencePageOne />} />
          <Route path="/resilience-form/2" element={<ResiliencePageTwo />} />
          <Route path="/resilience-form/3" element={<ResiliencePageThree />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
