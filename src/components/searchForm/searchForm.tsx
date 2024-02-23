import './searchForm.css';
import { useState } from 'react';
const SearchForm = ({initialSearchQuery, onSearch}: SearchFormProps) => {
    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target){
            setSearchText(e.target.value);
        }
    }
return (
    <>
    <form className= "formContainer" onSubmit={onSearch}>
        <input type= "text" className="searchInput" placeholder={initialSearchQuery} value={searchText} onChange={handleSearchTextChange} />
        <button type= "submit" className="searchButton">Search</button>
    </form>
    </>
)
}
export default SearchForm;