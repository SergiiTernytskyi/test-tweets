import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 24px;
  text-decoration: none;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #471ca9;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
