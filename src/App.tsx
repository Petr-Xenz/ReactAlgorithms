import './App.css';
import React from 'react';

function randomInt(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function App() {

    const items = Array(randomInt(10, 20))
        .fill(0)
        .map(_ => randomInt(0, 999))
        .map((n, i) => ({ value: n, id: i }));

    const itemStyle: React.CSSProperties = {
        margin: 5,
        padding: 5,
        borderColor: 'darkgrey',
        borderStyle: 'solid',
        borderWidth: 0.5,
    }

    const containerStyle: React.CSSProperties = {
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
    }

  return (
        <div style={containerStyle}>
            {items.map(p => <div key={p.id} style={itemStyle}>{p.value}</div>)}
        </div>
  );
}

export default App;
