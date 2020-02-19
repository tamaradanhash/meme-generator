import React from 'react';
// import './Top-text.css';
export default function TopText({ onChange }) {
  return (
    <div>
      <label>Top text:</label>
      <input type="text" className="Top-text" onChange={onChange} />
    </div>
  );
}
