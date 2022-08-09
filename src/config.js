const TMDB_MOVIES_END_POINTS = "https://api.themoviedb.org/3/movie";
const TMDB_IMAGES_END_POINTS = "https://image.tmdb.org/t/p";
const TMDB_GENRES_END_POINTS = "https://api.themoviedb.org/3/genre/movie/list";
const TMDB_SEARCH_END_POINTS = "https://api.themoviedb.org/3/search/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${TMDB_MOVIES_END_POINTS}/${type}?api_key=${API_KEY}&language=vi&page=${page}`,
  getGenres: () => `${TMDB_GENRES_END_POINTS}?api_key=${API_KEY}&language=vi`,
  getMovieDetails: (movieId) =>
    `${TMDB_MOVIES_END_POINTS}/${movieId}?api_key=${API_KEY}&language=vi`,
  getCredits: (movieId) =>
    `${TMDB_MOVIES_END_POINTS}/${movieId}/credits?api_key=${API_KEY}&language=vi`,
  getVideos: (movieId) =>
    `${TMDB_MOVIES_END_POINTS}/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
  getSimilarMovies: (movieId) =>
    `${TMDB_MOVIES_END_POINTS}/${movieId}/similar?api_key=${API_KEY}&language=vi&page=1`,
  getMovieSearch: (query, page) =>
    `${TMDB_SEARCH_END_POINTS}?api_key=${API_KEY}&query=${query}&language=vi&page=${page}`,
  //   getMovieMeta: (movieId, type) =>
  //     `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `${TMDB_IMAGES_END_POINTS}/original/${url}`,
  image500: (url) => `${TMDB_IMAGES_END_POINTS}/w500/${url}`,
};
