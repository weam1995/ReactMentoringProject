import SearchForm from '../searchForm/searchForm';

const Header = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Search is Working !!');
  };

  return (
    <>
      <div className="header">
        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="boarderRectangle"></div>
    </>
  );
};
export default Header;
