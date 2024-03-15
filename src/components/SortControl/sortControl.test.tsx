import { describe, expect, test, Mock } from 'vitest';
import { render, RenderResult} from '@testing-library/react';
import SortControl from './SortControl';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

let sortOptions: movieSortOption[];
let renderedComponent: RenderResult;
let SelectSortOptionHandler: Mock<any, void>;
describe('Sort Control component tests', () => {
  beforeEach(() => {
    sortOptions = ['Release Date', 'Title'];
    SelectSortOptionHandler = vi.fn();
    renderedComponent = render(
      <SortControl
        defaultSelection={sortOptions[0]}
        onSelect={SelectSortOptionHandler}
      />
    );
  });

  test('check all sort options are added correctly', () => {
    const sortOptionsElements: HTMLElement[] = renderedComponent.getAllByTestId(
      (value) => value.startsWith('sortOption:')
    );
    expect(sortOptionsElements.length).toBe(2);
    expect(sortOptionsElements.values).toEqual(sortOptions.values);
  });

  test('check on change handler is called with the correct sort option', async () => {
    user.setup();
    const newlySelectedOption = renderedComponent.getByTestId(
      `sortOption:${sortOptions[1]}`
    );
    await user.selectOptions(
      renderedComponent.getByRole('combobox'),
      newlySelectedOption
    );
    expect(SelectSortOptionHandler).toHaveBeenCalledWith(sortOptions[1]);
  });
});