import { useEffect, useState } from "react";
import "./top-searches.css";

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function TopSearches({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="top-searches">
      <h2 className="top-searches-title">Top Searches</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item" onClick={() => onMovieSelect(movie.id)}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
