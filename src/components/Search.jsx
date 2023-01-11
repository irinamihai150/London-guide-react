import React from "react";


function Search({ setQuery, query }) {
  return (
    <div>
      <input
        className="search-input"
        // onChange={(e) => setQuery(getFilteredNames)}
        type="text"
        placeholder="Search for a name"
      />
    </div>
  );
}

export default Search;
