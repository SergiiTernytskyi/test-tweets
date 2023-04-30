import { useDispatch } from 'react-redux';
import { Select, SelectWrapper } from './FilterForm.styled';
import { setFilter } from 'redux/filter/slice';
import { useEffect } from 'react';

const FilterForm = () => {
  const dispatch = useDispatch();

  const selectHandler = value => dispatch(setFilter(value));

  useEffect(() => {
    return () => {
      dispatch(setFilter('all'));
    };
  }, [dispatch]);

  return (
    <SelectWrapper>
      <Select
        id="select"
        name="tweetsForm"
        onChange={event => selectHandler(event.target.value)}
      >
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Select>
    </SelectWrapper>
  );
};

export default FilterForm;
