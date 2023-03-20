import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from 'services';
import BackLink from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/movies';

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
        <BackLink to={BackLinkHref}>Go back</BackLink>
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
