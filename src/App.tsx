import './App.css';
import { useState, useEffect } from 'react';
import ArraySort from './ArraySortComponent';
import GetSortOperations from './InsertionSort';

function randomInt(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const initial = Array(15)
    .fill(0)
    .map(_ => randomInt(0, 999))
    .map((v, i) => ({id: i, value: v}));

    const sortCommands = GetSortOperations(initial);

function App() {

    const [data, setData] = useState(() => 
    {
        return initial;
    });

    useEffect(() => {
    const interval = setInterval(() => setData(() => 
        {

            if (sortCommands.length == 0)
                return data;

            var command = sortCommands.pop()!;
            const temp = data[command.new];
            data[command.new] = data[command.old];
            data[command.old] = temp;

            return [...data];
        }), 750);

        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <div>
        <ArraySort data={data}/>
    </div>
  );
}

export default App;
