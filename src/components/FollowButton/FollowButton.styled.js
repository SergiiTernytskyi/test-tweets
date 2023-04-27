import styled from 'styled-components';

export const Button = styled.button`
  width: 198px;
  height: 50px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: transparent;

  &.following {
    background: #5cd3a8;
  }
`;
