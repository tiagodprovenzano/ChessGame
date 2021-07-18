export let colorSelector = (index: number) => {
    const indexFactor = Math.floor(index / 8);
    let indexFrom8 = index % 8;
    const xFactor = (indexFactor + 2) % 2;
    if (xFactor) {
        indexFrom8++;
    }
    return (indexFrom8 + 2) % 2 === 0 ? '#eeeed2' : '#769656';
};
