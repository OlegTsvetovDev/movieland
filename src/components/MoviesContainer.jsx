import React from 'react'
import MovieItem from './MovieItem'


const MoviesContainer = ({ movies }) => (
  <div className="container">
    {
      movies.map(movie => (
        <MovieItem
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
          poster={movie.Poster}
        />
      ))
    }
  </div>
)


export default MoviesContainer
