import './genre-select.css';
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
    <ul className="genre-list">
      {genreList.map((genre) => {
        return (
          <li
            className="genre-list__item"
            key={genre}
            onClick={() => {
              onSelect(genre);
            }}
            data-testid={`genreListItem-${genre}`}
          >
            <a
              href="#"
              className={genre === selectedGenre ? 'selected-item' : ''}
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