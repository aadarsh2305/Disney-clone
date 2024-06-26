import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <>
      <img src={IMAGE_BASE_URL + movie.poster_path} 
      className='w-[110px] md:w-[220px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 
      hover:scale-110 transition-all duration-400 ease-in'
      />
    </>
  )
}

export default MovieCard
