import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/List';
import { todos } from '../../store/todo';
import { getFilter } from '../../util';

function ImmutableList({ type }) {
  const data = useSelector(todos);
  const todoList = getFilter(data, type)

  return (
    <div className="list-group" style={{ marginTop: '70px' }}>
      {todoList.map((todo, idx) => (
        <List key={idx} className="item-info" index={idx} todo={todo} />
      ))}
    </div>
  );
}
export default ImmutableList;
