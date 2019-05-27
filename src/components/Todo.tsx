import React from 'react'

const Todo: React.FC = () => {
  const deleteTodo = (e: React.MouseEvent): void => {
    e.preventDefault()
    window.alert('Delete')
  }
  return (
    <li>
      <label>
        <input type="checkbox" />
        hogefuga
      </label>
      <a href="#" onClick={(e: React.MouseEvent) => deleteTodo(e)}>
        [x]
      </a>
    </li>
  )
}

export default Todo
