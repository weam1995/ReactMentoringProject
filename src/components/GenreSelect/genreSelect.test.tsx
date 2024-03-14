import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

let genreList: Genre[];
describe('Test suite for GenreList Component', () => {
  beforeEach(() => {
    genreList = ['Horror', 'Comedy', 'Romantic'];
  });

  test('check all genres are displayed correctly', () => {
    const SelectGenreMockHandler = vi.fn();
    render(
      <GenreSelect
        genreList={genreList}
        selectedGenre="Comedy"
        onSelect={SelectGenreMockHandler}
      />
    );
    genreList.map((genre) => {
      const genreListItem = screen.getByTestId(`genreListItem-${genre}`);
      expect(genreListItem).toBeInTheDocument();
    });
  });

  test('check component highlights the selected genre', () => {
    const SelectGenreMockHandler = vi.fn();
    const selectedGenre = genreList[0];
    render(
      <GenreSelect
        genreList={genreList}
        selectedGenre={selectedGenre}
        onSelect={SelectGenreMockHandler}
      />
    );
    const selectedGenreItem = screen.getByRole('link', { name: selectedGenre });
    expect(selectedGenreItem).toHaveClass('selected-item');
  });

  test('check clicking on genre gets the correct genre ', async () => {
    user.setup();
    const SelectGenreMockHandler = vi.fn();
    render(
      <GenreSelect
        genreList={genreList}
        selectedGenre="Horror"
        onSelect={SelectGenreMockHandler}
      />
    );
    const genreListItem = screen.getByTestId(`genreListItem-${genreList[1]}`);
    await user.click(genreListItem);
    expect(SelectGenreMockHandler).toBeCalledTimes(1);
  });
});