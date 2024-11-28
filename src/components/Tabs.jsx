import React, { useState } from 'react';
import './Tabs.css';

const Tab = ({ tab, isActive, onActivate, onRename, onDelete, onColorChange }) => {
  const handleRename = () => {
    const newName = prompt("Enter a new name:");
    if (newName) onRename(tab.id, newName);
  };

  const handleColorChange = () => {
    const newColor = prompt("Enter a new color:");
    if (newColor) onColorChange(tab.id, newColor);
  };

  return (
    <div
      className={`tab ${isActive ? "active" : ""}`}
      style={{
        backgroundColor: tab.color || "#f9f9f9",
      }}
    >
      <span className="tab-name" onClick={() => onActivate(tab.id)}>
        {tab.name}
      </span>
      <button onClick={() => onDelete(tab.id)} className="delete-tab-button">
        X
      </button>
      <button onClick={handleRename} className="name-change-tab-button">
        Rename
      </button>
      <button onClick={handleColorChange} className="color-change-tab-button">
        Change Color
      </button>
    </div>
  );
};

export default Tab;
