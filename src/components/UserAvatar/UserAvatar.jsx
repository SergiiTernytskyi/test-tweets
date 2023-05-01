import { AvatarImage, Avatar, AvatarThumb } from './UserAvatar.styled';

import noAvatar from 'images/hansel.jpg';

const UserAvatar = ({ avatar }) => {
  return (
    <Avatar>
      <AvatarThumb>
        <AvatarImage src={avatar ? avatar : noAvatar} alt="user avatar" />
      </AvatarThumb>
    </Avatar>
  );
};

export default UserAvatar;
