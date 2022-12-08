import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ENDPOINTS } from '../../components/types/types';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from '../../store';

describe('render cards on first page entry', () => {
  test('error fetch', async () => {
    const res = await fetch(`${ENDPOINTS.character}`);
    const result = await res.json();
    expect.assertions(0);
    try {
      await result;
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});

describe('render components on home page', () => {
  test(' if returned data from API rendered into component', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/sanchez/i)).toBeInTheDocument();
    });
  });
});

describe('render components on home page', () => {
  test('user click search panel', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    userEvent.type(screen.getByTestId('search-cards'), 'morty');
    userEvent.click(screen.getByTestId('button-search'));
    await waitFor(() => {
      const subTitle = screen.getAllByText(/morty/i);
      expect(subTitle[0]).toBeInTheDocument();
    });
  });

  test('user click search parameter card', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    userEvent.type(screen.getByTestId('search-cards-page'), 'morty');
    userEvent.click(screen.getByTestId('button-search-card'));
    await waitFor(() => {
      const subTitle = screen.getAllByText(/morty/i);
      expect(subTitle[0]).toBeInTheDocument();
    });
  });
});
