import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { fetchUsers } from 'redux/users/operations';
import { selectError, selectIsLoading } from 'redux/users/slectors';

import BackLink from 'components/BackLink/BackLink';
import UsersList from 'components/UsersList/UsersList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import FilterForm from 'components/FilterForm/FilterForm';

const PAGE_LIMIT = 3;

const Tweets = () => {
  const [page, setPage] = useState(1);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: PAGE_LIMIT }));
  }, [dispatch, page]);

  const loadMoreHandler = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Tweets - TweetsBook</title>
      </Helmet>

      <main>
        <BackLink>Go back</BackLink>
        <FilterForm />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && isLoading && <Loader />}
        {!error && !isLoading && <UsersList />}
        {!error && !isLoading && (
          <Button onClick={loadMoreHandler}>Load More</Button>
        )}
      </main>
    </HelmetProvider>
  );
};

export default Tweets;
