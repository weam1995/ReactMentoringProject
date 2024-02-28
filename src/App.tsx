import { useState } from 'react';
import Counter from './components/counter/counter';
import Header from './components/header/header';
import './App.css';

function App() {
  let genreList = ['Horror', 'Romantic', 'Thrilling', 'Comedy'];
  const [selectedGenre, setSelectedGenre] = useState('Horror');

  const onSelectGenre = (genre: string) => () => {
    setSelectedGenre(genre);
  };
  return (
    <div className="pageLayout">
      <Counter initialValue={1} />
      <Header
        genreList={genreList}
        selectedGenre={selectedGenre}
        onSelect={onSelectGenre}
      />
      <div className="moviesList">
        <p> List of {selectedGenre} Movies </p>
      </div>
    </div>
  );
}

export default App;
