import './App.css';
import React, { useState } from 'react';
import ChatPanel from './ChatPanel';
import VerticalLayout from './VerticalLayout';
import ArtifactPanel from './ArtifactPanel';
import RichEditor from './RichEditor';

function App() {
  const [artifactContent, setArtifactContent] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Update chat messages with the user's message
    const userMessage = {
      position: 'right',
      type: 'text',
      text: message,
      date: new Date(),
    };
    setChatMessages((prev) => [...prev, userMessage.text]);

    // Call backend endpoint
    try {
      const response = await fetch('http://127.0.0.1:8000/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "question": message,
          "guardrails": false
        }),
      });
      const data = await response.json();

      // Update chat with system's response
      const systemMessage = {
        position: 'left',
        type: 'text',
        text: data.reply,
        date: new Date(),
      };
      setChatMessages((prev) => [...prev, systemMessage]);

      // Update artifact content
      setArtifactContent(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <VerticalLayout>
      <ChatPanel onSendMessage={handleSendMessage} messages={chatMessages} />
      <RichEditor content={artifactContent}></RichEditor>
    </VerticalLayout>
  );
}

export default App;
