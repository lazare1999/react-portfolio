import './App.css';
import React, {Suspense} from 'react';
import HeaderMain from "./components/header/header";
import AppRoutes from "./routes";
import {
    BrowserRouter as Router
} from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <HeaderMain/>
            <AppRoutes/>
            {/*<Footer />*/}
        </Router>
    );
}

export default function WrappedApp() {
    return (
        <Suspense fallback="...loading">
        <App />
        </Suspense>
    )
}