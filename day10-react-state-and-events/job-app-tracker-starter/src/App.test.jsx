import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button group correctly', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: 'Bookmarked' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Applying' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Applied' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Interviewing' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Negotiating' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Accepted' })).toBeInTheDocument();
});