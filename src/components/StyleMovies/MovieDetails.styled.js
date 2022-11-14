import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsBox = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieDetailsTitle = styled.h1`
  color: firebrick;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  line-height: 1.17;
`;

export const MovieDetailsName = styled.h2`
  color: firebrick;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  line-height: 1.17;
`;

export const MovieDetailsText = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  color: firebrick;
`;

export const MovieDetailsImg = styled.img``;

export const MovieDetailsForm = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const MovieDetailsHref = styled(NavLink)`
  color: firebrick;
  font-size: 30px;
  padding: 20px;
  margin: 50px;
  text-decoration: none;
`;

export const MovieDetailsFormHref = styled.div`
  display: flex;
  justify-content: center;
`;

export const MovieDetailsBack = styled(Link)`
  display: flex;
  align-items: center;
  color: firebrick;
  font-size: 30px;
  padding: 20px;
  text-decoration: none;
`;
