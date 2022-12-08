import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

describe('checks if there is a main block on the page when rendering pages', () => {
  test('rendering a component 404 page', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-404')).toBeInTheDocument();
    expect(screen.getByTestId('navigation-list')).toBeInTheDocument();
  });

  test('rendering a component that main page', () => {
    const route = '/';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('search-cards')).toBeInTheDocument();
    expect(screen.getByTestId('navigation-list')).toBeInTheDocument();
  });
  test('rendering a component about us page', () => {
    const aboutRoute = '/about';
    render(
      <MemoryRouter initialEntries={[aboutRoute]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/main/i)).toBeInTheDocument();
    expect(screen.getByTestId('navigation-list')).toBeInTheDocument();
  });
});
