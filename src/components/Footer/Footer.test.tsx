import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  test('render footer text component', () => {
    render(<Footer />);
    expect(screen.getByText(/Kornull/i)).toBeInTheDocument();
  });
  test('render footer component on page', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
