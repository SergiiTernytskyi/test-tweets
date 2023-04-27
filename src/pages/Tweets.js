import { BackLink } from 'components/BackLink/BackLink';
import TweetCard from 'components/TweetCard/TweetCard';

const Tweets = () => {
  return (
    <main>
      <BackLink>Go back</BackLink>
      <TweetCard />
    </main>
  );
};

export default Tweets;
