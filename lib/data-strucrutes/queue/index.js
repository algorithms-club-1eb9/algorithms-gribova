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
};
