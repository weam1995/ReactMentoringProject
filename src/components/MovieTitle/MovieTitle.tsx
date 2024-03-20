import "./movie-title.css";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
export interface MovieTitleProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  relevantGenres: Genre[];
  onMovieSelect: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const MovieTitle = ({
  imageUrl,
  movieName,
  releaseYear,
  relevantGenres,
  onMovieSelect,
}: MovieTitleProps) => {
  const formatRelevantGenres = (genreList: string[]) =>
    genreList.length > 0 ? genreList.join(" & ") : "";

  return (
    <div className="movie">
      <img
        className="movie-img"
        src={imageUrl}
        alt={movieName}
        onClick={onMovieSelect}
      />
      <Dropdown>
        <Dropdown.Toggle />
        <Dropdown.Menu title="">
          <Dropdown.Header>Options</Dropdown.Header>
          <Dropdown.Item>abcd</Dropdown.Item>
          <Dropdown.Item>erty</Dropdown.Item>
          <Dropdown.Item>hnjm</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="movie-info">
        <h5 data-testid="movieName" className="movie-info__elem">
          {movieName}
        </h5>
        <h5 data-testid="releaseYear" className="movie-info__elem with-border ">
          {releaseYear}
        </h5>
        <h5 data-testid="relatedGenres" className="movie-info__elem">
          {formatRelevantGenres(relevantGenres)}
        </h5>
      </div>
    </div>
  );
};
export default MovieTitle;
