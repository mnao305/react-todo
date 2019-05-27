import React from 'react'
import Todo from './Todo'

const TodoList: React.FC = () => {
  const tmp = [
    { id: '0', name: 'hoge', check: false },
    { id: '0', name: 'fuga', check: false }
  ]
  const todos = tmp.map(todo => {
    return <Todo key={todo.id} todo={todo} />
  })
  return (
    <div className="TodoList">
      <ul>{todos}</ul>
    </div>
  )
}

export default TodoList
