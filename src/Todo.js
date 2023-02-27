import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function hendleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div>
        <label>
            <input type='checkbox' checked={todo.complete} onChange={hendleTodoClick} />
     {todo.name}
     </label>
    </div>
  )
}
