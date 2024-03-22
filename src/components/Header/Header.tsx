import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";
import "./header.css";
import AddMovieModal from "../MovieModals/AddMovieModal";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSearch = () => {};

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const submitMovie = () => {};
  return (
    <>
      <div className="header">
        <button className="add-movie-button" onClick={handleShowModal}>
          Add Movie
        </button>
        <AddMovieModal
          showModal={showModal}
          onCloseHandler={handleCloseModal}
          onSubmitHandler={() => submitMovie}
        />
        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="border-rectangle"></div>
    </>
  );
};
export default Header;
