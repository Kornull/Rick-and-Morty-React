import { render, screen } from '@testing-library/react';
import React from 'react';
import UserCard from './UserCard';

export const userCardDefaultProps = {
  lastName: 'Rick',
  firstName: 'Sanchez',
  email: 'mail@mail.ma',
  gender: 'Male',
  location: 'Earth',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('render card character', () => {
  const { lastName, email } = userCardDefaultProps;

  test('displaying fields in a card', () => {
    render(<UserCard {...userCardDefaultProps} />);
    expect(screen.getByTestId('person-card')).toHaveTextContent(lastName);
    expect(screen.getByTestId('person-card')).toHaveTextContent(email);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
