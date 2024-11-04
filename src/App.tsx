// @flow

import React, {Suspense} from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import {ArrowUpCircle} from "react-feather";
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
                <ArrowUpCircle className="floating-button" onClick={scrollToTop}/>
            </div>
            <LanguageSelector/>
        </Suspense>
    )
}