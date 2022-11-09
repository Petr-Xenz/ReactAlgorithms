import './App.css';
import { useState, useEffect, CSSProperties, ReactElement } from 'react';
import ArraySort from './ArraySortComponent';
import GetSortOperations from './InsertionSort';
import ArraySortManager from './ArraySortManagerComponent';

function App() {

    const containerStyle : CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
    }

    const algSelectionContainerStyle : CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        backgroundColor: 'blueviolet',
        alignItems: 'stretch',
        justifyContent: 'start',
        padding: 10,
        flexGrow: 0.2,
    }

    const algContainerStyle : CSSProperties = {
        height: '100vh',
    }

    const [algComponent, setComponent] = useState(() => 
    {
        return <ArraySortManager getSortOperations={GetSortOperations}/>
    });

  return (
    <div style={containerStyle}>
        <div style={algSelectionContainerStyle}>
            {getAlgorithmSelectors()}
        </div>
        <div style={algContainerStyle}>
            {algComponent}
        </div>
    </div>
  );
  
  function getAlgorithmSelectors() {
    const result = Array<ReactElement>();

    const insertion = 
        <button 
            onClick={() => setComponent(() => <ArraySortManager getSortOperations={GetSortOperations}/>)}>
            Insertion sort
        </button>
    result.push(insertion);

    const quick = 
    <button 
        onClick={() => setComponent(() => <div/>)}>
        Quick sort
    </button>
    result.push(quick);

    return result;
  }
}


export default App;
