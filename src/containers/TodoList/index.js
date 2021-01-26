import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import List from '../../components/List';
import SelectBox from '../../components/SelectBox';
import { completedTodo, filtering, removeTodo, todos } from '../../store/todo';
import FormGroup from '../FormGroup';
import { getFilter, getIndex } from '../../util';

console.log(todos);
const options = [
  { title: '우선순위 높은순', value: 'high' },
  { title: '우선순위 낮은순', value: 'low' },
];

function TodoList() {
  const data = useSelector(todos);
  const todoList = getFilter(data, 'todo');

  const [focusId, setId] = useState('');
  const [formComponent, setComponent] = useState(null);
  const dispatch = useDispatch();

  const changeSelect = (type) => {
    dispatch(filtering(type));
  };

  const handleFocus = (id) => {
    setId(id);
  };

  const handleButton = (type) => {
    if (!focusId) {
      alert('항목을 선택해주세요');
      return;
    }

    const index = getIndex(focusId, data);
    switch (type) {
      case 'remove':
        dispatch(removeTodo(index));
        break;
      case 'update':
        // form영역 붙이기
        setComponent(<FormGroup todo={data[index]} onClick={removeForm} />);
        break;
      case 'complete':
        dispatch(completedTodo(index));
        break;
      default:
        break;
    }
  };

  const removeForm = () => {
    // 데이터 업데이트
    setComponent(null);
  };

  return (
    <>
      {/* 정렬 */}
      <SelectBox options={options} onChange={changeSelect} />
      {/* <!-- todo list --> */}
      <div
        className="list-group"
        data-element="incompletedList"
        style={{ marginTop: '70px' }}
      >
        {todoList.map((todo, idx) => (
          <List
            key={idx}
            className="item-primary"
            index={idx}
            todo={todo}
            onClick={handleFocus}
          />
        ))}
      </div>
      {formComponent}
      {!formComponent && (
        <div className="form-group">
          <button
            className="btn btn-danger m-t-20 float-right"
            onClick={() => handleButton('remove')}
          >
            삭제하기
          </button>
          <button
            className="btn btn-primary m-t-20 float-right"
            onClick={() => handleButton('update')}
          >
            수정하기
          </button>
          <button
            className="btn btn-success m-t-20 float-right"
            onClick={() => handleButton('complete')}
          >
            완료하기
          </button>
        </div>
      )}
    </>
  );
}
export default TodoList;
