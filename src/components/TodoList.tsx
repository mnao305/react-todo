import React from 'react'
import Todo from './Todo'

interface Todos {
  id: string
  name: string
  check: boolean
}

interface TodoListProps {
  todos: Array<Todos>
}

const TodoList: React.FC<TodoListProps> = props => {
  const tmp = props.todos
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
