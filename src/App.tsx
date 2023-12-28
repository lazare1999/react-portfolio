// @flow

import React, {Suspense} from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import {FaArrowAltCircleUp} from "react-icons/fa";
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/react';
import "./components/styles/styles.css";


const Footer = React.lazy(() => import('./components/footer'));
const LanguageSelector = React.lazy(() => import('./components/languageSelector'));
const AppRoutes = React.lazy(() => import('./components/routes'));


function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <AppRoutes />
            <Footer />
        </Router>
    );
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export default function WrappedApp() {



    return (
        <Suspense fallback="...">

            <App/>
            <div className="floating_button_up">
                <FaArrowAltCircleUp className="floating-button" onClick={scrollToTop}/>
            </div>
            <LanguageSelector/>
            <Analytics mode={'production'} debug={false}/>
            <SpeedInsights />
        </Suspense>
    )
}