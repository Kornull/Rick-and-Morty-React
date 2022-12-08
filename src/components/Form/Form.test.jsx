import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Form from './Form';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Form', () => {
  test('render user form', () => {
    render(<Form />);
    expect(screen.getByTestId('form-user')).toBeInTheDocument();
    expect(screen.getByTestId('first-name')).toBeInTheDocument();
  });

  test('error output for incorrect data entered to first name', async () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), '2');
    userEvent.click(screen.getByTestId('button-submit'));
    await waitFor(() => {
      const errorBlocks = screen.getAllByTestId('error-text');
      expect(errorBlocks[0]).toHaveClass('formBlockErrorText');
    });
  });

  test('shows invalid input text', async () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), 'word');

    await waitFor(() => {
      userEvent.click(screen.getByTestId('button-submit'));
      userEvent.type(screen.getByTestId('first-name'), 'as');
      expect(screen.getByText(/characters/i)).toBeInTheDocument();
    });
  });

  test('not error output ', async () => {
    render(<Form />);

    await act(() => {
      userEvent.type(screen.getByTestId('first-name'), '2222');
      userEvent.type(screen.getByTestId('last-name'), '2222');
      userEvent.type(screen.getByTestId('input-email'), 'user@user.us');
      userEvent.click(screen.getByTestId('checkbox-button'));
      userEvent.click(screen.getByTestId('gender-female'));
      userEvent.click(screen.getByTestId('gender-male'));
      expect(screen.getByTestId('gender-male')).toBeChecked();
      userEvent.click(screen.getByTestId('button-submit'));
    });
    expect(screen.queryByTestId('error-text')).not.toBeInTheDocument();
  });

  test('user going to load image', () => {
    window.URL.createObjectURL = function () {};
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' }),
    ];
    render(<Form />);

    const input = screen.getByLabelText(/choice image/i);
    userEvent.upload(input, files);

    expect(input.files[0]).toStrictEqual(files[0]);
  });

  test('shows name image', async () => {
    window.URL.createObjectURL = function () {};
    const files = [new File(['hello'], 'hello.png', { type: 'image/png' })];
    render(<Form />);

    const input = screen.getByLabelText(/choice image/i);
    userEvent.upload(input, files);

    expect(input.files[0]).toStrictEqual(files[0]);
    await waitFor(() => {
      expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
  });

  test('button disabled', async () => {
    render(<Form />);
    const buttonSubmit = screen.getByTestId('button-submit');
    userEvent.click(buttonSubmit);
    await waitFor(() => {
      expect(buttonSubmit).toBeDisabled();
    });
  });

  test('user not going to load image', () => {
    const files = [new File([''], '', { type: 'image/png' })];
    render(<Form />);
    const input = screen.getByLabelText(/choice image/i);
    userEvent.upload(input, files);

    expect(screen.queryByTestId('image-block')).toBeNull();
  });
});
