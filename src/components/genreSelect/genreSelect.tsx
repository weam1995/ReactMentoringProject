import './genreSelect.css';
const GenreSelect = ({genreList, selectedGenre, onSelect}: GenreSelectProps)=> {
return (
    <ul className="genreList">
        {genreList.map((genre) => {
            return(
                <li className="listItem" key={genre} onClick={onSelect(genre)}><a href='#' className={genre === selectedGenre ? "selectedItem" : ""}>{genre}</a></li>
            )
        })}
    </ul> 
)
}
export default GenreSelect;