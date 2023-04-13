import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AllListings from './AllListings';

describe('<AllListings />', () => {
  test('it should mount', () => {
    render(<AllListings />);
    
    const allListings = screen.getByTestId('AllListings');

    expect(allListings).toBeInTheDocument();
  });
});