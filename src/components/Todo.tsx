import React from 'react'

interface Todo {
  id: string
  name: string
  check: boolean
}
interface TodoProps {
  todo: Todo
  deleteTodo: Function
}

const Todo: React.FC<TodoProps> = props => {
  const deleteTodo = (e: React.MouseEvent): void => {
    e.preventDefault()
    const flg = window.confirm('削除しますか？')
    if (flg) {
      props.deleteTodo(props.todo.id)
    }
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
