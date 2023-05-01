import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './BackLink.styled';

const BackLink = ({ children }) => {
  return (
    <StyledLink to="/">
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
