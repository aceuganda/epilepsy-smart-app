import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
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
                    <Route path="/seizure-form" element={<Seizure/>} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes