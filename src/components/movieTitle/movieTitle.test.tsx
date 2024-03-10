import { Mock, describe, expect, test } from 'vitest';
import { render, RenderResult } from '@testing-library/react';
import MovieTitle from './MovieTitle';
import user from '@testing-library/user-event';
import { vi } from 'vitest';

let renderedComponent: RenderResult;
let onSelectMovieHandler: Mock<any, void>;
describe('Show movie information tests', () => {
  beforeEach(() => {
    onSelectMovieHandler = vi.fn();
    renderedComponent = render(
      <MovieTitle
        imageUrl="https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg"
        movieName="Interstellar"
        releaseYear={2014}
        relevantGenres={['Thrilling', 'Romantic']}
        onMovieSelect={onSelectMovieHandler}
      />
    );
  });
  test('check all elements are rendered correctly', () => {
    const image = renderedComponent.getByRole('img');
    const name = renderedComponent.getByTestId(/movieName/i);
    const releaseYear = renderedComponent.getByTestId(/releaseYear/i);
    const relatedGenres = renderedComponent.getByTestId(/relatedGenres/i);

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
    expect(relatedGenres).toBeInTheDocument();
  });

  test('checks if onClick to movie fires action correctly', async () => {
    user.setup;
    const image = renderedComponent.getByRole('img');
    await user.click(image);
    expect(onSelectMovieHandler).toHaveBeenCalledTimes(1);
  });
});
