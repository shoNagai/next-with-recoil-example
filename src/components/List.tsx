import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredUserListState } from '../recoil/selectors';
import { User } from '../typings';
import ListItem from './ListItem';

const List = () => {
  const userList = useRecoilValue<User[]>(filteredUserListState);
  return (
    <ul>
      {userList.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
