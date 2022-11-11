import { fetchTrending } from '../GetApi/FetchMovie';
import { useState, useEffect } from 'react';
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
} from './GalleryMovies.styled';

export const GalleryMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchPicture() {
      try {
        const { results } = await fetchTrending();
        setTrendingMovies(results);
        setTimeout(() => {
          window.scrollBy({
            top: document.body.clientHeight,
            behavior: 'smooth',
          });
        }, 100);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPicture();
  }, []);

  return (
    <>
      <GalleryNav>
        <GalleryList>
          {trendingMovies.map(
            ({
              id,
              original_title,
              poster_path,
              release_date,
              vote_average,
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
    </>
  );
};
