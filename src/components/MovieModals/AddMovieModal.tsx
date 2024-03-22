import Modal from "../Modal/Modal";
import MovieForm from "../MovieForm/MovieForm";
interface AddMovieModalProps {
  showModal: boolean;
  onCloseHandler: () => void;
  onSubmitHandler: (e: any) => void;
}

const AddMovieModal = ({
  showModal,
  onCloseHandler,
  onSubmitHandler,
}: AddMovieModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler(e);
  };

  return (
    <>
      {showModal ? (
        <Modal title="Edit Movie" closeModalHandler={onCloseHandler}>
          <MovieForm onSubmitHandler={handleSubmit} />
        </Modal>
      ) : null}
    </>
  );
};
export default AddMovieModal;
