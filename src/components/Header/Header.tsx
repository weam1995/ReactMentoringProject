import Modal from "../Modal/Modal";
import MovieForm from "../MovieForm/MovieForm";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";
import { MovieProps } from "../../interfaces";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const movieProps: MovieProps = {
    title: "Titanic",
    releaseDate: new Date("2000-02-03"),
    movieURL: "www.imdb.com/titanic",
    rating: 8.0,
    genre: ["Romantic", "Thrilling"],
    runtime: 130,
    overview: `James Cameron's "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.
    `,
  };
  const handleSearch = (inputData: string) => {};

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const submitMovie = (e: any) => {
    console.log(e.value);
    console.log("Movie submitted");
  };
  return (
    <>
      <div className="header">
        <button onClick={handleShowModal}>Add Movie</button>
        {showModal ? (
          <Modal title="Add Movie" closeModalHandler={handleCloseModal}>
            <MovieForm movie={movieProps} onSubmitHandler={submitMovie} />
          </Modal>
        ) : null}

        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="border-rectangle"></div>
    </>
  );
};
export default Header;
