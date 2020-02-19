import React from 'react';
// import './Bottom-text.css';
export default function BottomText({ onChange }) {
  return (
    <div>
      <label>Bottom text:</label>
      <input type="text" className="Bottom-text" onChange={onChange} />
    </div>
  );
}
