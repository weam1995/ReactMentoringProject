import './searchForm.css';
import { useState } from 'react';

interface SearchFormProps {
  initialSearchQuery: string;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({ initialSearchQuery, onSearch }: SearchFormProps) => {
  const [searchText, setSearchText] = useState(initialSearchQuery);
  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      e.preventDefault();
      setSearchText(e.target.value);
    }
  };
  return (
    <form className="formContainer" onSubmit={onSearch}>
      <input
        id="searchInput"
        type="text"
        className="searchInput"
        placeholder="What are you looking for ?"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
