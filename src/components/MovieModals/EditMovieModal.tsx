import Modal from "../Modal/Modal";
import MovieForm from "../MovieForm/MovieForm";
import { MovieProps } from "../../interfaces";
interface EditMovieModalProps {
  showModal: boolean;
  onCloseHandler: () => void;
  onSubmitHandler: (e: any) => void;
}
const dummyMovie: MovieProps = {
  title: "Titanic",
  releaseDate: new Date("2000-02-03"),
  movieURL: "www.imdb.com/titanic",
  rating: 8.0,
  genre: ["Romantic", "Thrilling"],
  runtime: 130,
  overview: `James Cameron's "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.
    `,
};

const EditMovieModal = ({
  showModal,
  onCloseHandler,
  onSubmitHandler,
}: EditMovieModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler(e);
  };

  return (
    <>
      {showModal ? (
        <Modal title="Edit Movie" closeModalHandler={onCloseHandler}>
          <MovieForm movie={dummyMovie} onSubmitHandler={handleSubmit} />
        </Modal>
      ) : null}
    </>
  );
};
export default EditMovieModal;
