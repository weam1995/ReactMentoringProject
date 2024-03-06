import './searchForm.css';
import { useState, useRef, FormEvent, KeyboardEvent } from 'react';

interface SearchFormProps {
  initialSearchQuery: string;
  onSearch: (inputData: string) => void;
}

const SearchForm = ({ initialSearchQuery, onSearch }: SearchFormProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputElement.current) onSearch(inputElement.current.value);
  };

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
