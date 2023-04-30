import { Select, SelectWrapper } from './FilterForm.styled';

const FilterForm = () => {
  return (
    <SelectWrapper>
      <Select id="select" name="tweetsForm">
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Select>
    </SelectWrapper>
  );
};

export default FilterForm;
