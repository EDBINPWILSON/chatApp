import React from 'react';
import './GenderCheckbox.css';

const GenderCheckbox = () => {
  return (
    <div className="check">
      <div>
        <span>Male</span>
        <input type="checkbox" />
      </div>
      <div>
        <span>Female</span>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default GenderCheckbox;
