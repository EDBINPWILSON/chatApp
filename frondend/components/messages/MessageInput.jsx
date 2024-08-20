import React from 'react';
import { BsSend } from 'react-icons/bs';
import './MessageInput.css';

const MessageInput = () => {
  return (
    <div>
      <input className="inpp" type="text" placeholder="send message" />
      <button>
        <BsSend />
      </button>
    </div>
  );
};

export default MessageInput;
