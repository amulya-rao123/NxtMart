import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="🔎Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border-solid border-2 border-gray-900 rounded px-15 py-3 focus:outline-none focus:border-green-500"
    />
  );
};

export default SearchBar;
