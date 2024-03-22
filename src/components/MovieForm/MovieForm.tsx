import { useEffect, useState } from "react";
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
  value: Genre;
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
  const getSelectOptionsForGenres = (genres: Genre[]) => {
    let optionsList: Option[] = [];
    genres.map((genre: Genre) => {
      optionsList.push(options.filter((x) => x.label == genre)[0]);
    });
    return optionsList;
  };

  const getGenresForSelectOptions = (options: Option[]) => {
    let genres: Genre[] = [];
    options.map((option) => genres.push(option.value));
    return genres;
  };

  const [options] = useState(getOptionsList(genreList) || []);

  const [selectedGenres, setSelectedGenres] = useState(
    getSelectOptionsForGenres(movie?.genre || [])
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
  useEffect(() => {
    setFormData({
      ...formData,
      genre: getGenresForSelectOptions(selectedGenres),
    });
  }, [selectedGenres]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: new Date(value) });
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
          name="title"
        />
      </div>
      <div className="field short-field">
        <label>Release Date</label>
        <input
          type="date"
          placeholder="Select Date"
          value={formData.releaseDate.toLocaleDateString("en-CA")}
          onChange={handleDateChange}
          name="releaseDate"
        />
      </div>
      <div className="field long-field">
        <label>Movie URL</label>
        <input
          type="text"
          placeholder="https://"
          value={formData.movieURL}
          onChange={handleInputChange}
          name="movieURL"
        />
      </div>
      <div className="field short-field">
        <label>Rating</label>
        <input
          type="text"
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
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
          name="runtime"
        />
      </div>
      <div className="field overview-field">
        <label>Overview</label>
        <textarea
          placeholder="Movie description"
          value={formData.overview}
          name="overview"
          onChange={handleInputChange}
        />
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
