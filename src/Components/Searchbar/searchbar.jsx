import React from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" placeholder="Search Movies, Series ...." />
        <FaSearch className="search-icon" />
      </div>
      <img src="../../assets/profile.jpg" alt="Icon" className="side-icon" />
    </div>
  );
};

export default SearchBar;
