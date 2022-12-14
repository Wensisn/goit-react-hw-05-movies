import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GalleryNav = styled.nav``;

export const GalleryList = styled.ul`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
`;

export const GalleryItem = styled.li`
  border-radius: 6px;
  transition: transform 0.25s linear;
  box-shadow: 1px 4px 6px rgb(0 0 0 / 16%), 0 4px 4px rgb(0 0 0 / 6%),
    0 1px 1px rgb(0 0 0 / 12%);
  color: inherit;
  text-decoration: none;
`;

export const GalleryHref = styled(Link)`
  text-decoration: none;
`;

export const GalleryCard = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 10px 15px 20px;
  justify-content: space-between;
`;
export const GalleryImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
export const GalleryTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  color: firebrick;
`;

export const GalleryInfo = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 12px;
  color: firebrick;
`;

export const GalleryRating = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 12px;
  color: #fff;
  background-color: #ff6b08;
`;
