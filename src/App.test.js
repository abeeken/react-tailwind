import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders website link', () => {
  render(<App />);
  const linkElement = screen.getByText(/andrewbeeken.co.uk/i);
  expect(linkElement).toBeInTheDocument();
});
