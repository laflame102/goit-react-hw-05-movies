import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox/SearchBox';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getMovies } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!filmName) {
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await getMovies(filmName);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [filmName]);

  const handleFormSubmit = value => {
    setSearchParams({ name: value });
  };

  return (
    <div>
      <SearchBox onSubmit={handleFormSubmit} />
      <MovieList movies={movies} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
