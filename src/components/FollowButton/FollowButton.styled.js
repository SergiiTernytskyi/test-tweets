import styled from 'styled-components';

export const Button = styled.button`
  width: 198px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: transparent;

  transform: scale(1);

  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }

  &.following {
    transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #5cd3a8;
  }
`;
