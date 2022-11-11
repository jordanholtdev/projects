import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
});

test('renders copyright information', () => {
    render(<Footer />);
    const copyrightElement = screen.getByLabelText('copyright information');
    const copyrightText = screen.getByText(/Copyright ©/i);
    expect(copyrightElement).toBeInTheDocument();
    expect(copyrightText).toBeVisible();
});

test('renders github link', () => {
    render(<Footer />);
    const githubLinkElement = screen.getByLabelText(
        'Navigate to Jordan Holt Github Repository'
    );
    expect(githubLinkElement).toBeInTheDocument();
    expect(githubLinkElement).toBeVisible();
});

test('renders made by line', () => {
    render(<Footer />);
    const madeByLineElement = screen.getByText(/Made with 💖 by Jordan Holt/i);
    expect(madeByLineElement).toBeInTheDocument();
    expect(madeByLineElement).toBeVisible();
});
