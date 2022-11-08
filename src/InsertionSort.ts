function GetSortOperations(data: Array<{id: number, value: number}>) {
    const copy = [...data];
    const result = Array<{old: number, new: number}>();

    try
    {
        for (let i = 0; i < copy.length - 1; i++) {
            let current = copy[i];
            let next = copy[i + 1];
            if (current.value < next.value) {
                copy[i] = next;
                copy[i + 1] = current;
                result.push({old: i, new: i + 1});
            }
        
            let j = i;
            while (j > 0 && copy[j].value > copy[j - 1].value) {
                let previos = copy[j - 1];
                let current = copy[j];
                copy[j - 1] = current;
                copy[j] = previos;
                result.push({old: j, new: j - 1});
                j--;
            }
        }
    
        return result.reverse();
    }
    catch (e)
    {
        return Array<{old: number, new: number}>();
    }

}

export default GetSortOperations;