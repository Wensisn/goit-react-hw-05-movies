import { Route, Routes, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

import {
  HeaderBar,
  HomeLink,
  HomeSvg,
  MoviesSvg,
} from './StyleMovies/App.styled';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
