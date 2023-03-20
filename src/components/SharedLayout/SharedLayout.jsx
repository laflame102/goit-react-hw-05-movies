import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
