const LinkedList = require('../linked-list');

module.exports = class Stack {
    constructor() {
        this.stack = new LinkedList();
    }

    pop() {
        const element = this.stack.tail.element;
        this.stack.pop();
        return element;
    }

    push(element) {
        this.stack.push(element);
    }

    size() {
        return this.stack.size;
    }

    getHead() {
        return this.stack.head;
    }

    getTail() {
        return this.stack.tail;
    }
};
