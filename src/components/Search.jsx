import React, { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <input
        className="search-input"
        value={searchInput}
        onChange={handleSearchInput}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
