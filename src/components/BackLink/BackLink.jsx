import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ children }) => {
  return (
    <StyledLink to="/">
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
