"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Download, Share2, Play, Info } from "lucide-react"

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

export default function MoviePage({ params }) {
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, creditsRes, similarRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`),
          fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}`),
          fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${API_KEY}`),
        ])

        const movieData = await movieRes.json()
        const creditsData = await creditsRes.json()
        const similarData = await similarRes.json()

        setMovie(movieData)
        setCast(creditsData.cast.slice(0, 5))
        setSimilarMovies(similarData.results.slice(0, 10))
      } catch (error) {
        console.error("Error fetching movie details:", error)
      }
    }

    fetchMovieDetails()
  }, [params.id])

  if (!movie) return null

  return (
    <div className="min-h-screen pb-8">
      <div className="relative h-[70vh]">
        <Image
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex gap-8">
              <Image
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span>CBFC:U/A</span>
                  <span>•</span>
                  <span>{movie.genres.map((g) => g.name).join(", ")}</span>
                  <span>•</span>
                  <span>{movie.runtime}m</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-2xl">{movie.overview}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                    <Play className="w-4 h-4" fill="currentColor" />
                    Watch Now
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 bg-gray-800/60 rounded-full hover:bg-gray-700 transition">
                    <Info className="w-4 h-4" />
                    More Info
                  </button>
                  <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <Download className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Cast</h2>
          <div className="flex gap-6">
            {cast.map((person) => (
              <div key={person.id} className="text-center">
                <Image
                  src={`${IMAGE_BASE_URL}${person.profile_path}`}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-2"
                />
                <h3 className="font-medium text-sm">{person.name}</h3>
                <p className="text-sm text-gray-400">{person.character}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">More Like This</h2>
          <div className="grid grid-cols-5 gap-4">
            {similarMovies.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`} className="group">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <Image
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-sm font-medium mb-1">{movie.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span>•</span>
                        <span>⭐ {movie.vote_average.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

