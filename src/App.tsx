import { useState } from 'react';
import Counter from './components/counter/Counter';
import Header from './components/header/Header';
import GenreSelect from './components/genreSelect/GenreSelect';
import './App.css';
import MovieTitle from './components/movieTitle/movieTitle';
import MovieDetails from './components/movieDetails/MovieDetails';
import SortControl from './components/sortControl/SortControl';

function App() {
  const genreList: Genre[] = ['Horror', 'Romantic', 'Thrilling', 'Comedy'];
  const movieSortOptions: movieSortOption[] = ['Release Date', 'Title'];

  const [selectedGenre, setSelectedGenre] = useState(genreList[0]);
  const [selectedSortOption, setSelectedSortOption] = useState(
    movieSortOptions[0]
  );
  const onSelectGenre = (genre: Genre) => {
    console.log('set selected genre');
    setSelectedGenre(genre);
  };
  const onSelectSortOption = (sortOption: movieSortOption) => {
    setSelectedSortOption(sortOption);
    console.log('sort option changed to ' + sortOption);
  };
  const movieClickHandler = () => {
    console.log('Movie Selected');
  };
  return (
    <div className="pageLayout">
      {/* <Counter initialValue={1} />
      <Header />
      <div className="genreContainer">
        <GenreSelect
          genreList={genreList}
          selectedGenre={selectedGenre}
          onSelect={onSelectGenre}
        />
      </div>

      <div className="moviesList">
        <MovieTitle
          imageUrl="https://m.media-amazon.com/images/S/pv-target-images/c8d3558dfe682e8a8c5d797623548e1fc85b45a7bc7a6fa25799940012532f53.jpg"
          movieName="Eat Pray Love"
          releaseYear={2010}
          relevantGenres={['Romantic', 'Thrilling']}
          onMovieSelect={movieClickHandler}
        />
      </div> */}
      <div className="genreWithSortContainer">
        <GenreSelect
          genreList={genreList}
          selectedGenre={selectedGenre}
          onSelect={onSelectGenre}
        />
        <SortControl
          sortOptions={movieSortOptions}
          defaultSelection={selectedSortOption}
          onSelect={onSelectSortOption}
        />
      </div>

      <MovieDetails
        imageUrl="https://m.media-amazon.com/images/S/pv-target-images/c8d3558dfe682e8a8c5d797623548e1fc85b45a7bc7a6fa25799940012532f53.jpg"
        movieName="Eat Pray Love"
        releaseYear={2010}
        rating={8.9}
        duration={260}
        description=' A Married woman realizes how unhappy her marriage really is, and that her life needs to go in a different direction. After a painful divorce, she takes off on a round-the-world journey to "find herself".'
      />
    </div>
  );
}

export default App;
