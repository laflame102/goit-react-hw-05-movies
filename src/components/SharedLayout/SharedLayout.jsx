import { Outlet } from 'react-router-dom';
import { NavBar, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <NavBar>
          <li>
            <StyledLink to="/">HomePage</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
