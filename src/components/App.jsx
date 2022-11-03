import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <>
      <Routes basename="goit-react-hw-05-movies">
        <Route
          path="/"
          element={<Home />}
          basename="goit-react-hw-05-movies"
        ></Route>
      </Routes>
    </>
  );
};
