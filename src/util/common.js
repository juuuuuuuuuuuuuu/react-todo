/**
 * 문자열이 비었는지 확인
 */
export function isEmpty(value) {
  return value.trim().length === 0;
}

/**
 * 인자로 들어온 배열에서 id값과 동일한 경우 index 리턴
 */
export function getIndex(id, todos) {
  return todos.findIndex(todo => todo.id === id);
}

/**
 * 우선순위에 따른 정렬
 */
export function sortTodo(todos, type) {
  return todos.sort((a, b) => a.priority === type ? -1 : 1);
}

/**
 * 타입에 따라 배열 정렬하여 리턴
 */
export function getFilter(todos, type) {
  switch(type) {
    case 'todo':
      return todos.filter(todo => {
        if (todo.isDone) { return false; }

          if (todo.dueDate) {
            return new Date(todo.dueDate) >= new Date();
          }
          return true;
      })
    case 'past':
      return todos.filter(todo => new Date(todo.dueDate) < new Date());
    case 'complete':
      return todos.filter(todo => todo.isDone);
    default:
      return;
  }
}