import './App.css';
import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

function randomInt(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function App() {

    const [parent] = useAutoAnimate(/* optional config */) as any

    const [items, setItems] = React.useState(Array(randomInt(10, 20))
        .fill(0)
        .map(_ => randomInt(0, 999))
        .map((n, i) => ({ value: n, id: i })));

    const shuffle = () => setItems(Array(randomInt(10, 20))
        .fill(0)
        .map(_ => randomInt(0, 999))
        .map((n, i) => ({ value: n, id: i }))
        .reverse());

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
    <div style={containerStyle} ref={parent}>
        {items.map(p => <div key={p.id} style={itemStyle}>{p.value}</div>)}
        <button onClick={shuffle}></button>
    </div>
  );
}

export default App;
