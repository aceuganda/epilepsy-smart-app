import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import Onboarding from './pages/Onboarding';
import Notify from './pages/Onboarding/notify';
import Track from './pages/Onboarding/track';
import Seizure from './pages/SeizureMonitoring/Seizure';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback=
            {
                <div className="d-flex justify-content-center text-center load-spinner">
                    <div className="loader" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/onboarding/notify" element={<Notify />} />
                    <Route path="/onboarding/track" element={<Track />} />
                    <Route path="/seizure-form" element={<Seizure/>} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes