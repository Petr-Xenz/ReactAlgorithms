import './App.css';
import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export interface ArraySortProp {
    data: Array<{id: number; value: number;}>
}

function ArraySort(props: ArraySortProp) {

    const [parent] = useAutoAnimate(/* optional config */) as any
    const data = props.data;

    const itemStyle: React.CSSProperties = {
        margin: 5,
        padding: 5,
        borderColor: 'darkgrey',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: '2vw',
    }

    const containerStyle: React.CSSProperties = {
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }

  return (
    <div style={containerStyle} ref={parent}>
        {data.map(p => <div key={p.id} style={itemStyle}>{p.value}</div>)}
    </div>
  );
}

export default ArraySort;
