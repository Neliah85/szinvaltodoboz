import React, { useState } from 'react';

// ColorBox komponens - megjeleníti a dobozt a háttérszínnel
function ColorBox({ color }) {
  return (
    <div style={{
      width: '200px',
      height: '200px',
      backgroundColor: color,
      margin: '20px auto',
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '18px',
      color: '#fff'
    }}>
      {color}
    </div>
  );
}

// ColorSelector komponens - gombokat jelenít meg a színek kiválasztásához
function ColorSelector({ onColorSelect }) {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  return (
    <div style={{ textAlign: 'center' }}>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: color,
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

// Szülő komponens - tárolja az aktuális színt és frissíti a gyermekkomponensek props-át
function App() {
  const [selectedColor, setSelectedColor] = useState('gray');

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Színváltó Doboz</h1>
      <ColorSelector onColorSelect={setSelectedColor} />
      <ColorBox color={selectedColor} />
    </div>
  );
}

export default App;
