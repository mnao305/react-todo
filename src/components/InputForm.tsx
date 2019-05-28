import React, { useState } from 'react'

interface InputFormProps {
  addTodo: Function
}

const InputForm: React.FC<InputFormProps> = props => {
  const [text, setText] = useState('')

  const addTodo = () => {
    props.addTodo(text)
    setText('')
  }
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div className="InputForm">
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeText(e)}
      />
      <button onClick={addTodo}>追加</button>
    </div>
  )
}

export default InputForm
