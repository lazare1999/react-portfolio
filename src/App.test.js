import { render, screen } from '@testing-library/react';
import App from './App';
import expect from "expect";

describe('App component', () => {
  test('renders header, routes, and footer', () => {
    // Arrange
    render(
        <App />
    );

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});