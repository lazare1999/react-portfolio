import { render } from '@testing-library/react';
import App from '../../App';
import React, {Suspense} from "react";
import {createRoot} from "react-dom/client";

describe('App component', () => {
    test('renders Footer, routes', () => {
        // Arrange
        render(
            <Suspense fallback="...">

                <App/>
            </Suspense>
        );

    });
    it('renders without crashing', () => {
        const root = document.createElement('root');
        createRoot(root);
    })
});

