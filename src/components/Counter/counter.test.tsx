import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import Counter from './counter';
import user from '@testing-library/user-event';
describe('Counter', () => {
  test('check component renders correctly', () => {
    render(<Counter initialValue={1} />);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', {
      name: 'Increment Counter',
    });
    expect(incrementButton).toBeInTheDocument();
    const decrementButton = screen.getByRole('button', {
      name: 'Decrement Counter',
    });
    expect(decrementButton).toBeInTheDocument();
  });

  test('renders the initial value of counter correctly', async () => {
    user.setup();
    const initialValue = 1;
    render(<Counter initialValue={initialValue} />);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent(initialValue.toString());
  });
  test('increments count by 1 on clicking increment button', async () => {
    user.setup();
    render(<Counter initialValue={1} />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment Counter',
    });
    await user.click(incrementButton);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('2');
  });
  test('decrement count by 1 on clicking decrement button', async () => {
    user.setup();
    render(<Counter initialValue={1} />);
    const incrementButton = screen.getByRole('button', {
      name: 'Decrement Counter',
    });
    await user.click(incrementButton);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('0');
  });
});
