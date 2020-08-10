import { atom } from 'recoil';
import { User, FilterState } from '../typings';

export const userListState = atom<User[]>({
  key: 'userListState',
  default: [],
});

export const userListFilterState = atom<FilterState>({
  key: 'userListFilterState',
  default: 'Show All',
});
