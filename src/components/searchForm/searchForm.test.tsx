import { describe, expect, test } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchForm from './searchForm';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Search Form tests', () => {
  test('check component initial search query correctly', async () => {
    user.setup();
    const SearchHandlerMock = vi.fn();
    render(
      <SearchForm
        initialSearchQuery="Hello World"
        onSearch={SearchHandlerMock}
      />
    );
    const searchbox = screen.getByRole('textbox');
    expect(searchbox).toHaveValue('Hello World');
  });

  test('check on change is called with correct value on Click Search', async () => {
    user.setup();
    const onSearch = vi.fn();
    render(<SearchForm initialSearchQuery="" onSearch={onSearch} />);
    const searchbox = screen.getByRole('textbox');
    await user.type(searchbox, 'Friends');
    const searchButton = screen.getByRole('button', {
      name: 'Search',
    });
    await user.click(searchButton);
    expect(searchbox).toHaveValue('Friends');
  });

  test('check on change is called with correct value on pressing Enter ', () => {
    user.setup();
    const onSearch = vi.fn();
    render(<SearchForm initialSearchQuery="Hello Weam" onSearch={onSearch} />);
    const searchbox = screen.getByRole('textbox');
    fireEvent.keyPress(searchbox, { key: 'Enter', keyCode: 13 });
    expect(searchbox).toHaveValue('Hello Weam');
  });
});
