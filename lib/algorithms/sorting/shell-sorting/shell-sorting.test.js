require('should');
const algo = require('../../../../index.js');

describe('Shell Sorting', () => {
    it.skip('Shell Sorting. Load testing.', (done) => {
        const _items = 24000;
        let a = [];
        for (let i = 0; i <= _items; i += 1) {
            a.push(algo.getUniqueItem(_items, null));
        }
        algo.shellSorting(a);
        done();
    }).timeout(6000);

    it('Shell Sorting. Sort empty Array.', () => {
        should(algo.shellSorting([])).be.eql([]);
    });

    it('Shell Sorting. Sort Array with one element.', () => {
        should(algo.shellSorting([5])).be.eql([5]);
    });

    it('Shell Sorting. Sort Array.', () => {
        should(algo.shellSorting([1, 5, 8, 9, 3, 4, 55, 7, 0, 2, 9, 3, 5]))
            .be.eql([0, 1, 2, 3, 3, 4, 5, 5, 7, 8, 9, 9, 55]);
    });

    it('Shell Sorting. Sort 2 elements Array.', () => {
        should(algo.shellSorting([1, 5]))
            .be.eql([1, 5]);
    });

    it('Shell Sorting. Sort 2 elements Array.', () => {
        should(algo.shellSorting([8, 5]))
            .be.eql([5, 8]);
    });

    it('Shell Sorting. Sort 2 elements Array.', () => {
        should(algo.shellSorting([8, 8]))
            .be.eql([8, 8]);
    });
});
