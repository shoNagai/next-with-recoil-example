import * as React from 'react';
import { useRecoilState } from 'recoil';
import { FilterState } from '../typings';
import { userListFilterState } from '../recoil/atoms';

const ListFilters = () => {
  const [filter, setFilter] = useRecoilState(userListFilterState);

  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as FilterState);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default ListFilters;
