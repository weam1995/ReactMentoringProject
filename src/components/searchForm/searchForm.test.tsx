import { describe, expect, test } from 'vitest';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from './searchForm';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

let initialSearchQuery: string;

describe('Search Form tests', () => {
  beforeEach(() => {
    initialSearchQuery = 'Hello World';
  });
  test('check initial search input displayed correctly', () => {
    const SearchHandlerMock = vi.fn();
    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={SearchHandlerMock}
      />
    );
    const searchbox = screen.getByRole('textbox');
    expect(searchbox).toHaveValue(initialSearchQuery);
  });

  test('check on change is called with correct value on Click Search', async () => {
    user.setup();
    const onSearch = vi.fn();
    render(
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch} />
    );
    const searchButton = screen.getByRole('button', {
      name: 'Search',
    });
    await user.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith(initialSearchQuery);
  });

  test('check on change is called with correct value on pressing Enter ', () => {
    const onSearch = vi.fn();
    render(
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch} />
    );
    screen.debug();
    const searchbox = screen.getByRole('textbox');
    fireEvent.keyDown(searchbox, { key: 'Enter', keyCode: 13 });
    expect(onSearch).toHaveBeenCalledWith(initialSearchQuery);
  });
});
