import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="aaa">
      <div className=" second">
        <h1 className="third ">
          Login
          <span className="chat">ChatApp</span>
        </h1>
        <div className="main">
          <div>
            <span className="user">UserName </span>

            <input type="text" placeholder="Enter username" />
          </div>
          <div>
            <span className="user">Password </span>

            <input type="text" placeholder="Enter passwoed" />
          </div>
          <a href="">{"Don't"} have an account</a>
          <div>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
