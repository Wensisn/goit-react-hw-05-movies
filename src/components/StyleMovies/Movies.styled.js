import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const MovieInput = styled.input`
  background-color: transparent;
  width: 50%;
  border: 2px solid #db0402;
  border-radius: 50px;
  color: #fff;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  text-align: center;
`;
export const MovieSection = styled.div`
  padding: 1rem;
`;
export const MovieForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const MovieButton = styled.button`
  border: 0px;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
`;

export const MovieSearch = styled(BiSearch)`
  fill: currentColor;
  color: red;
  width: 6rem;
  height: 4rem;
`;
