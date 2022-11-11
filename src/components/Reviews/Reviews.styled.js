import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const CastItemInfo = styled.li`
  min-width: 320px;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #ff6b08;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RewiesInfo = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  color: #ffff;
`;

export const RewiesTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 30px;
  color: firebrick;
`;
