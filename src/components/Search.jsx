import React from 'react'
import SearchIcon from '../img/search.svg'


const Search = ({ query, setQuery, handleSearchClick, handleKeyPress }) => (
  <div className="search">
    <input type="text"
      placeholder="Search for movies"
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    <img src={SearchIcon} alt="search icon"
      onClick={handleSearchClick}
    />
  </div>
)


export default Search
