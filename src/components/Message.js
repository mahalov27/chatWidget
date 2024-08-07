import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.fromBot ? 'from-bot' : 'from-user'}`}>
      {message.text}
    </div>
  );
};

export default Message;