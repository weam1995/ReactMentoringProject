import './genreSelect.css';
interface GenreSelectProps {
  genreList: Genre[];
  selectedGenre: Genre;
  onSelect: (genre: Genre) => void;
}

const GenreSelect = ({
  genreList,
  selectedGenre,
  onSelect,
}: GenreSelectProps) => {
  return (
    <ul className="genreList">
      {genreList.map((genre) => {
        return (
          <li
            className="genreListItem"
            key={genre}
            onClick={() => {
              onSelect(genre);
            }}
            data-testid={`genreListItem-${genre}`}
          >
            <a
              href="#"
              className={genre === selectedGenre ? 'selectedItem' : ''}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default GenreSelect;
