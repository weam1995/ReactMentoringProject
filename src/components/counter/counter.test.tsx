import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import Counter from './counter';
import user from '@testing-library/user-event';
describe('Counter', () => {
  test('check component renders correctly', () => {
    render(<Counter initialValue={1} />);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toBeInTheDocument();
    //const incrementButton =
  });

  test('renders a count of 1', () => {
    render(<Counter initialValue={1} />);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking on increment button', async () => {
    user.setup();
    render(<Counter initialValue={1} />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment Counter',
    });
    await user.click(incrementButton);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('2');
  });
  test('renders a count of 2 after clicking on increment button', async () => {
    user.setup();
    render(<Counter initialValue={1} />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment Counter',
    });
    await user.click(incrementButton);
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('2');
  });
  test('renders a count of 0 after clicking on decrement button', async () => {
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
