import { ImageThumb, ImgStyled, TitleText, Text } from './HomePageHero.styled';

const HomePageHero = ({ picture }) => {
  return (
    <>
      <TitleText>Tweetsbook</TitleText>

      <ImageThumb>
        <ImgStyled src={picture} alt="tweets" />
      </ImageThumb>

      <Text>Welcome to application 👋</Text>
    </>
  );
};

export default HomePageHero;
