import React, { createRef, useMemo, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import SelectBox from '../../components/SelectBox';
import { addTodo, updateTodo } from '../../store/todo';
import { isEmpty } from '../../util';

const options = [
  { title: '낮음', value: 'low' },
  { title: '높음', value: 'high' },
];

function FormGroup({ todo, onClick }) {
  const inputRefs = useMemo(
    () =>
      Array(3)
        .fill('')
        .map((i) => createRef()),
    []
  );
  const [priority, setPriority] = useState(todo?.priority || 'low');
  const dispatch = useDispatch();

  /**
   * 할일목록 업데이트
   */
  const handleClick = () => {
    // 유효성 검사 체크
    const [title, content, dueDate] = inputRefs.map((ref) => ref.current.value);

    if (isEmpty(title) || isEmpty(content)) {
      alert('항목을 입력해주세요');
      return;
    }

    const list = { title, content, dueDate, priority };

    (todo && dispatch(updateTodo({ id: todo.id, list }))) ||
      dispatch(addTodo(list));

    // form 초기화
    resetForm();

    onClick && onClick();
  };

  /**
   * form 영역 초기화
   */
  const resetForm = () => {
    inputRefs.forEach((ref) => (ref.current.value = ''));
    setPriority('low');
  };

  /**
   * 우선순위 조정
   */
  const handleSelect = (value) => {
    setPriority(value);
  };

  return (
    <div className="form-group">
      <div className="form-list">
        <strong>제목</strong>{' '}
        <input ref={inputRefs[0]} defaultValue={todo?.title} />
      </div>
      <div className="form-list">
        <strong>기한</strong>
        <input
          type="date"
          min={moment(new Date).format('yyyy-MM-DD')}
          ref={inputRefs[2]}
          defaultValue={todo?.dueDate}
        />
      </div>
      <div className="form-list">
        <strong>우선순위</strong>
        <SelectBox
          options={options}
          onChange={handleSelect}
          selectedValue={priority}
          style={{ float: 'right', margin: '-5px 5px' }}
        />
      </div>
      <textarea
        ref={inputRefs[1]}
        type="text"
        className="form-control"
        placeholder="할 일 입력해주세요"
        defaultValue={todo?.content}
      ></textarea>
      <button
        className="btn btn-secondary m-t-20 float-right"
        onClick={handleClick}
      >
        완료하기
      </button>
    </div>
  );
}
export default FormGroup;
