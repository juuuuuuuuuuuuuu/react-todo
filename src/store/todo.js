import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { getIndex, sortTodo } from 'util/common';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      { id: '2021-01-18 11:30:11', title: 'js', content: '1 공부하기', priority: 'low', isDone: false },
      { id: '2021-01-18 11:30:11', title: 'js', content: '2 공부하기', priority: 'low', isDone: false, dueDate: '2021-01-18' },
      { id: '2021-01-18 11:30:11', title: 'js', content: '3 공부하기', priority: 'low', isDone: true },
    ],
    filter: 'high',
  },
  reducers: {
    // 할일 항목 추가하기
    addTodo(state, action) {
      action.payload.id = moment(new Date()).format('yyyy-MM-DD hh:mm:ss');
      action.payload.isDone = false;
      state.todos.push(action.payload)
    },
    // 할일 항목 수정하기
    updateTodo(state, action) {
      const { id, list } = action.payload;
      const index = getIndex(id, state.todos);
      state.todos[index] = { id, ...list };
    },
     // 할일 항목 삭제하기
    removeTodo(state, action) {
      state.todos.splice(action.payload, 1);
    },
    // 할일 항목 완료처리하기
    completedTodo(state, action) {
      state.todos[action.payload].isDone = true;
    },
    // 할일 항목 필터링 (중요도순으로 정리)
    filtering(state, { payload = state.filter}) {
      state.filter = payload;
      sortTodo(state.todos, payload);
    },
  }
});

export const {
  addTodo,
  updateTodo,
  removeTodo,
  completedTodo,
  filtering,
} = todoSlice.actions;

export const todos = state => state.todo.todos;

export default todoSlice.reducer;

