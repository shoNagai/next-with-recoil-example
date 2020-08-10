import { selector } from 'recoil';
import { userListState, userListFilterState } from '../recoil/atoms';
import { User } from '../typings';

export const filteredUserListState = selector<User[]>({
  key: 'filteredUserListState',
  get: ({ get }) => {
    const filter = get(userListFilterState);
    const list = get(userListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
  set: ({ set }, newValue) => {
    set(userListState, newValue);
  },
});

export const userListStatsState = selector({
  key: 'userListStatsState',
  get: ({ get }) => {
    const list = get(filteredUserListState);
    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
