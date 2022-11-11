import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';

export const HeaderBar = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const HomeLink = styled(NavLink)``;

export const HomeSvg = styled(AiFillHome)`
  fill: currentColor;
  color: red;
  width: 6rem;
  height: 4rem;
`;

export const MoviesSvg = styled(MdLocalMovies)`
  fill: currentColor;
  color: red;
  width: 6rem;
  height: 4rem;
`;
