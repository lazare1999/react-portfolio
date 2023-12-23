import './App.css';
import React, {Suspense} from 'react';
import HeaderMain from "./components/header/header";
import AppRoutes from "./routes";
import {
    BrowserRouter as Router
} from "react-router-dom";

function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <HeaderMain/>
            <AppRoutes/>
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