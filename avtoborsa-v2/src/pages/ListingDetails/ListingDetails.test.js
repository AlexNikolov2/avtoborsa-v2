import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListingDetails from './ListingDetails';

describe('<ListingDetails />', () => {
  test('it should mount', () => {
    render(<ListingDetails />);
    
    const listingDetails = screen.getByTestId('ListingDetails');

    expect(listingDetails).toBeInTheDocument();
  });
});