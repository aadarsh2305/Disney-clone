import axios from "axios";

/**
 * @author: Aadarsh Gupta
 */
const movieBaseUrl="https://api.themoviedb.org/3"

//Got this API key from themoviedb.org website 
const api_key='d755cfe79dbc8447b1adaa452fc8687d'

//Using this API for specific genre movies
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//Get all Trending movies in carousel format in main page 
const getTrendingVideos=axios.get(movieBaseUrl +"/trending/all/day?api_key="+api_key)

//Get movie based on Specific Genre
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id);

//Exporting to use in components
export default {
    getTrendingVideos,
    getMovieByGenreId
}







//This is our main API endpoint just used for shortcut purpose but actually it is of no use
//https://api.themoviedb.org/3/trending/all/day?api_key=d755cfe79dbc8447b1adaa452fc8687d