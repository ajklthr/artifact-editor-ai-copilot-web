import React, { useState } from 'react';
import {
  MessageBox,
  MessageList,
  Input,
} from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

function ChatPanel({ onSendMessage }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = {
        position: 'right',
        type: 'text',
        text: input,
        date: new Date(),
      };
      setMessages([...messages, userMessage]);
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <MessageList
        className="message-list"
        lockable={true}
        dataSource={messages}
      />
      <Input
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rightButtons={
          <button onClick={handleSend}>Send</button>
        }
      />
    </div>
  );
}

export default ChatPanel;
