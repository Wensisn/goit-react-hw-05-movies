import { getMoviesInfo } from 'components/GetApi/FetchMovie';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  MovieDetailsBox,
  MovieDetailsTitle,
  MovieDetailsText,
  MovieDetailsName,
  MovieDetailsImg,
  MovieDetailsForm,
  MovieDetailsHref,
  MovieDetailsFormHref,
  MovieDetailsBack,
} from '../components/StyleMovies/MovieDetails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
        <MovieDetailsBack to={backLinkHref}>
          <AiOutlineArrowLeft />
          Back
        </MovieDetailsBack>
        <MovieDetailsTitle>Movie Information</MovieDetailsTitle>
        <MovieDetailsName>{title}</MovieDetailsName>
        <MovieDetailsForm>
          <MovieDetailsText>{overview}</MovieDetailsText>
          <MovieDetailsText>Popularity:{popularity}</MovieDetailsText>
          <MovieDetailsImg src={`${IMAGE_URL}${backdrop_path}`} alt={title} />
        </MovieDetailsForm>
        <MovieDetailsFormHref>
          <MovieDetailsHref to="cast" state={{ from: backLinkHref }}>
            Cast
          </MovieDetailsHref>
          <MovieDetailsHref to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </MovieDetailsHref>
        </MovieDetailsFormHref>
        <Suspense>
          <Outlet />
        </Suspense>
      </MovieDetailsBox>
    </>
  );
};
export default MovieDetails;
