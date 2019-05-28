import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputForm from './components/InputForm'

const App: React.FC = () => {
  const [state, setState] = useState({
    todos: [
      { id: '0', name: 'hoge', check: false },
      { id: '0', name: 'fuga', check: false }
    ]
  })
  return (
    <div className="App">
      <Header />
      <InputForm />
      <TodoList todos={state.todos} />
    </div>
  )
}

export default App
