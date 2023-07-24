import { useState } from 'react'
import { DeepChat } from "deep-chat-react";
import Chat from './Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div className="App">
      <h1>Chat POC</h1>
      <Chat />
      
    </div>
  )
}

export default App
