const LinkedList = require('../linked-list');

module.exports = class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    shift() {
        return this.queue.shift();
    }

    push(element) {
        this.queue.push(element);
    }

    size() {
        return this.queue.size;
    }

    getHead() {
        return this.queue.head;
    }

    getTail() {
        return this.queue.tail;
    }
};
