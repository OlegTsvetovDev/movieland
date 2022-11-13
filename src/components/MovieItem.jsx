import React from 'react'


const IMG_PLACEHOLDER_URL = 'https://via.placeholder.com/400'

const MovieItem = ({ title, year, type, poster }) => {
  const posterImg = (poster === "N/A") ? IMG_PLACEHOLDER_URL : poster

  return (
    <div className="movie">
      <div className="">
        <p>{year}</p>
      </div>
      <div className="">
        <img src={posterImg} alt={title} />
      </div>
      <div className="">
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  )
}


export default MovieItem
