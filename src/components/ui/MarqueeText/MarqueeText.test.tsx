import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarqueeText from './MarqueeText';

describe('<MarqueeText />', () => {
  test('it should mount', () => {
    render(<MarqueeText />);
    
    const marqueeText = screen.getByTestId('MarqueeText');

    expect(marqueeText).toBeInTheDocument();
  });
});