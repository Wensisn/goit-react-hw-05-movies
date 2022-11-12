import { Outlet } from 'react-router-dom';
import GalleryMovies from '../components/GalleryMovies/GalleryMovies';
import { HomeBox, HomeTitle } from '../components/StyleMovies/Home.styled';

const Home = () => {
  return (
    <HomeBox>
      <HomeTitle>TrendingToday</HomeTitle>
      <GalleryMovies />
      <Outlet />
    </HomeBox>
  );
};
export default Home;