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
});
