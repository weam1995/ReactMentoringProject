import './sort-control.css';

interface SortControlProps {
  defaultSelection: movieSortOption;
  onSelect: (selectedOption: movieSortOption) => void;
}

const SortControl = ({ defaultSelection, onSelect }: SortControlProps) => {
  const movieSortOptions: movieSortOption[] = ['Release Date', 'Title'];

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value as movieSortOption);
  };
  return (
    <div className="sort-control-container">
      <span>SORT BY</span>
      <div className="options-container">
        <select onChange={onChangeHandler} defaultValue={defaultSelection}>
          {movieSortOptions.map((option) => (
            <option
              data-testid={`sortOption:${option}`}
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default SortControl;
