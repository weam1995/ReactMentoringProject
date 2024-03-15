import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  const handleSearch = (inputData: string) => {
  };

  return (
    <>
      <div className="header">
        <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      </div>
      <div className="border-rectangle"></div>
    </>
  );
};
export default Header;