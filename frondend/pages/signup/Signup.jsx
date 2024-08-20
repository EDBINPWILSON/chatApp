import React from 'react';
import GenderCheckbox from './GenderCheckbox';
import './Signup.css';

function SignUp() {
  return (
    <div className="div">
      <div className="ccc">
        <h1>Sign Up </h1>
        <h1 className="h1"> Chat App</h1>
      </div>
      <div className="hey">
        <div>
          <h1>fullName</h1>
          <input type="text" placeholder="john Doe" />
        </div>
        <div>
          <h1>userName</h1>
          <input type="text" placeholder="johndoe" />
        </div>
        <div>
          <h1>password</h1>
          <input type="text" placeholder="Enter password" />
        </div>
        <div>
          <h1>confirm Password</h1>
          <input type="text" placeholder="confirm password" />
        </div>
        <a href="">Already have an account</a>
        <div>
          <GenderCheckbox />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
