import { ReactNode} from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
interface ModalProps {
//   title: string;
  show:boolean;
  children: ReactNode;
  closeModalHandler:() => void;
}
const Modal = ({show,children,closeModalHandler}: ModalProps) => {
    if(!show) return null;
    const modalRootElement:HTMLElement = document.getElementById("addMovieModal") as HTMLElement;
  return createPortal(
    <div className='modal'>
        <div className='modal-container'>
        <div>
        {children}
        </div>
        </div>
        <button onClick={closeModalHandler}>Close Modal</button>
    </div>,
    modalRootElement
  );
};
export default Modal;