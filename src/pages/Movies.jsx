import { getSeacrhMovie } from '../components/GetApi/FetchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MovieInput,
  MovieSearch,
  MovieButton,
  MovieSection,
  MovieForm,
} from '../components/StyleMovies/Movies.styled';

import {
  GalleryNav,
  GalleryList,
  GalleryItem,
  GalleryHref,
  GalleryCard,
  GalleryImg,
  GalleryTitle,
  GalleryInfo,
  GalleryRating,
} from '../components/GalleryMovies/GalleryMovies.styled';

import { HomeBox } from '../components/StyleMovies/Home.styled';

export const Movies = () => {
  const [searchValue, setSearchValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }
    getSeacrhMovie(searchQuery).then(setSearchValue);
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.name.value;
    setSearchParams(value !== '' ? { query: value } : {});
    form.reset();
  };

  return (
    <>
      <MovieSection>
        <MovieForm onSubmit={handleSubmit}>
          <MovieInput name="name" type="text" />
          <MovieButton type="submit">
            <MovieSearch />
          </MovieButton>
        </MovieForm>
      </MovieSection>
      <HomeBox>
        <GalleryNav>
          <GalleryList>
            {searchValue.map(
              ({
                id,
                original_title,
                poster_path,
                vote_average,
                release_date,
              }) => (
                <GalleryItem key={id}>
                  <GalleryHref to={`/movies/${id}`}>
                    <GalleryImg src={`${IMAGE_URL}${poster_path}`}></GalleryImg>
                    <GalleryTitle>{original_title}</GalleryTitle>
                    <GalleryCard>
                      <GalleryInfo>{release_date}</GalleryInfo>
                      <GalleryRating>{vote_average}</GalleryRating>
                    </GalleryCard>
                  </GalleryHref>
                </GalleryItem>
              )
            )}
          </GalleryList>
        </GalleryNav>
      </HomeBox>
    </>
  );
};
