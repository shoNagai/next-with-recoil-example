import * as React from 'react';
import { RecoilRoot } from 'recoil';
import List from './List';
import ListFilters from './ListFilters';
import ListItemCreator from './ListItemCreator';
import ListStats from './ListStats';

const ListContainer = () => {
  return (
    <RecoilRoot>
      <ListStats />
      <ListFilters />
      <ListItemCreator />
      <List />
    </RecoilRoot>
  );
};

export default ListContainer;
