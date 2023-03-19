import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services';
import Loader from './Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await getCast(Number(movieId));
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {cast.map(({ character, profile_path, name, id }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="70"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
