import React from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useEffect ,useState} from 'react';
import MovieCard from './MovieCard';

function MovieList({genreId}) {

    const [MovieList, setMovieList] = useState([]);

    useEffect(() => {
      getMovieByGenreId();
    }, [])
    

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3'>
      {MovieList.map((item,index)=>(
        <MovieCard movie={item}/>
      ))}
    </div>
  )
}

export default MovieList
