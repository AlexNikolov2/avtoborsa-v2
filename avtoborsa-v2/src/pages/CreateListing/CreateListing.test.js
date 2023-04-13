import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateListing from './CreateListing';

describe('<CreateListing />', () => {
  test('it should mount', () => {
    render(<CreateListing />);
    
    const createListing = screen.getByTestId('CreateListing');

    expect(createListing).toBeInTheDocument();
  });
});