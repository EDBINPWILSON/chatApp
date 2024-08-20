import React from 'react';
import './Sidebar.css';
import Searchinput from './Searchinput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
const Sidebar = () => {
  return (
    <div>
      <div className="side">
        <Searchinput />
        <div>
          <Conversations />
          <LogoutButton />
        </div>
      </div>
      //{' '}
      {/* <Conversation />
    //   <LogoutButton /> */}
      //{' '}
    </div>

    // <div>
    //   <Searchinput />
    //   <div className="divder px-3"></div>
    //   {/*
    //   <Conversations />
    //   <LogoutButton /> */}
    // </div>
  );
};

export default Sidebar;
