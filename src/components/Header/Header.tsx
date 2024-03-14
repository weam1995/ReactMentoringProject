import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  const handleSearch = (inputData: string) => {
    console.log(inputData);
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
