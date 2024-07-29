import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ text, onClick }) => {
  return (
    <div className="chat-bubble" onClick={() => onClick(text)}>
      {text}
    </div>
  );
};

export default ChatBubble;