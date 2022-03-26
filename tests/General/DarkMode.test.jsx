import { render, fireEvent, screen } from '@testing-library/react';
import { Home } from '../../pages/index';

describe('DarkMode', () => {
  it('checks that the user can change the theme', () => {
    render(<Home />);

    const button = screen.getByText('Mode');
    fireEvent.click(button);

    expect(localStorage.getItem('blogTheme')).toBe('dark');
  });
});
