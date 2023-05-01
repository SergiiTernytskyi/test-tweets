import styled from 'styled-components';

export const TitleText = styled.h1`
  margin-bottom: 60px;
  text-align: center;
  color: #373737;

  font-weight: 600;
  font-size: 40px;
  line-height: 1.22;
`;

export const ImageThumb = styled.div`
  margin: 0 auto;
  margin-bottom: 32px;
  width: 250px;
  flex-grow: 1;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 375px) {
    width: 450px;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const Text = styled.div`
  padding: 8px;
  width: 100%;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #373737;
  text-align: center;

  @media (min-width: 375px) {
    font-size: 30px;
  }
`;
