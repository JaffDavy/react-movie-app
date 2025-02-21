"use client";

import { Play, Info } from "lucide-react";
import { useEffect, useState } from "react";
import "./hero-banner.css"

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const FALLBACK_IMAGE = "/fallback-banner.jpg";

export default function HeroBanner({ onMovieSelect }) {
  const [movie, setMovie] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        const genresData = await genresResponse.json();
        const genresMap = genresData.genres?.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {}) || {};
        setGenres(genresMap);

        const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const movieData = await movieResponse.json();
        setMovie(movieData.results?.[0] || null);

        const trendingResponse = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
        const trendingData = await trendingResponse.json();
        setTrendingMovies(trendingData.results?.slice(0, 10) || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <div className="hero-banner">
      <img
        src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : FALLBACK_IMAGE}
        alt={movie.title || "Movie Banner"}
        className="hero-banner-image"
      />
      <div className="overlay gradient-top"></div>
      <div className="overlay gradient-side"></div>

      <div className="hero-content">
        <div className="container">
          <div className="banner-text">
            <div className="movie-info">
              <span className="movie-rating">CBFC: U/A</span>
              <span className="separator">•</span>
              <span className="movie-genres">
                {movie.genre_ids?.map((id) => genres[id] || "Unknown").join(", ") || "No Genre"}
              </span>
              <span className="separator">•</span>
              <span className="movie-duration">2h 28m</span>
            </div>

            <p className="movie-description">
              {movie.overview || "No description available."}
            </p>

            <div className="buttons">
              <button className="watch-button" onClick={() => onMovieSelect?.(movie.id)}>
                <Play className="icon" fill="currentColor" />
                Watch Now
              </button>
              <button className="info-button">
                <Info className="icon" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="trending-section">
        <div className="container">
          <h2 className="trending-title">Latest & Trending</h2>
          <div className="trending-list">
            {trendingMovies.map((movie, index) => (
              <div key={movie.id} className="trending-item" onClick={() => onMovieSelect?.(movie.id)}>
                <span className="trending-rank">{index + 1}</span>
                <div className="trending-thumbnail">
                  <div className="thumbnail-container">
                    <img
                      src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : FALLBACK_IMAGE}
                      alt={movie.title || "Movie Poster"}
                      className="thumbnail-image"
                    />
                    <div className="thumbnail-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
