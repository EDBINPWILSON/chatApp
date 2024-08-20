import React from 'react';
import Messages from './Messages';
import './MessageContainer.css';
import { TiMessage } from 'react-icons/ti';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="class">
            <div className="nam">
              <span>John doe</span>
            </div>
            <div>
              <Messages />
              <MessageInput />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div>
      <p>Welcome john Doe</p>
      <p>Select a Chat to start messaging</p>
      <TiMessage />
    </div>
  );
};
