import SearchForm from '../searchForm/searchForm';
import GenreSelect from '../genreSelect/genreSelect';
const Header = (props:GenreSelectProps) => {

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
          console.log(e);    
        console.log("Search is Working !!");
    
      }
      
    return (
        <>
            <div className="header">
                <SearchForm initialSearchQuery='What are you looking for ?' onSearch={handleSearch} />
            </div>
            <div className="boarderRectangle"></div>
            <div className="genreContainer">
                <GenreSelect genreList={props.genreList} selectedGenre={props.selectedGenre} onSelect={props.onSelect} />
            </div>
        </>
    )
}
export default Header;