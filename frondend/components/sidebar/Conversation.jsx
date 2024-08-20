import React from 'react';
import './Conversation.css';

const Conversation = () => {
  return (
    <div className="people">
      <div className="avatar online">
        <img
          className="img"
          src="http://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
          alt="user avatar"
        />
      </div>

      <p>john doe</p>
      <span> 🎃 </span>
    </div>
  );
};

export default Conversation;
