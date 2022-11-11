import { getMoviesCast } from 'components/GetApi/FetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastItemInfo,
  InfoBox,
  CastList,
  Image,
  CastInfo,
} from './Cast.styled';
import ImageDefault from '../Error/error.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [moviesCast, setMoviesCast] = useState(null);

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMoviesCast(Number(movieId)).then(setMoviesCast);
  }, [movieId]);

  if (!moviesCast) {
    return null;
  }

  return (
    <>
      {moviesCast && (
        <CastList>
          {moviesCast.map(
            ({ character, original_name, profile_path: avatar, id }) => (
              <CastItemInfo key={id}>
                <Image
                  src={avatar ? `${IMAGE_URL}${avatar}` : ImageDefault}
                  alt={original_name}
                />
                <InfoBox></InfoBox>
                <CastInfo>
                  <b>{original_name}</b>
                </CastInfo>
                <CastInfo>{character}</CastInfo>
              </CastItemInfo>
            )
          )}
        </CastList>
      )}
      {moviesCast?.length === 0 && <p>There is no information</p>}
    </>
  );
};
