import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnderConstruction from './UnderConstruction';

describe('<UnderConstruction />', () => {
  test('it should mount', () => {
    render(<UnderConstruction />);
    
    const underConstruction = screen.getByTestId('UnderConstruction');

    expect(underConstruction).toBeInTheDocument();
  });
});