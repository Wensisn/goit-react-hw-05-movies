import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import {
  HeaderBar,
  HomeLink,
  HomeSvg,
  MoviesSvg,
} from './StyleMovies/App.styled';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <HeaderBar>
        <HomeLink to="/" end>
          <HomeSvg />
        </HomeLink>
        <NavLink to="/movies/">
          <MoviesSvg />
        </NavLink>
      </HeaderBar>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
