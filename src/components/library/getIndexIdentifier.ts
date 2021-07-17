
const columns: Record<number, string> = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H'
}

export const getIndexIdentifier = (index: number) => {
    const row = index % 8 + 1
    const column = columns[Math.floor(index / 8)];
    return `${column}${row}`;
};
