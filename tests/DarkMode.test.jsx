import { render, fireEvent, screen } from '@testing-library/react';
import { Home } from '../pages/index';

describe('Home', () => {
  it('checks that the user is greeted', () => {
    render(<Home />);

    const heading = screen.getByText('Hi!');
    expect(heading).toBeInTheDocument;
  });

  it('checks that the user can change the theme', () => {
    render(<Home />);

    const button = screen.getByText('Mode');
    fireEvent.click(button);

    expect(localStorage.getItem('blogTheme')).toBe('dark');
  });
});
