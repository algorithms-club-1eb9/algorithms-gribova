const binarySearch = require('./lib/algorithms/binary-search');
const DCP = require('./lib/algorithms/dynamic-connectivity-problem');
const Stack = require('./lib/data-strucrutes/stack');
const Queue = require('./lib/data-strucrutes/queue');
const LinkedList = require('./lib/data-strucrutes/linked-list');


getUniqueItem = function getUniqueItem(count, notEqual) {
    const _result = Math.floor(Math.random() * count);
    return _result === notEqual ? getUniqueItem(count, notEqual) : _result;
};

module.exports = {
    binarySearch,
    DCP,
    Stack,
    Queue,
    LinkedList,
    getUniqueItem,
};
