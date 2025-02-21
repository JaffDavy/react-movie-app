import HeroBanner from "./Hero-banner/hero-banner"
import MovieSection from "./Movie-section/movie-section"
import LatestTrending from "./Latest-trend/latest-trending"
import TopSearches from "./Top-searches/top-searches"
import "../App.css"

export default function HomePage({ onMovieSelect }) {
  return (
    <div className="min-h-screen">
      <HeroBanner onMovieSelect={onMovieSelect} />
      <div className="container mx-auto px-4 space-y-8 py-8">
        <LatestTrending onMovieSelect={onMovieSelect} />
        <TopSearches onMovieSelect={onMovieSelect} />
        <MovieSection title="Action" genre="action" onMovieSelect={onMovieSelect} />
        <MovieSection title="Romance & Drama" genre="romance" onMovieSelect={onMovieSelect} />
        <MovieSection title="Comedy" genre="comedy" onMovieSelect={onMovieSelect} />
        <MovieSection title="Horror" genre="horror" onMovieSelect={onMovieSelect} />
        <MovieSection title="Science Fiction" genre="science-fiction" onMovieSelect={onMovieSelect} />
        <MovieSection title="Animation" genre="animation" onMovieSelect={onMovieSelect} />
        <MovieSection title="Documentary" genre="documentary" onMovieSelect={onMovieSelect} />
      </div>
    </div>
  )
}

