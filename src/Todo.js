import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label htmlFor={`todo-${todo.id}`}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          id={`todo-${todo.id}`}
        />
        {todo.name}
      </label>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
