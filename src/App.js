import './App.css'
import { useState, useEffect, useCallback } from 'react'
import getMovieBySearch from './getService/getMovieBySearch'
import Search from './components/Search'
import MoviesContainer from './components/MoviesContainer'


function App() {
  const [movies, setMovies] = useState(null)
  const [query, setQuery] = useState('Spiderman')

  const getMovies = async () =>
    setMovies(await getMovieBySearch(query))

  const getMoviesCached = useCallback(getMovies, [query])

  useEffect(() => {
    getMoviesCached()
    // eslint-disable-next-line
  }, [])

  const handleKeyPress = e => {
    if (e.key !== 'Enter') return

    getMoviesCached(e)
  }

  return (
    <div className="app">
      <h1>Movieland</h1>
      <Search query={query}
        setQuery={setQuery}
        handleSearchClick={getMoviesCached}
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
