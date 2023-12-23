import './App.css';
import React, {Suspense} from 'react';
import AppRoutes from "./routes";
import {
    BrowserRouter as Router
} from "react-router-dom";
import {FaArrowAltCircleUp} from "react-icons/fa";
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
            <FaArrowAltCircleUp className="floating-button" onClick={scrollToTop}/>
        </Suspense>
    )
}