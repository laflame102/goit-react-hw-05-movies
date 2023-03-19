const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '46524a805b39690e1dbf4f8ffae20232';

export const getTrending = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);

  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(new Error(`There is no trending films`));
};

export const getMovieDetails = async movieId => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);

  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(new Error(`There is no movie with such id ${movieId}`));
};

export const getCast = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );

  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(new Error(`There is no movie with such id ${movieId}`));
};

export const getReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );

  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(new Error(`There is no movie with such id ${movieId}`));
};

export const getMovies = async movieName => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${movieName}`
  );

  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(
    new Error(`There is no movie with such name ${movieName}`)
  );
};
