import './App.css';
import { useState, CSSProperties, ReactElement } from 'react';
import * as insertionSort from './InsertionSort';
import * as quickSort from './QuickSort';
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
        gap: 10,
        backgroundColor: 'blueviolet',
        alignItems: 'stretch',
        justifyContent: 'start',
        padding: 20,
    }

    const algContainerStyle : CSSProperties = {
        height: '100vh',
        width: '100vw',
    }

    const [algComponent, setComponent] = useState(() => 
    {
        return <ArraySortManager key={1} getSortOperations={insertionSort.default}/>
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
            onClick={() => setComponent(() => <ArraySortManager key={1} getSortOperations={insertionSort.default}/>)}>
            Insertion sort
        </button>
    result.push(insertion);

    const quick = 
    <button 
        onClick={() => setComponent(() => <ArraySortManager key={2} getSortOperations={quickSort.default}/>)}>
        Quick sort
    </button>
    result.push(quick);

    return result;
  }
}


export default App;
