import Modal from "../Modal/Modal";
interface DeleteMovieConfirmationProps {
  showModal: boolean;
  onCloseHandler: () => void;
  onSubmitHandler: (e: any) => void;
}
const DeleteMovieModal = ({
  showModal,
  onCloseHandler,
  onSubmitHandler,
}: DeleteMovieConfirmationProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler(e);
  };

  return (
    <>
      {showModal ? (
        <Modal title="Delete Movie" closeModalHandler={onCloseHandler}>
          <form onSubmit={handleSubmit}>
            <p>Are you sure you want to delete this movie? </p>
            <footer className="modal-footer">
              <button className="submit" type="submit">
                Confirm
              </button>
            </footer>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
export default DeleteMovieModal;
