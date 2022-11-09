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

    const sortCommands = props.getSortOperations(initial);

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

    return <ArraySort data={data}/>
}

export default ArraySortManager;