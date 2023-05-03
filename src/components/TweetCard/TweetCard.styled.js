import styled from 'styled-components';
import heroPicture from 'images/heroPicture.png';

export const Card = styled.article`
  position: relative;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 380px;
  height: 460px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background: url(${heroPicture}) no-repeat 36px 28px,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
`;

export const Logo = styled.img`
  width: 76px;
  height: 22px;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Info = styled.div`
  margin-bottom: 26px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;

  :first-child {
    margin-bottom: 16px;
  }
`;
