import { Helmet } from 'react-helmet';

import HomePageHero from 'components/HomePageHero/HomePageHero';
import tweets from 'images/tweets.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page - TweetsBook</title>
      </Helmet>

      <main>
        <HomePageHero picture={tweets} />
      </main>
    </>
  );
};

export default Home;
