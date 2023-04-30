import { Helmet, HelmetProvider } from 'react-helmet-async';

import HomePageHero from 'components/HomePageHero/HomePageHero';
import tweets from 'images/tweets.png';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page - TweetsBook</title>
      </Helmet>

      <main>
        <HomePageHero picture={tweets} />
      </main>
    </HelmetProvider>
  );
};

export default Home;
