import React, { useState } from 'react'

const InputForm: React.FC = () => {
  const [text, setText] = useState('')

  const addTodo = () => {
    window.alert(text)
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
