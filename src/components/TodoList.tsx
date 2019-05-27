import React from 'react'
import Todo from './Todo'

const TodoList: React.FC = () => {
  return (
    <div className="TodoList">
      <ul>
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  )
}

export default TodoList
