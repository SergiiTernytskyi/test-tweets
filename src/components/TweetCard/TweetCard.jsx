import Button from 'components/FollowButton/FollowButton';

import heroPicture from 'images/heroPicture.png';
import logo from 'images/Logo.svg';

import {
  Card,
  HeroPicture,
  Info,
  Logo,
  Text,
  Wrapper,
} from './TweetCard.styled';
import UserAvatar from 'components/UserAvatar/UserAvatar';
import { useState } from 'react';
import { numberConvert } from 'service/numberConvert';

const TweetCard = () => {
  const [tweets, setTweets] = useState(0);
  const [followers, setFollowers] = useState(100500);
  const [activeFollow, setActiveFollow] = useState(false);

  const followersToggle = () => {
    if (activeFollow) {
      setFollowers(prevState => prevState - 1);
      setActiveFollow(false);
    } else {
      setFollowers(prevState => prevState + 1);
      setActiveFollow(true);
    }
  };

  return (
    <Card>
      <Logo src={logo} alt="company logo" />
      <HeroPicture src={heroPicture} alt="main" />

      <UserAvatar />

      <Wrapper>
        <Info>
          <Text>{tweets} Tweets</Text>
          <Text>{numberConvert(followers)} Followers</Text>
        </Info>

        <Button onClick={followersToggle} activeFollow={activeFollow} />
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
