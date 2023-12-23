import './App.css';
import React, {Suspense} from 'react';
import AppRoutes from "./routes";
import {
    BrowserRouter as Router
} from "react-router-dom";
import {FaArrowAltCircleUp} from "react-icons/fa";
import Footer from "./components/footer/footer";
import smoothScroll from 'smoothscroll-polyfill';
import LanguageSelector from "./components/LanguageSelector";

function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <AppRoutes/>
            <Footer/>
        </Router>
    );
}

smoothScroll.polyfill();

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
        </Suspense>
    )
}