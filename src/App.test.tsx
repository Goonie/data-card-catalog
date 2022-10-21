import { render, screen, waitFor } from '@testing-library/react';

import App from 'App';

test('renders without problems', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Data Card Catalog')).toBeInTheDocument();
  });
});
