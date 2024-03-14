import { describe, expect, test } from 'vitest';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from './SearchForm';
import user, { userEvent } from '@testing-library/user-event';
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

  test('check on change is called with correct value on pressing Enter ', async () => {
    const onSearch = vi.fn();
    render(
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch} />
    );
    const searchbox = screen.getByRole('textbox');
    await user.type(searchbox, '{enter}');
    expect(onSearch).toHaveBeenCalledWith(initialSearchQuery);
  });
});