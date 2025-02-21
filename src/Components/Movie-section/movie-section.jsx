import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import "./movie-section.css";

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieSection({ title, genre, onMovieSelect }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${getGenreId(
            genre
          )}&language=en-US&sort_by=popularity.desc`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 6));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genre]);

  return (
    <section className="movie-section">
      <div className="movie-section-header">
        <h2 className="section-title">{title}</h2>
        <button className="view-more-btn">
          View More
          <ChevronRight className="icon-chevron" />
        </button>
      </div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => onMovieSelect(movie.id)}
          >
            <div className="movie-image-container">
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-overlay">
                <div className="movie-details">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-info">
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                    <span>•</span>
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getGenreId(genre) {
  const genres = {
    action: 28,
    romance: 10749,
    comedy: 35,
    horror: 27,
    "science-fiction": 878,
    animation: 16,
    documentary: 99,
  };
  return genres[genre] || 28;
}
