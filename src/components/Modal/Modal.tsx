import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseButton } from "@chakra-ui/react";
import "./modal.css";
interface ModalProps {
  title: string;
  children: ReactNode;
  closeModalHandler: () => void;
}
const Modal = ({ title, children, closeModalHandler }: ModalProps) => {
  const modalRootElement: HTMLElement = document.getElementById(
    "addMovieModal"
  ) as HTMLElement;
  return createPortal(
    <div className="modal-container">
      <div className="modal">
        <header className="modal-header">
          <h2>{title}</h2>
          <CloseButton
            className="close-button"
            aria-label="Close"
            onClick={closeModalHandler}
          />
        </header>
        <main className="modal-content">{children}</main>
      </div>
    </div>,
    modalRootElement
  );
};
export default Modal;
