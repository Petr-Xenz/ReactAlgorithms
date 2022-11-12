function GetSortOperations(data: Array<{id: number, value: number}>) {
    const copy = [...data];
    const result = Array<{old: number, new: number}>();

    try
    {
        Sort(copy, 0, data.length - 1, result);
        return result.reverse();
    }
    catch (e)
    {
        return Array<{old: number, new: number}>();
    }

}

function Sort(data: Array<{id: number, value: number}>, low: number, high: number, events: Array<{old: number, new: number}>) {
    if (low < 0 || low >= high)
        return;
    
    let tempPosition = low - 1;
    const pivot = data[high].value;

    for (let i = low; i < high; i++) {
        if (data[i].value < pivot) {
            tempPosition++;
            const temp = data[i];
            data[i] = data[tempPosition];
            data[tempPosition] = temp;
            events.push({old: i, new: tempPosition});
        } 
    }

    tempPosition++;
    const temp = data[high];
    data[high] = data[tempPosition];
    data[tempPosition] = temp;
    events.push({old: high, new: tempPosition});

    Sort(data, low, tempPosition - 1, events);
    Sort(data, tempPosition + 1, high, events);
} 

export default GetSortOperations;