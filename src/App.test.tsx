import { render, screen } from '@testing-library/react';

import App from 'App';

test('renders without problems', () => {
  render(<App />);

  expect(screen.getByText('Data Card Catalog')).toBeInTheDocument();
});
