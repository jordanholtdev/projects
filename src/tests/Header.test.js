import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

test('renders Header component', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toBeVisible();
});

test('renders Github link', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const githubLinkElement = screen.getByLabelText(
        'Navigate to Jordan Holt Github Repository'
    );
    expect(githubLinkElement).toBeInTheDocument();
});

test('navigating', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    // verify page content for default route
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/Portfolio/i));
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
});
