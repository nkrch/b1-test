import React, { useState } from "react";

const Filters = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="filters">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search photos..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filters;
