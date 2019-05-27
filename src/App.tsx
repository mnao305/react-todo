import React from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputForm from './components/InputForm'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <TodoList />
    </div>
  )
}

export default App
