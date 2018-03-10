require('should');
const algo = require('../../../index.js');

// function generateArrayOfConsecutiveNumbers(numberOfElements) {
//     return Array.from(new Array(numberOfElements), (x, i) => i);
// }

describe('DCP', () => {
    // More than 3 elements in Array: even number of elements
    it('Positive. connect elements. 1 and 1', () => {
        // const testArr = generateArrayOfConsecutiveNumbers(12);
        const arrOfConstructions = new algo.DCP();
        console.log(arrOfConstructions.connect(2, 1));
        console.log(arrOfConstructions.connect(5, 6));
        console.log(arrOfConstructions.connect(7, 2));
        console.log(arrOfConstructions.connect(0, 8));
        console.log(arrOfConstructions.connect(7, 8));
        // console.log(arrOfConstructions.connect(6, 7));
        // console.log(arrOfConstructions.connect(3, 8));
        // console.log(arrOfConstructions.connect(1, 5));
        console.log(arrOfConstructions.referenseArray);
        console.log(arrOfConstructions.depthArray);
        arrOfConstructions.should.be.an.instanceOf(algo.DCP);
        // arrOfConstructions.referenseArray.should.be.eql([1, 1]);
        arrOfConstructions.isConnected(7, 2).should.be.eql(true);
        console.log(arrOfConstructions.referenseArray);
        console.log(arrOfConstructions.depthArray);
        arrOfConstructions.isConnected(7, 10).should.be.eql(false);
        arrOfConstructions.component(5).should.be.eql(6);
        arrOfConstructions.component(7).should.be.eql(8);
        arrOfConstructions.count().should.be.eql(2);
        console.log(arrOfConstructions.referenseArray);
        console.log(arrOfConstructions.depthArray);
    });
});
