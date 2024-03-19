import { SyntheticEvent, useEffect, useState } from "react";
import { MovieProps } from "../../interfaces";
// import { MultiSelect } from "primereact/multiselect";
import "./movie-form.css";
// import "primereact/resources/primereact.css";
// import "primereact/resources/themes/saga-blue/theme.css";
import { MultiSelect } from "react-multi-select-component";
interface MovieFormProps {
  movie?: MovieProps;
  onSubmitHandler: (e: any) => void;
}
interface Option {
  label: string;
  value: string;
}
const MovieForm = ({ movie, onSubmitHandler }: MovieFormProps) => {
  const genreList: Genre[] = ["Horror", "Romantic", "Thrilling", "Comedy"];

  const getOptionsList = (genres: Genre[]) => {
    let optionsList: Option[] = [];
    genres.map((genre: Genre) =>
      optionsList.push({ label: genre, value: genre })
    );
    return optionsList;
  };
  const getSelectedOptionsList = (selectedGenres: Genre[]) => {
    let selectedOptionsList: Option[] = [];
    selectedGenres.map((genre: Genre) => {
      selectedOptionsList.push(options.filter((x) => x.label == genre)[0]);
    });
    return selectedOptionsList;
  };

  const [options, setOptions] = useState(getOptionsList(genreList) || []);

  const [selectedGenres, setSelectedGenres] = useState(
    getSelectedOptionsList(movie?.genre || [])
  );
  const defaultFormData = {
    title: "",
    releaseDate: new Date(),
    movieURL: "",
    rating: 0,
    genre: [],
    overview: "",
    runtime: 0,
  };
  const [formData, setFormData] = useState<MovieProps>(
    movie || defaultFormData
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onSubmitHandler(e);
  };
  return (
    <form className="movie-form-container" onSubmit={handleSubmit}>
      <div className="field long-field">
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="field short-field">
        <label>Release Date</label>
        <input
          type="date"
          placeholder="Select Date"
          value={formData.releaseDate.toLocaleDateString("en-CA")}
          onChange={handleInputChange}
        />
      </div>
      <div className="field long-field">
        <label>Movie URL</label>
        <input
          type="text"
          placeholder="https://"
          value={formData.movieURL}
          onChange={handleInputChange}
        />
      </div>
      <div className="field short-field">
        <label>Rating</label>
        <input
          type="text"
          value={formData.rating}
          onChange={handleInputChange}
        />
      </div>
      <div className="field long-field">
        <label>Genre</label>
        <MultiSelect
          value={selectedGenres}
          options={options}
          onChange={setSelectedGenres}
          labelledBy="Select Genres"
        />
      </div>
      <div className="field short-field">
        <label>Runtime</label>
        <input
          type="text"
          placeholder="minutes"
          value={formData.runtime}
          onChange={handleInputChange}
        />
      </div>
      <div className="field overview-field">
        <label>Overview</label>
        <textarea placeholder="Movie description" value={formData.overview} />
      </div>
      <footer className="modal-footer">
        <button className="submit" type="submit">
          Submit
        </button>
        <button className="reset">Reset</button>
      </footer>
    </form>
  );
};
export default MovieForm;
