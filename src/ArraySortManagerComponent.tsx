import { useEffect, useState } from "react";
import ArraySort from "./ArraySortComponent";

export interface ArraySortManagerProp {
    getSortOperations: (data: Array<{id: number; value: number;}>) => Array<{old: number, new: number}>
}

function randomInt(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const initial = Array(15)
    .fill(0)
    .map(_ => randomInt(0, 999))
    .map((v, i) => ({id: i, value: v}));

function ArraySortManager(props: ArraySortManagerProp) {

    const [state, setData] = useState(() => 
    {
        const sortCommands = props.getSortOperations(initial);
        return { data: initial, sortCommands};
    });

    useEffect(() => {
            const interval = setInterval(() => setData(() => 
            {
                const { data, sortCommands }  = state;

                if (state.sortCommands.length === 0)
                    return { data: data, sortCommands: sortCommands };

                const command = sortCommands.pop()!;
                
                const temp = data[command.new];
                data[command.new] = data[command.old];
                data[command.old] = temp;

                return { data: data, sortCommands: sortCommands };
            }), 750);

        return () => {
            clearInterval(interval);
        };
    }, [state]);

    return <ArraySort data={state.data}/>
}

export default ArraySortManager;