import { useState } from 'react'
import { DeepChat } from "deep-chat-react";
import Chat from './Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const initialMessages = [
    { role: "user", text: "Hey, how are you today?" },
    { role: "ai", text: "I am doing very well!" }
  ];

  const params = {
    prompt: input,
    model: "text-davinci-003",
    max_tokens: 200,
    temperature: 0.7,
  };
  

  return (
    <div className="App">
      <h1>Chat POC</h1>
      <Chat />
      
    </div>
  )
}

export default App
