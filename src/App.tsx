import { useState } from 'react'
import Counter from './components/counter';
import Header from './components/header/header';
import './App.css';

function App() {
  let genreList=["Horror","Romantic","Thrilling", "Comedy"];
  const [selectedGenre, setSelectedGenre] = useState('Horror');

  const onSelectGenre = (genre:string) => () => {
    console.log(genre);
    setSelectedGenre(genre);
}
  return (
    <>
        <Counter initialValue={1} /> 
        <div className= "pageLayout">
         <Header genreList={genreList} selectedGenre={selectedGenre} onSelect = {onSelectGenre}></Header>
          <div className="moviesList">
            <p> List of {selectedGenre} Movies </p>
          </div>
        </div>

    </>
  )
}

export default App;

