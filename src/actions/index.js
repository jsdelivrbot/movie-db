import axios from 'axios';

const API_KEY = '894a552bc13187443e8861713eda03e1';
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
const REQUEST_TOKEN = '599272b43f74ddd270ab2c93623fe5528a6a7db3';

export const FETCH_MOVIES = 'FETCH_MOVIES';

/*
 * TODO: Exemplo para obter os dados de apenas um filme.
 * https://api.themoviedb.org/3/movie/{id_filme}?api_key={api_key}
 */

export function fetchMovies(movie) {
  const url = `${URL}&query=${movie}&language=pt-BR`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request
  };
}
