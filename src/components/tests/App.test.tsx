import { render } from '@testing-library/react';
import App from '../../App';
import {FaArrowAltCircleUp} from "react-icons/fa";
import LanguageSelector from "../languageSelector";
import React, {Suspense} from "react";
import {scrollToTop} from "react-scroll/modules/mixins/animate-scroll";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {createRoot} from "react-dom/client";

describe('App component', () => {
    test('renders Footer, routes', () => {
        // Arrange
        render(
            <Suspense fallback="...">

                <App/>
                <div className="floating_button_up">
                    <FaArrowAltCircleUp className="floating-button" onClick={scrollToTop}/>
                </div>
                <LanguageSelector/>
                <Analytics mode={'production'} debug={false}/>
                <SpeedInsights />
            </Suspense>
        );

    });
    it('renders without crashing', () => {
        const root = document.createElement('root');
        createRoot(root);
    })
});

