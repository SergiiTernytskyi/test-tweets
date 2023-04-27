import { Button } from './FollowButton.styled';

const FollowButton = ({ onClick, activeFollow }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={activeFollow ? 'following' : null}
    >
      {activeFollow ? 'following' : 'follow'}
    </Button>
  );
};

export default FollowButton;
