import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import Card from '../Cards/Card';
import { Provider } from 'react-redux';
import { characterInfo } from '../Cards/Card/Card.test';

describe('Header', () => {
  test('render header component', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
  test('header has list and navigation', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('navigation-list')).toHaveTextContent(/main/i);
    expect(screen.getByTestId('navigation-list')).toHaveTextContent(/about/i);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
