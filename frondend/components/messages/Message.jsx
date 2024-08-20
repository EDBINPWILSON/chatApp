import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <div className="com">
      <div className="blue">
        <div className="messco">Hi! how are you</div>

        <img
          alt="TailWind CSS chat bubble component"
          src={
            'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
          }
        />
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {' '}
        12:20
      </div>
    </div>
  );
};

export default Message;
