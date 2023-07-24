import React, { useState } from 'react';
import axios from 'axios';



const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const APIKEY = import.meta.env.VITE_OPENAI_API_KEY;

  const openAiApiUrl = 'https://api.openai.com/v1/chat/completions';

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //if (input.trim() === '') return;

    const headers = {
      'Authorization': 'Bearer ' + APIKEY,
    };

    if(input.length === 0) {
      alert('Please enter any message to continue');
    }
    else {

    try {
      const response = await axios.post(openAiApiUrl, {
        messages: [{ role: "user", content: input }],
        max_tokens: 100,
        temperature: 0.7,
        model: "gpt-3.5-turbo",
      }, { headers });

      const botResponse = response.data.choices[0].message.content;
      //console.log('botResponse', botResponse);
      
      setMessages([...messages, { user: input, bot: botResponse }]);
      setInput('');
    } catch (error) {
      console.error('Error fetching response from OpenAI API:', error);
    }}
  };

  return (
    <div className="chatbot-container">
      {messages.length > 0 && (
      <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>You:</strong> {message.user}
            <br />
            <strong>Bot:</strong> {message.bot}
          </div>
        ))}
      </div>
      )}
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
