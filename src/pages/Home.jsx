import Loader from 'components/Loader/Loader';
import MovieList from 'components/MoviesList/HomeMovieList';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getTrending } from 'services';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getTrending();
        setFilms(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MovieList films={films} />
      <Outlet />
    </div>
  );
};

export default Home;

// https://api.themoviedb.org/3/trending?api_key=${KEY}
