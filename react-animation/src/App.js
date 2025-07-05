// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('red');
  const [clicked, setClicked] = useState(false);

  const colors = ['red', 'blue', 'green'];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBgColor(colors[index % colors.length]);
      index++;
    }, 200); // har 200ms me change

    setTimeout(() => clearInterval(interval), 5000); // 5 sec baad band

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: bgColor }}></div>
      <div className="color-box" style={{ backgroundColor: clicked ? 'orange' : bgColor }}></div>
      <div className="color-box" style={{ backgroundColor: clicked ? 'cyan' : bgColor }}></div>

      <button onClick={handleClick}>Click to Change Colors</button>
    </div>
  );
};

export default App;