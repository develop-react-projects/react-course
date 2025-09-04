import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar in the document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggler = screen.getByTestId('sidebar-toggler');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggler);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
