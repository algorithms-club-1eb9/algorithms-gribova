require('should');
const algo = require('../../../index.js');

// Test data
const oddArray = [1, 7, 8, 10, 19, 33, 56, 78, 107, 155, 207];
const evenArray = [1, 7, 8, 10, 19, 33, 56, 78, 99, 107, 155, 207];
const twoElementsArray = [7, 10];
const oneElementArray = [8];


describe('Binary Search', () => {
    // More than 3 elements in Array: even number of elements
    it('Positive. More than 3 elements. Even. Find first element: should return 0 index', () => {
        const elementIndex = algo.binarySearch(evenArray, 1);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(0);
    });

    it('Positive. More than 3 elements. Even. Find last element: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(evenArray, evenArray[evenArray.length - 1]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(evenArray.length - 1);
    });

    it('Positive. More than 3 elements. Even. Find element in the middle: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(evenArray, evenArray[Math.round((evenArray.length - 1) / 2)]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(Math.round((evenArray.length - 1) / 2));
    });

    // More than 3 elements in Array: odd number of elements
    it('Positive. More than 3 elements. Odd. Find first element: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(oddArray, 1);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(0);
    });

    it('Positive. More than 3 elements. Odd. Find last element: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(oddArray, oddArray[oddArray.length - 1]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(oddArray.length - 1);
    });

    it('Positive. More than 3 elements. Odd. Find element in the middle: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(oddArray, oddArray[Math.round((oddArray.length - 1) / 2)]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(Math.round((oddArray.length - 1) / 2));
    });

    // Common
    it('Negative. More than 3 elements: should return -1 index', () => {
        const elementIndex = algo.binarySearch(evenArray, 8234678923475);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    // Empty Array and invalid searched element
    it('Negative. Empty array. Searched element is present: should return -1 index', () => {
        const elementIndex = algo.binarySearch([], 8);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    it('Negative. Empty array. Searched element is NaN: should return -1 index', () => {
        const elementIndex = algo.binarySearch([]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    it('Negative. Array with elements. Searched element is NaN: should return -1 index', () => {
        const elementIndex = algo.binarySearch(oddArray);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    // 1 element in Array
    it('Negative. 1 element. Searched element is bigger: should return -1 index', () => {
        const elementIndex = algo.binarySearch(oneElementArray, oneElementArray[0] + 1);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    it('Negative. 1 element. Searched element is lower: should return -1 index', () => {
        const elementIndex = algo.binarySearch(oneElementArray, oneElementArray[0] - 1);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    it('Positive. 1 element: should return 0 index', () => {
        const elementIndex = algo.binarySearch(oneElementArray, oneElementArray[0]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(0);
    });

    // 2 elements in Array
    it('Positive. 2 elements. Second element: should return 1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, twoElementsArray[1]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(1);
    });

    it('Positive. 2 elements. First element: should return 0 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, twoElementsArray[0]);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(0);
    });

    it('Negative. 2 elements. Searched element is lower than 1st element: should return -1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, twoElementsArray[0] - 1);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    it('Negative. 2 elements. Searched element is lower than 2nd element: should return -1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, (twoElementsArray[1] + twoElementsArray[0]) / 2);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });

    it('Negative. 2 elements. Searched element is bigger than all elements: should return -1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, twoElementsArray[1] + 1);
        elementIndex.should.be.an.instanceOf(Number).and.be.eql(-1);
    });
});
