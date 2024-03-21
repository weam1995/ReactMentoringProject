import { Dropdown, DropdownItem } from "flowbite-react";
import "./movie-title.css";
import React, { useState } from "react";
import DeleteMovieConfirmation from "../DeleteMovieConfirmation/DeleteMovieConfirmation";
import Modal from "../Modal/Modal";
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
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  return (
    <div className="movie">
      <div className="movie-image-container">
        <img
          className="movie-img"
          src={imageUrl}
          alt={movieName}
          onClick={onMovieSelect}
        />
        <div className="options-dropdown">
          <button>Edit</button>
          <button onClick={() => setShowDeleteConfirmation(true)}>
            Delete
          </button>
        </div>
      </div>
      {showDeleteConfirmation ? (
        <Modal
          title="Delete Movie"
          closeModalHandler={() => setShowDeleteConfirmation(false)}
        >
          <DeleteMovieConfirmation />
        </Modal>
      ) : null}

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
