import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Pagination', () => {
  test('Pagination buttons', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('search-pagination')).toBeInTheDocument();
    });
  });

  test('if many pages displays their number', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('number-pages')).toBeInTheDocument();
    });
  });
  test('shows the first page number if there is only one page', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    userEvent.type(screen.getByTestId('search-cards'), 'Tusked Assassin');
    userEvent.click(screen.getByTestId('button-search'));
    await waitFor(() => {
      expect(screen.getByTestId('number-page')).toBeInTheDocument();
    });
  });

  test('if click button next page', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/1/i)).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('test-btn-next'));
      setTimeout(() => {
        expect(screen.getByText(/2/i)).toBeInTheDocument();
      }, 500);
    });
  });

  test('if click button prev page - button disabled', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('test-btn-next'));

      fireEvent.click(screen.getByTestId('test-btn-prev'));
      setTimeout(() => {
        expect(screen.getByTestId('test-btn-prev')).toBeDisabled();
      }, 500);
    });
  });
  test('if click button next page - button disabled', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      userEvent.click(screen.getByTestId('test-btn-prev'));
      setTimeout(() => {
        expect(screen.getByTestId('test-btn-prev')).toHaveBeenCalled();
      }, 500);
    });
  });
});
