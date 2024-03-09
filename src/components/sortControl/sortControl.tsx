import './sortControl.css';

interface SortControlProps {
  sortOptions: movieSortOption[];
  defaultSelection: movieSortOption;
  onSelect: (selectedOption: movieSortOption) => void;
}

const SortControl = (props: SortControlProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Hi');
    props.onSelect(e.target.value as movieSortOption);
  };
  return (
    <div className="sortControlContainer">
      <span>SORT BY</span>
      <div className="sortOptionsContainer">
        <select onChange={onChangeHandler}>
          {props.sortOptions.map((sortOption) => (
            <option
              data-testid={`sortOption:${sortOption}`}
              key={sortOption}
              value={sortOption}
            >
              {sortOption}
            </option>
          ))}
          *
        </select>
      </div>
    </div>
  );
};
export default SortControl;
