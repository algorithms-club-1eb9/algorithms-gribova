module.exports = class Stack {
    constructor() {
        this.stack = [];
    }

    pop() {
        const res = [];
        const element = this.stack[this.stack.length - 1];
        for (let i = 0; i < this.stack.length - 1; i += 1) {
            res[i] = this.stack[i];
        }
        this.stack = res;
        return element;
    }

    push(element) {
        this.stack[this.stack.length] = element;
    }

    size() {
        return this.stack.length;
    }
};
