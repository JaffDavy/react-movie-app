"use client"

import { useState } from "react"
import Navbar from "./Components/Navbar/navbar"
import Footer from "./Components/Footer/footer"
import HomePage from "./Components/HomePage"
import MoviePage from "./Components/Moviepage/MoviePage"
import "./App.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedMovieId, setSelectedMovieId] = useState(null)

  const navigateToMovie = (movieId) => {
    setSelectedMovieId(movieId)
    setCurrentPage("movie")
  }

  const navigateToHome = () => {
    setCurrentPage("home")
    setSelectedMovieId(null)
  }

  return (
    <div>
      <Navbar onNavigateHome={navigateToHome} />
      <main>
        {currentPage === "home" ? (
          <HomePage onMovieSelect={navigateToMovie} />
        ) : (
          <MoviePage movieId={selectedMovieId} onNavigateHome={navigateToHome} />
        )}
      </main>
      <Footer />
    </div>
  )
}

