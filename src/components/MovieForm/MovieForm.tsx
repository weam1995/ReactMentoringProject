import { useRef } from "react";
import { MovieProps } from "../../interfaces";
import { MultiSelect } from "react-multi-select-component";
import "./movie-form.css";
interface MovieFormProps {
  movie: MovieProps;
  onSubmitHandler: () => void;
}

const MovieForm = ({ movie, onSubmitHandler }: MovieFormProps) => {
  //   const inputElement = useRef<HTMLInputElement>(null);

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (inputElement.current) onSearch(inputElement.current.value);
  //   };

  return (
    <form className="movie-form-container" onSubmit={onSubmitHandler}>
      <div className="field">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Release Date</label>
        <input type="date" />
      </div>
      <div className="field">
        <label>Movie URL</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Rating</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Overview</label>
        <textarea />
      </div>
      {/* <div className="field">
        <label>Genre</label>
        <MultiSelect
          options={movie.genre}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div> */}
    </form>
  );
};
export default MovieForm;
