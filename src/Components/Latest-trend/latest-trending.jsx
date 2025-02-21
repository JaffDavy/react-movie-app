"use client";

import { useEffect, useState } from "react";
import "./latest-trending.css";

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const FALLBACK_IMAGE = "/fallback-poster.jpg";

export default function LatestTrending({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();

        if (data.results) {
          setMovies(data.results.slice(0, 5));
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {/* <section className="latest-trending">
        <h2 className="section-title">Latest & Trending</h2>
        {movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="movie-item"
                onClick={() => onMovieSelect?.(movie.id)}
              >
                <div className="movie-rank">{index + 1}</div>
                <img
                  src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : FALLBACK_IMAGE}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="movie-poster"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="no-movies">No trending movies available.</p>
        )}
      </section> */}
    </>
  );
}
