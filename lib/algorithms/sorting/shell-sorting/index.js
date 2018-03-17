module.exports = (elementsArray) => {
    const length = elementsArray.length;
    let k = 1;
    while (k < length / 3) {
        k = (k * 3) + 1;
    }
    while (k > 0) {
        for (let i = k; i < length; i += 1) {
            for (let j = i; j > 0; j -= k) {
                if (elementsArray[j] < elementsArray[j - k]) {
                    const temp = elementsArray[j];
                    elementsArray[j] = elementsArray[j - k];
                    elementsArray[j - k] = temp;
                }
            }
        }
        k = (k - 1) / 3;
    }
    return elementsArray;
};
