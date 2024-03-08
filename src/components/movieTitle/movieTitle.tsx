import './movieTitle.css';

interface MovieTitleProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  relevantGenres: Genre[];
  onMovieSelect: () => void;
}

const MovieTitle = (props: MovieTitleProps) => {
  return (
    <div className="movie">
      <img
        className="movieImg"
        src={props.imageUrl}
        onClick={props.onMovieSelect}
      />
      <div className="movieInfo">
        <h5 className="info">{props.movieName}</h5>
        <h5 className="info withBorder">{props.releaseYear}</h5>
        <h5 className="info">{props.relevantGenres.join(' & ')}</h5>
      </div>
    </div>
  );
};
export default MovieTitle;
