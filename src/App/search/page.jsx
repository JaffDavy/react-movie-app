import HeroBanner from "@/components/hero-banner"
import MovieSection from "@/components/movie-section"
import LatestTrending from "@/components/latest-trending"
import TopSearches from "@/components/top-searches"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <div className="container mx-auto px-4 space-y-8 py-8">
        <LatestTrending />
        <TopSearches />
        <MovieSection title="Action" genre="action" />
        <MovieSection title="Romance & Drama" genre="romance" />
        <MovieSection title="Comedy" genre="comedy" />
        <MovieSection title="Horror" genre="horror" />
        <MovieSection title="Science Fiction" genre="science-fiction" />
        <MovieSection title="Animation" genre="animation" />
        <MovieSection title="Documentary" genre="documentary" />
      </div>
    </div>
  )
}

