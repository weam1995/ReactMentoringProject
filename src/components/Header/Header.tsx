import Modal from '../Modal/Modal';
import SearchForm from '../SearchForm/SearchForm';
import { useState } from 'react';
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (inputData: string) => {
  };

  return (
    <>
      <div className="header">
        <button onClick={()=> setShowModal(true)}>Open Modal</button>
        <Modal show={showModal} closeModalHandler={()=> setShowModal(false)}>
          Fancy Modal
        </Modal>
        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="border-rectangle"></div>
    </>
  );
};
export default Header;