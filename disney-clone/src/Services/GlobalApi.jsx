import axios from "axios";

/**
 * @author: Aadarsh Gupta
 */
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='d755cfe79dbc8447b1adaa452fc8687d'
//https://api.themoviedb.org/3/trending/all/day?api_key=d755cfe79dbc8447b1adaa452fc8687d

const getTrendingVideos=axios.get(movieBaseUrl +"/trending/all/day?api_key="+api_key)

export default {
    getTrendingVideos
}