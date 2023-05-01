import { ErrorText, Image, Wrapper } from './ErrorMessage.styled';

import error from 'images/error.png';

const ErrorMessage = ({ children }) => {
  return (
    <Wrapper>
      <Image src={error} alt="error" />
      <ErrorText>{children}</ErrorText>
    </Wrapper>
  );
};

export default ErrorMessage;
