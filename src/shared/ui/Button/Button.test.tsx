import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';
import { ButtonTheme } from './Button';

describe('Button', () => {
  test('Button in the document', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button has theme class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
