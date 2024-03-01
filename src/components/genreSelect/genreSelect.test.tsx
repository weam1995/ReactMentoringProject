import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import GenreSelect from './genreSelect';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Genre Select tests', () => {
  test('check component renders all genres passed in props', async () => {
    user.setup();
    const SelectGenreMockHandler = vi.fn();
    const genreList: Genre[] = ['Horror', 'Comedy', 'Romantic'];
    render(
      <GenreSelect
        genreList={genreList}
        selectedGenre="Comedy"
        onSelect={SelectGenreMockHandler}
      />
    );
    const genreListItems = screen.getAllByTestId('genreListItem');
    expect(genreListItems.length).toBe(genreList.length);
  });

  test('check component highlights the selected genre', async () => {
    user.setup();
    const SelectGenreMockHandler = vi.fn();
    const genreList: Genre[] = ['Horror', 'Comedy', 'Romantic'];
    const selectedGenre = genreList[0];
    render(
      <GenreSelect
        genreList={genreList}
        selectedGenre={selectedGenre}
        onSelect={SelectGenreMockHandler}
      />
    );
    const selectedGenreItem = screen.getByRole('link', { name: selectedGenre });
    expect(selectedGenreItem).toHaveClass('highlightedItem');
  });

  test('check clicking on genre gets the correct genre ', async () => {
    user.setup();
    const SelectGenreMockHandler = vi.fn();
    const genreList: Genre[] = ['Horror', 'Comedy', 'Romantic'];
    render(
      <GenreSelect
        genreList={genreList}
        selectedGenre="Horror"
        onSelect={SelectGenreMockHandler}
      />
    );
    const genreListItems = screen.getAllByTestId('genreListItem');
    await user.click(genreListItems[1]);
    expect(SelectGenreMockHandler).toBeCalledTimes(1);
  });
});
