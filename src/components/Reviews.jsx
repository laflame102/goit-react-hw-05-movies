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

  console.log(reviews);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <b>{author}</b>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
