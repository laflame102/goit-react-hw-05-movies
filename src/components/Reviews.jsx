import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services';
import Loader from './Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await getReviews(Number(movieId));
        setReviews(response.results);
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
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, there is no reviews</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
