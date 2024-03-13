import { useState } from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import GenreSelect from './components/GenreSelect/GenreSelect';
import './App.css';

function App() {
  const genreList: Genre[] = ['Horror', 'Romantic', 'Thrilling', 'Comedy'];
  const [selectedGenre, setSelectedGenre] = useState('Horror');

  const onSelectGenre = (genre: Genre) => {
    console.log('set selected genre');
    setSelectedGenre(genre);
  };

  return (
    <div className="pageLayout">
      <Counter initialValue={1} />
      <Header />
      <div className="genreContainer">
        <GenreSelect
          genreList={genreList}
          selectedGenre={selectedGenre}
          onSelect={onSelectGenre}
        />
      </div>

      <div className="moviesList">
        <p> List of {selectedGenre} Movies </p>
      </div>
    </div>
  );
}

export default App;
