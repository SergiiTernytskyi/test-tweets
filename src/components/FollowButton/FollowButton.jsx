import { Button } from './FollowButton.styled';

const FollowButton = ({ onClick, follow }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={follow ? 'following' : null}
    >
      {follow ? 'following' : 'follow'}
    </Button>
  );
};

export default FollowButton;
