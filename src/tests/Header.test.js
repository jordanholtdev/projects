import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header component', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toBeVisible();
});

test('renders Github link', () => {
    render(<Header />);
    const githubLinkElement = screen.getByLabelText(
        'Navigate to Jordan Holt Github Repository'
    );
    expect(githubLinkElement).toBeInTheDocument();
});
