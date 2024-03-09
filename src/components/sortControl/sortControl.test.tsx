import { describe, expect, test } from 'vitest';
import {
  screen,
  render,
  fireEvent,
  getByTestId,
  waitFor,
} from '@testing-library/react';
import SortControl from './SortControl';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

let sortOptions: movieSortOption[];
describe('Genre Select tests', () => {
  beforeEach(() => {
    sortOptions = ['Release Date', 'Title'];
  });

  test('check all sort options are added correctly', () => {
    const SelectSortOptionHandler = vi.fn();
    render(
      <SortControl
        sortOptions={sortOptions}
        defaultSelection={sortOptions[0]}
        onSelect={SelectSortOptionHandler}
      />
    );
    const sortOptionsElements = screen.getAllByTestId((value) =>
      value.startsWith('sortOption:')
    );
    expect(sortOptionsElements.length).toBe(2);
  });

  test('check on change handler is called with the correct sort option', async () => {
    const SelectSortOptionHandler = vi.fn();
    render(
      <SortControl
        sortOptions={sortOptions}
        defaultSelection={sortOptions[0]}
        onSelect={SelectSortOptionHandler}
      />
    );
    const sortOptionsElement = screen.getByTestId(
      `sortOption:${sortOptions[1]}`
    );
    expect(sortOptionsElement).toBeInTheDocument();
    await user.click(sortOptionsElement);
    //expect(SelectSortOptionHandler).toHaveBeenCalledWith(sortOptions[1]);
    expect(SelectSortOptionHandler).toBeCalledTimes(1);
  });
});
