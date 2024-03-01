import SearchForm from '../searchForm/searchForm';
import GenreSelect from '../genreSelect/genreSelect';
interface HeaderProps {
  genreList: string[];
  selectedGenre: string;
  onSelect: (genre: string) => React.MouseEventHandler<HTMLLIElement>;
}

const Header = ({ genreList, selectedGenre, onSelect }: HeaderProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Search is Working !!');
  };

  return (
    <>
      <div className="header">
        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="boarderRectangle"></div>
      <div className="genreContainer">
        <GenreSelect
          genreList={genreList}
          selectedGenre={selectedGenre}
          onSelect={onSelect}
        />
      </div>
    </>
  );
};
export default Header;
