import { Link } from 'react-router-dom';

const HomeMovieList = ({ films }) => {
  return (
    <div>
      <ul>
        {films.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeMovieList;
