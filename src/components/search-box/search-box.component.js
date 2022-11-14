import React from 'react';
import './search-box.style.css';

const SearchBox = ({ className, placeHolder, handleSearch }) => (
  <div>
    <input
      className={className}
      type="search"
      placeholder={placeHolder}
      onChange={handleSearch}
    />
  </div>
);

export default SearchBox;
