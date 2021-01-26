import React from 'react';

function List({ className, todo, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(todo.id);
  };

  return (
    <a
      href="#"
      className={`list-group-item list-group-${className} list-group-item-action`}
      onClick={handleClick}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">[{todo.title}]</h5>
        <h5 className="mb-1">{todo.content}</h5>
        <small>{todo.dueDate}</small>
        <small>{todo.priority === 'high' ? '↑' : '↓'}</small>
      </div>
    </a>
  );
}
export default List;
