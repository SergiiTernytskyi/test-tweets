import { CircleLoader } from 'react-spinners';

import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircleLoader color="#471ca9" loading size={80} speedMultiplier={2} />
    </LoaderWrapper>
  );
};

export default Loader;
