import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const HomeMovieList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {films.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeMovieList;

HomeMovieList.propTypes = {
  films: PropTypes.array,
};
