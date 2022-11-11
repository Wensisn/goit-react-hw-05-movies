import { getMoviesReviews } from 'components/GetApi/FetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastItemInfo,
  CastList,
  RewiesInfo,
  RewiesTitle,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [moviesReviews, setMoviesReviews] = useState(null);

  useEffect(() => {
    getMoviesReviews(Number(movieId)).then(setMoviesReviews);
  }, [movieId]);

  if (!moviesReviews) {
    return null;
  }

  return (
    <>
      {moviesReviews && (
        <CastList>
          {moviesReviews.map(({ author, content, id }) => (
            <CastItemInfo key={id}>
              <RewiesTitle>
                <b>{author}</b>
              </RewiesTitle>
              <RewiesInfo>{content}</RewiesInfo>
            </CastItemInfo>
          ))}
        </CastList>
      )}
      {moviesReviews?.length === 0 && <p>There is no information</p>}
    </>
  );
};
