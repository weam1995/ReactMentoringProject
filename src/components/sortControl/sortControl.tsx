import './sortControl.css';
import { useState, useRef, FormEvent } from 'react';

interface SortControlProps {
  sortOptions: movieSortOption[];
  defaultSelection: movieSortOption;
  onSelect: (selectedOption: movieSortOption) => void;
}

const SortControl = (props: SortControlProps) => {
  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSelect(e.target.value);
  };
  return (
    <div className="sortControlContainer">
      <span>SORT BY</span>
      <div className="sortOptionsContainer">
        <select onSelect={onSelectHandler}>
          {props.sortOptions.map((sortOption) => (
            <option key={sortOption} value={sortOption}>
              {sortOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default SortControl;
