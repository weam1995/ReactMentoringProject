import './search-form.css';
import { useRef } from 'react';

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

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="text"
        ref={inputElement}
        className="form__input"
        placeholder="What are you looking for ?"
        defaultValue={initialSearchQuery}
      />
      <button type="submit" className="form__submit-button">
        Search
      </button>
    </form>
  );
};
export default SearchForm;