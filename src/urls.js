import {API_KEY} from './constants/constants';
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action =`/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy =`/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance =`/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentary =`/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const inspiration =`/discover/movie?api_key=${API_KEY}&with_genres=18`;
export const drama =`/discover/movie?api_key=${API_KEY}&&sort_by=popularity.desc&awards=best_picture_winner`;
export const malayalam =`/discover/movie?api_key=${API_KEY}&with_original_language=ml`;
export const tamil =`/discover/movie?api_key=${API_KEY}&with_original_language=ta`;
export const hindi =`/discover/movie?api_key=${API_KEY}&with_original_language=hi`;
export const kannada =`/discover/movie?api_key=${API_KEY}&with_original_language=kn`;


