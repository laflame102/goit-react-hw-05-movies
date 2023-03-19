import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;

  &.active {
    color: pink;
  }
`;
