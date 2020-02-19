import React from 'react';
export default function GenerateButton({ onClick }) {
  return (
    <button className="Generate-button" onClick={onClick}>
      Generate
    </button>
  );
}
