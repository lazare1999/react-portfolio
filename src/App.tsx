import './App.css';
import React, {Suspense} from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import {FaArrowAltCircleUp} from "react-icons/fa";
import LanguageSelector from "./components/LanguageSelector";
import AppRoutes from "./routes";
import Footer from "./components/footer/footer";

function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <AppRoutes/>
            <Footer/>
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
        </Suspense>
    )
}