import { getMoviesInfo } from 'components/GetApi/FetchMovie';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import {
  MovieDetailsBox,
  MovieDetailsTitle,
  MovieDetailsText,
  MovieDetailsName,
  MovieDetailsImg,
  MovieDetailsForm,
  MovieDetailsHref,
  MovieDetailsFormHref,
} from '../components/StyleMovies/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMoviesInfo(Number(movieId)).then(setMovieInfo);
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }
  const { title, overview, popularity, backdrop_path } = movieInfo;

  return (
    <>
      <MovieDetailsBox>
        <MovieDetailsTitle>Movie Information</MovieDetailsTitle>
        <MovieDetailsName>{title}</MovieDetailsName>
        <MovieDetailsForm>
          <MovieDetailsText>{overview}</MovieDetailsText>
          <MovieDetailsText>Popularity:{popularity}</MovieDetailsText>
          <MovieDetailsImg src={`${IMAGE_URL}${backdrop_path}`} alt={title} />
        </MovieDetailsForm>
        <MovieDetailsFormHref>
          <MovieDetailsHref to="cast">Cast</MovieDetailsHref>
          <MovieDetailsHref to="reviews">Reviews</MovieDetailsHref>
        </MovieDetailsFormHref>
        <Outlet />
      </MovieDetailsBox>
    </>
  );
};
export default MovieDetails;
