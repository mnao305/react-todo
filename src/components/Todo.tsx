import React from 'react'

interface Todo {
  id: string
  name: string
  check: boolean
}
interface TodoProps {
  todo: Todo
  deleteTodo: Function
  checkChange: Function
}

const Todo: React.FC<TodoProps> = props => {
  const deleteTodo = (e: React.MouseEvent): void => {
    e.preventDefault()
    const flg = window.confirm('削除しますか？')
    if (flg) {
      props.deleteTodo(props.todo.id)
    }
  }
  const checkChange = () => {
    props.checkChange(props.todo.id)
  }
  return (
    <li className={`check${props.todo.check}`}>
      <label>
        <input
          type="checkbox"
          checked={props.todo.check}
          onChange={checkChange}
        />
        {props.todo.name}
      </label>
      <a href="#" onClick={(e: React.MouseEvent) => deleteTodo(e)}>
        [x]
      </a>
    </li>
  )
}

export default Todo
