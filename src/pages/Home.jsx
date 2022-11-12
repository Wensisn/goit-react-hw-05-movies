import { Outlet } from 'react-router-dom';
import GalleryMovies from '../components/GalleryMovies/GalleryMovies';
import { HomeBox, HomeTitle } from '../components/StyleMovies/Home.styled';
import { Suspense } from 'react';

const Home = () => {
  return (
    <HomeBox>
      <HomeTitle>TrendingToday</HomeTitle>
      <GalleryMovies />
      <Suspense fallback={<h1>BEEEEE</h1>}>
        <Outlet />
      </Suspense>
    </HomeBox>
  );
};

export default Home;
