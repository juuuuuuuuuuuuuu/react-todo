export function isEmpty(value) {
  return value.trim().length === 0;
}

export function getIndex(id, todos) {
  return todos.findIndex(todo => todo.id === id);
}

export function sortTodo(todos, type) {
  return todos.sort((a, b) => a.priority === type ? -1 : 1);
}

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