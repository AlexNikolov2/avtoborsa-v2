import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditListing from './EditListing';

describe('<EditListing />', () => {
  test('it should mount', () => {
    render(<EditListing />);
    
    const editListing = screen.getByTestId('EditListing');

    expect(editListing).toBeInTheDocument();
  });
});