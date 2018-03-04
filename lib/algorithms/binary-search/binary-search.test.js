const should = require('should');
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
        should(elementIndex).be.eql(0);
    });

    it('Positive. More than 3 elements. Even. Find last element: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(evenArray, 207);
        should(elementIndex).be.eql(11);
    });

    it('Positive. More than 3 elements. Even. Find element in the middle: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(evenArray, 33);
        should(elementIndex).be.eql(5);
    });

    // More than 3 elements in Array: odd number of elements
    it('Positive. More than 3 elements. Odd. Find first element: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(oddArray, 1);
        should(elementIndex).be.eql(0);
    });

    it('Positive. More than 3 elements. Odd. Find last element: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(oddArray, 207);
        should(elementIndex).be.eql(10);
    });

    it('Positive. More than 3 elements. Odd. Find element in the middle: should return index of searched element', () => {
        const elementIndex = algo.binarySearch(oddArray, 56);
        should(elementIndex).be.eql(6);
    });

    // Common
    it('Negative. More than 3 elements: should return -1 index', () => {
        const elementIndex = algo.binarySearch(oddArray, 85);
        should(elementIndex).be.eql(-1);
    });

    // Empty Array
    it('Negative. Empty array: should return -1 index', () => {
        const elementIndex = algo.binarySearch([], 8);
        should(elementIndex).be.eql(-1);
    });

    // 1 element in Array
    it('Negative. 1 element. Searched element is bigger: should return -1 index', () => {
        const elementIndex = algo.binarySearch(oneElementArray, 125);
        should(elementIndex).be.eql(-1);
    });

    it('Negative. 1 element. Searched element is lower: should return -1 index', () => {
        const elementIndex = algo.binarySearch(oneElementArray, 6);
        should(elementIndex).be.eql(-1);
    });

    it('Positive. 1 element: should return 0 index', () => {
        const elementIndex = algo.binarySearch(oneElementArray, 8);
        should(elementIndex).be.eql(0);
    });

    // 2 elements in Array
    it('Positive. 2 elements. Second element: should return 1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, 10);
        should(elementIndex).be.eql(1);
    });

    it('Positive. 2 elements. First element: should return 0 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, 7);
        should(elementIndex).be.eql(0);
    });

    it('Negative. 2 elements. Searched element is lower than 1st element: should return -1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, 6);
        should(elementIndex).be.eql(-1);
    });

    it('Negative. 2 elements. Searched element is lower than 2nd element: should return -1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, 9);
        should(elementIndex).be.eql(-1);
    });

    it('Negative. 2 elements. Searched element is upper than all elements: should return -1 index', () => {
        const elementIndex = algo.binarySearch(twoElementsArray, 21);
        should(elementIndex).be.eql(-1);
    });
});
