import { useState } from 'react';
import SearchForm from '../searchForm/SearchForm';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (inputData: string) => {
    console.log(inputData);
  };

  const addMovieClickHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="header">
        <button onClick={addMovieClickHandler}>Add Movie</button>
        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="border-rectangle"></div>
    </>
  );
};
export default Header;
