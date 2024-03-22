import "./movie-details.css";

export interface MovieDetailsProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  rating: number;
  duration: number;
  description: string;
}

const MovieDetails = ({
  imageUrl,
  movieName,
  releaseYear,
  rating,
  duration,
  description,
}: MovieDetailsProps) => {
  const formatDuration = (durationInMinutes: number = 0) => {
    if (durationInMinutes >= 0) {
      const hours = Math.floor(durationInMinutes / 60);
      const remainingMinutes = durationInMinutes % 60;
      console.log(`${hours}h`);
      return `${`${hours}h`}${
        remainingMinutes ? ` ${remainingMinutes}min` : ""
      }`;
    }
    return;
  };
  return (
    <div className="movie-details-container">
      <img className="movie-details-img" src={imageUrl} alt={movieName} />
      <div className="movie-details">
        <div className="inline-container">
          <h2 className="inline-item white">{movieName}</h2>
          <span data-testid="rating" className="inline-item rating">
            {rating}
          </span>
        </div>
        <div className="inline-container red">
          <span data-testid="releaseYear" className="inline-item">
            {releaseYear}
          </span>
          <span data-testid="duration" className="inline-item">
            {formatDuration(duration)}
          </span>
        </div>
        <div className="inline-container">
          <p data-testid="description">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
