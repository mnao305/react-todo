import React from 'react'

interface Todo {
  id: string
  name: string
  check: boolean
}
interface TodoProps {
  todo: Todo
}

const Todo: React.FC<TodoProps> = props => {
  const deleteTodo = (e: React.MouseEvent): void => {
    e.preventDefault()
    window.alert('Delete')
  }
  return (
    <li>
      <label>
        <input type="checkbox" />
        {props.todo.name}
      </label>
      <a href="#" onClick={(e: React.MouseEvent) => deleteTodo(e)}>
        [x]
      </a>
    </li>
  )
}

export default Todo
