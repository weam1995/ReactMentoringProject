import './searchForm.css';
import { useState, useRef, FormEvent } from 'react';

interface SearchFormProps {
  initialSearchQuery: string;
  onSearch: (inputData: string) => void;
}

const SearchForm = ({ initialSearchQuery, onSearch }: SearchFormProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputElement.current) onSearch(inputElement.current.value);
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter'){
  //     e.preventDefault();
  //     handleSubmit(formEvent);
  //   }
  // };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="text"
        ref={inputElement}
        className="searchInput"
        placeholder="What are you looking for ?"
        defaultValue={initialSearchQuery}
        // onKeyDown={handleKeyDown}
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
