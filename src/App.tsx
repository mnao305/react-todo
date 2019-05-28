import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputForm from './components/InputForm'

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: '0', name: 'hoge', check: false },
    { id: '1', name: 'fuga', check: false }
  ])

  const addTodo = (data: any) => {
    setTodos(prevState => {
      return [...prevState, { id: `${Date.now()}`, name: data, check: false }]
    })
  }

  return (
    <div className="App">
      <Header />
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
