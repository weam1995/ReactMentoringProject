import "./movie-form.css";
interface DeleteMovieConfirmationProps {
  onSubmitHandler: (e: any) => void;
}
const DeleteMovieConfirmation = ({
  onSubmitHandler,
}: DeleteMovieConfirmationProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Are you sure you want to delete this movie? </p>
      <footer className="modal-footer">
        <button className="submit" type="submit">
          Confirm
        </button>
      </footer>
    </form>
  );
};
export default DeleteMovieConfirmation;
