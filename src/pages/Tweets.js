import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { fetchUsers } from 'redux/users/operations';
import {
  selectError,
  selectIsLoading,
  selectUsers,
} from 'redux/users/slectors';

import BackLink from 'components/BackLink/BackLink';
import UsersList from 'components/UsersList/UsersList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import FilterForm from 'components/FilterForm/FilterForm';
import { resetUsers } from 'redux/users/slice';

const PAGE_LIMIT = 3;

const Tweets = () => {
  const [page, setPage] = useState(1);

  const users = useSelector(selectUsers);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: PAGE_LIMIT }));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

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
        {!error && <UsersList />}
        {!error && !isLoading && users.length >= PAGE_LIMIT * page && (
          <Button onClick={loadMoreHandler}>Load More</Button>
        )}
      </main>
    </HelmetProvider>
  );
};

export default Tweets;
