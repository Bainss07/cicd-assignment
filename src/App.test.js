import { render, screen } from '@testing-library/react';
import App from './App';

test('displays name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Tegvir Singh Bains/i);
  expect(nameElement).toBeInTheDocument();
});
