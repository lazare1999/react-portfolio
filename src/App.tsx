// @flow

import React, {Suspense} from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import {FaArrowAltCircleUp} from "react-icons/fa";
import LanguageSelector from "./components/languageSelector";
import AppRoutes from "./components/routes";
import Footer from "./components/footer";
import "./components/styles/styles.css";
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/react';

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