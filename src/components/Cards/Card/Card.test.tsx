import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';
import { Provider } from 'react-redux';
import store from '../../../store';
import Search from '../../Search';

export const characterInfo = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];

describe('render card character', () => {
  test('displaying fields in a card', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Card {...characterInfo[0]} />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('person-card')).toHaveTextContent(characterInfo[0].name);
      expect(screen.getByTestId('person-card')).toHaveTextContent(characterInfo[0].species);
      expect(screen.getByTestId('person-card')).not.toHaveTextContent(characterInfo[0].status);
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });
});
