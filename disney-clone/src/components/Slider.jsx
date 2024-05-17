import React, { useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

/**
 * @author: Aadarsh Gupta
 */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;


function Slider() {
    const [movieList, SetMovieList] = useState([])
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(res => {
            console.log(res.data.results);
            SetMovieList(res.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth -110 //removing the width which we used to set for the width of the carousel
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth-110 //removing the width which we used to set for the width of the carousel
    }

    return (
        <div >
            <HiChevronLeft className="hidden md:block text-white text-[40px] absolute mx-8 mt-[300px]  cursor-pointer"
                onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className="hidden md:block text-white text-[40px] absolute mx-8 mt-[300px] cursor-pointer right-0"
                onClick={() => sliderRight(elementRef.current)} />
            
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full md:h-[600px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ))}
            </div>
        </div>
    )
}

export default Slider