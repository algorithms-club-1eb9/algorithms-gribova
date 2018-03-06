module.exports = (elementsArray, searchedElement) => {
    let min = 0;
    let max = elementsArray.length - 1;

    while (min <= max) {
        const mid = Math.round((max + min) / 2);
        if (elementsArray[mid] === searchedElement) return mid;
        else if (elementsArray[mid] > searchedElement) max = mid - 1;
        else min = mid + 1;
    }
    return -1;
};
