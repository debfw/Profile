import React, { useState } from 'react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const Chat = () => {
  const [input, setInput] = useState(''); // State for the input field
  const [messages, setMessages] = useState<Message[]>([]); // State to store chat messages

  const sendMessageToServer = async (inputMessage:string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }), 
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, { role: 'user', content: inputMessage }, { role: 'bot', content: data }]); 
      setInput(''); 
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return; 
    sendMessageToServer(input);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.role}:</strong> {msg.content}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

