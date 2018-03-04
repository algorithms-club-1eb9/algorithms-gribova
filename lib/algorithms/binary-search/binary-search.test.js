const should = require('should');
const algo = require('../../../index.js');

describe('Binary Search', () => {
   // it('should return index of searched element', () => {
   //     const elementIndex = algo.binarySearch([1, 7, 8, 10, 19, 33, 56, 78, 99, 107, 155, 207], 33);
   //     should(elementIndex).be.eql(5);
   // });
   //
   //  it('should return -1 index', () => {
   //      const elementIndex = algo.binarySearch([1, 7, 8, 10, 19, 33, 56, 78, 99, 107, 155, 207], 0);
   //      should(elementIndex).be.eql(-1);
   //  });
   //
   //  it('should return -1 index', () => {
   //      const elementIndex = algo.binarySearch([], 8);
   //      should(elementIndex).be.eql(-1);
   //  });
   //
   //  it('should return -1 index', () => {
   //      const elementIndex = algo.binarySearch([1], 8);
   //      should(elementIndex).be.eql(-1);
   //  });

    it('should return -1 index', () => {
        const elementIndex = algo.binarySearch([8], 6);
        should(elementIndex).be.eql(-1);
    });
    //
    // it('should return 0 index', () => {
    //     const elementIndex = algo.binarySearch([8], 8);
    //     should(elementIndex).be.eql(0);
    // });
    //
    // it('should return 1 index', () => {
    //     const elementIndex = algo.binarySearch([8, 10], 10);
    //     should(elementIndex).be.eql(1);
    // });

    it('should return -1 index', () => {
        const elementIndex = algo.binarySearch([8, 10], 7);
        should(elementIndex).be.eql(1);
    });
});
