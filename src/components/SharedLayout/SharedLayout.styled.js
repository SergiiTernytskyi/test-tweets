import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 60px;
  padding: 16px 0;
  margin-bottom: 32px;
  color: #373737;

  border-bottom: 2px solid #471ca9;

  > nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: #373737;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.active {
    background: #5cd3a8;
  }
`;
