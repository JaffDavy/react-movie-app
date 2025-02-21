"use client";

import { useEffect, useState } from "react";
import { Heart, Download, Share2, Play, Info } from "lucide-react";
import "./moviepage.css";

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MoviePage({ movieId, onNavigateHome }) {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, creditsRes, similarRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`),
          fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`),
          fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`),
        ]);

        const movieData = await movieRes.json();
        const creditsData = await creditsRes.json();
        const similarData = await similarRes.json();

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 5));
        setSimilarMovies(similarData.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="movie-page">
      <div className="movie-hero">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-hero-image"
        />
        <div className="movie-hero-overlay"></div>
        <div className="movie-hero-gradient"></div>
        <div className="movie-hero-content">
          <div className="movie-container">
            <div className="movie-info">
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-meta">
                  <span>CBFC: U/A</span>
                  <span>•</span>
                  <span>{movie.genres.map((g) => g.name).join(", ")}</span>
                  <span>•</span>
                  <span>{movie.runtime}m</span>
                </div>
                <p className="movie-description">{movie.overview}</p>
                <div className="movie-actions">
                  <button className="watch-now-btn">
                    <Play className="icon" fill="currentColor" />
                    Watch Now
                  </button>
                  <button className="info-btn">
                    <Info className="icon" />
                    More Info
                  </button>
                  <button className="icon-btn"><Heart className="icon" /></button>
                  <button className="icon-btn"><Download className="icon" /></button>
                  <button className="icon-btn"><Share2 className="icon" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-container">
        <div className="movie-section">
          <h2 className="section-title">Top Cast</h2>
          <div className="cast-grid">
            {cast.map((person) => (
              <div key={person.id} className="cast-member">
                <img
                  src={`${IMAGE_BASE_URL}${person.profile_path}`}
                  alt={person.name}
                  className="cast-image"
                />
                <h3 className="cast-name">{person.name}</h3>
                <p className="cast-character">{person.character}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="movie-section">
          <h2 className="section-title">More Like This</h2>
          <div className="similar-movies-grid">
            {similarMovies.map((similarMovie) => (
              <div
                key={similarMovie.id}
                className="similar-movie-card"
                onClick={() => onNavigateHome(similarMovie.id)}
              >
                <div className="similar-movie-image-wrapper">
                  <img
                    src={`${IMAGE_BASE_URL}${similarMovie.poster_path}`}
                    alt={similarMovie.title}
                    className="similar-movie-image"
                  />
                  <div className="similar-movie-overlay">
                    <div className="similar-movie-details">
                      <h3 className="similar-movie-title">{similarMovie.title}</h3>
                      <div className="similar-movie-info">
                        <span>{new Date(similarMovie.release_date).getFullYear()}</span>
                        <span>•</span>
                        <span>⭐ {similarMovie.vote_average.toFixed(1)}</span>
                      </div>
                    </div>
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
