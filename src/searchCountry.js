import React from 'react'

const SearchCountry = ({ keyword }) => {

  return (
    <div className='search-nav'>
      <input type="text"
        className='input-search'
        placeholder="Search Country"
        onChange={keyword} />
    </div>
  )
}


export default SearchCountry