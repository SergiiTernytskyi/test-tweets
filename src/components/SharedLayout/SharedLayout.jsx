import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
