import './App.css'
import { useState, useEffect, useCallback } from 'react'
import getMovieBySearch from './getService'
import Search from './components/Search'
import MoviesContainer from './components/MoviesContainer'


function App() {
  const [movies, setMovies] = useState(null)
  const [query, setQuery] = useState('Spiderman')

  useEffect(() => {
    const getData = async () =>
      setMovies(await getMovieBySearch(query))

    getData()
  }, [])

  const handleSearchClick = useCallback(async () => {
    const newMovies = await getMovieBySearch(query)
    setMovies(newMovies)
  }, [query])

  const handleKeyPress = useCallback(async e => {
    if (e.key !== 'Enter') return

    const newMovies = await getMovieBySearch(query)
    setMovies(newMovies)
  }, [query])

  return (
    <div className="app">
      <h1>Movieland</h1>
      <Search query={query}
        setQuery={setQuery}
        handleSearchClick={() => handleSearchClick()}
        handleKeyPress={e => handleKeyPress(e)}
      />
      {
        (movies === null || movies === [] || movies === undefined)
          ? (
            <div className="empty">
              <h2>No movies found.</h2>
            </div>
          ) : (
            <MoviesContainer movies={movies} />
          )
      }
    </div>
  )
}


export default App
