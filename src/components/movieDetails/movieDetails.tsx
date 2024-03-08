import './movieDetails.css';

interface MovieDetailsProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  rating: number;
  duration: number;
  description: string;
}

const MovieDetails = (props: MovieDetailsProps) => {
  const formatDuration = () => {
    const hours = Math.floor(props.duration / 60);
    const remainingMinutes = props.duration % 60;
    return `${hours ? `${hours}h` : ''}${
      remainingMinutes ? ` ${remainingMinutes}min` : ''
    }`;
  };
  return (
    <div className="movieDetailsConntainer">
      <img className="movieDetailsImg" src={props.imageUrl} />
      <div className="movieDetails">
        <div className="inline-Container">
          <h2 className="inline-item white">{props.movieName}</h2>
          <span className="inline-item rating">{props.rating}</span>
        </div>
        <div className="inline-container red">
          <span className="inline-item">{props.releaseYear}</span>
          <span className="inline-item">{formatDuration()}</span>
        </div>
        <div className="inline-Container">
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
