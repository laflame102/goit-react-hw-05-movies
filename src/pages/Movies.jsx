import MovieList from 'components/MovieList';
// import SearchBox from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getMovies } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('name') ?? '';

  useEffect(() => {
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

  console.log(movies);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ filmName: inputValue });
  };

  return (
    <div>
      {/* <SearchBox onSubmit={handleFormSubmit} /> */}
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={evt => setInputValue(evt.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};

export default Movies;
