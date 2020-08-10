import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import { User } from '../typings';
import { userListState } from '../recoil/atoms';

// utility for creating unique Id
let id = 0;
const getId = () => {
  return id++;
};

const ListItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('');
  const setUserList = useSetRecoilState<User[]>(userListState);

  const addItem = () => {
    setUserList((oldList) => [
      ...oldList,
      {
        id: getId(),
        name: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default ListItemCreator;
