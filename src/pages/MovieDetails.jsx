import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieDetails(Number(movieId));
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { original_title, vote_average, overview, genres, poster_path } = movie;

  return (
    <div>
      <div>
        <h2>FILM NAME: {original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="270"
        />
        <p>User score : {vote_average?.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
