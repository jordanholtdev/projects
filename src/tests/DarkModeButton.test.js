import { render, screen } from '@testing-library/react';
import DarkModeButton from '../components/DarkModeButton';

test('renders dark mode button', () => {
    render(<DarkModeButton />);
    const buttonElement = screen.getByLabelText(/Switch to dark mode/i);
    expect(buttonElement).toBeInTheDocument();
});

test('button has correct color', () => {
    render(<DarkModeButton />);
    const colorButton = screen.getByLabelText(/Switch to dark mode/i);
    expect(colorButton).toHaveStyle({
        backgroundColor: 'var(--chakra-colors-gray-100)',
    });
});
