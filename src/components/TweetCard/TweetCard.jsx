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
import { numberConvert } from 'services/numberConvert';

const TweetCard = ({ userTweets }) => {
  // const [followers, setFollowers] = useState(100500);
  const [activeFollow, setActiveFollow] = useState(false);

  const { tweets, followers, avatar } = userTweets;

  // const followersToggle = () => {
  //   if (activeFollow) {
  //     setFollowers(prevState => prevState - 1);
  //     setActiveFollow(false);
  //   } else {
  //     setFollowers(prevState => prevState + 1);
  //     setActiveFollow(true);
  //   }
  // };

  return (
    <Card>
      <Logo src={logo} alt="company logo" />
      <HeroPicture src={heroPicture} alt="main" />

      <UserAvatar avatar={avatar} />

      <Wrapper>
        <Info>
          <Text>{numberConvert(tweets)} Tweets</Text>
          <Text>{numberConvert(followers)} Followers</Text>
        </Info>

        <Button activeFollow={activeFollow} />
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
