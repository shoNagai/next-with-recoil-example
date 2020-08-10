import * as React from 'react';
import Link from 'next/link';
import { User } from '../typings';
import { useRecoilState } from 'recoil';
import { userListState } from '../recoil/atoms';

type Props = {
  data: User;
};

const replaceItemAtIndex = (arr: User[], index: number, newValue: User) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: User[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const ListItem = ({ data }: Props) => {
  const [userList, setUserList] = useRecoilState(userListState);
  const index = userList.findIndex((listItem) => listItem === data);

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(userList, index, {
      ...data,
      name: event.target.value,
    });

    setUserList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(userList, index, {
      ...data,
      isComplete: !data.isComplete,
    });

    setUserList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(userList, index);

    setUserList(newList);
  };
  return (
    <div>
      <Link href="/users/[id]" as={`/users/${data.id}`}>
        <a>{data.id}</a>
      </Link>
      <input type="text" value={data.name} onChange={editItemText} />
      <input
        type="checkbox"
        checked={data.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default ListItem;
