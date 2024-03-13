import { describe, expect, test } from 'vitest';
import { render, RenderResult } from '@testing-library/react';
import MovieDetails from './MovieDetails';

let renderedComponent: RenderResult;

describe('Test suite for MovieDetails Component', () => {
  beforeEach(() => {
    renderedComponent = render(
      <MovieDetails
        imageUrl="https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg"
        movieName="Interstellar"
        releaseYear={2014}
        duration={120}
        rating={9.3}
        description="When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers"
      />
    );
  });
  test('check all elements are rendered correctly', () => {
    const image = renderedComponent.getByRole('img');
    const name = renderedComponent.getByRole('heading', {
      name: /Interstellar/i,
    });
    const rating = renderedComponent.getByTestId(/rating/i);
    const description = renderedComponent.getByTestId(/description/i);
    const duration = renderedComponent.getByTestId(/duration/i);
    const releaseYear = renderedComponent.getByTestId(/releaseYear/i);

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
  });

  test('check all duration is rendered in correct format', () => {
    const duration = renderedComponent.getByTestId(/duration/i);
    expect(duration).toHaveTextContent('2h');
  });
});
