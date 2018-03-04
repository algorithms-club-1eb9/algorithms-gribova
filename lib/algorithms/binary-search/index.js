module.exports = (elementsArray, searchedElement) => {
    let min = 0;
    let max = elementsArray.length - 1;
    let mid = Math.round((min + max) / 2);
    console.log(min, max, mid);

    while (min <= max) {
        console.log(min, max, mid);
        if (elementsArray[mid] === searchedElement) return mid;
        else if (elementsArray[mid] > searchedElement) max = mid - 1;
        else min = mid + 1;

        mid = Math.round((max + min) / 2);
    }
    return -1;
};