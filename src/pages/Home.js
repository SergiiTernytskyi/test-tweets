import HomePageHero from 'components/HomePageHero/HomePageHero';
import tweets from 'images/tweets.png';

const Home = () => {
  return (
    <main>
      <HomePageHero picture={tweets} />
    </main>
  );
};

export default Home;
