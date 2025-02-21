import { Search } from "lucide-react";
import { useState } from "react";
import "./navbar.css";

export default function Navbar({ onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="navbar-logo" onClick={onNavigateHome}>
              <span className="logo-text">STREAM</span>
              <span className="logo-highlight">X</span>
            </div>
            <div className="navbar-links">
              <span className="nav-link" onClick={onNavigateHome}>Home</span>
              <span className="nav-link">Movies</span>
              <span className="nav-link">Series</span>
              <span className="nav-link">Trending</span>
              <span className="nav-link">Categories</span>
            </div>
          </div>
          <div className="navbar-right">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="search"
                placeholder="Search Movies, Series..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <Search className="search-icon" />
              </button>
            </form>
            <button className="profile-button">
              <img src="/placeholder.svg" alt="Profile" className="profile-image" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
