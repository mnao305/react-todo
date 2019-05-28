import React from 'react'
import Todo from './Todo'

interface Todos {
  id: string
  name: string
  check: boolean
}

interface TodoListProps {
  todos: Array<Todos>
  deleteTodo: Function
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <div className="TodoList">
      <ul>
        {props.todos.map(todo => {
          return (
            <Todo deleteTodo={props.deleteTodo} key={todo.id} todo={todo} />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
