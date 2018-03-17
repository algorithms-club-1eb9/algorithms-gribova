class Node {
    constructor(element) {
        this.element = element;
        this.nextNode = null;
        this.prevNode = null;
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.positionError = new Error('Position Out Of Bound');
        this.elementError = new Error('Element Is Null');
    }

    push(element) {
        if (!element && element !== 0) {
            throw this.elementError;
        } else if (this.head === null) {
            this.head = new Node(element);
            this.tail = this.head;
        } else {
            this.tail.nextNode = new Node(element);
            this.tail.nextNode.prevNode = this.tail;
            this.tail = this.tail.nextNode;
        }
        this.size += 1;
    }

    pop() {
        const element = this.tail;
        if (!element) {
            throw this.elementError;
        } else if (this.tail === null) {
            throw this.positionError;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prevNode;
            this.tail.nextNode = null;
        }
        this.size -= 1;
        return element.element;
    }

    unshift(element) {
        if (!element && element !== 0) {
            throw this.elementError;
        } else if (this.head === null) {
            this.head = new Node(element);
            this.tail = this.head;
        } else {
            this.head.prevNode = new Node(element);
            this.head.prevNode.nextNode = this.head;
            this.head = this.head.prevNode;
        }
        this.size += 1;
    }

    shift() {
        const element = this.head;
        if (!element) {
            throw this.elementError;
        } else if (this.head === null) {
            throw this.positionError;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.nextNode;
            this.head.prevNode = null;
        }
        this.size -= 1;
        return element.element;
    }

    getByPosition(position) {
        if (this.size < position || position <= 0 || !position) throw this.positionError;
        let temp = this.head;
        for (let i = 1; i <= this.size; i += 1) {
            if (i === position) return temp.element;
            else temp = temp.nextNode;
        }
        return 'Not Found';
    }

    getByValue(element) {
        if (!element && element !== 0) throw this.elementError;
        let temp = this.head;
        for (let i = 1; i <= this.size; i += 1) {
            if (temp.element === element) return i;
            else temp = temp.nextNode;
        }
        return 'Not Found';
    }

    set(position, element) {
        if (this.size < position || position <= 0 || !position) throw this.positionError;
        if (!element && element !== 0) throw this.elementError;
        else {
            let temp = this.head;
            for (let i = 1; i <= this.size; i += 1) {
                if (i === position) {
                    temp.element = element;
                    return temp;
                } else temp = temp.nextNode;
            }
        } return 'Not Found';
    }

    insert(position, element) {
        if (this.size + 1 < position || position < 0 || !position) throw this.positionError;
        if (!element && element !== 0) throw this.elementError;
        else {
            let temp = this.head;
            for (let i = 1; i <= this.size + 1; i += 1) {
                if (i === position) {
                    if (temp === null) {
                        this.push(element);
                        break;
                    } else if (temp.prevNode === null) {
                        this.unshift(element);
                        break;
                    } else {
                        const tempPrevNode = temp.prevNode;
                        tempPrevNode.nextNode = new Node(element);
                        tempPrevNode.nextNode.prevNode = tempPrevNode;
                        tempPrevNode.nextNode.nextNode = temp;
                        temp.prevNode = tempPrevNode.nextNode;
                        tempPrevNode.nextNode.element = element;
                        this.size += 1;
                        break;
                    }
                } else temp = temp.nextNode;
            }
        }
    }

    removeByValue(element) {
        if (!element && element !== 0) throw this.elementError;
        if (this.size === 0) throw this.positionError;
        else {
            let temp = this.head;
            if (!temp) throw this.elementError;
            for (let i = 1; i <= this.size; i += 1) {
                if (temp.element === element) {
                    if (temp.nextNode === null) {
                        return this.pop();
                    } else if (temp.prevNode === null) {
                        return this.shift();
                    } else {
                        return this.remove(temp);
                    }
                } else temp = temp.nextNode;
            }
        }
        return 'Not Found';
    }

    removeByPosition(position) {
        if (this.size < position || position <= 0 || !position) throw this.positionError;
        else {
            let temp = this.head;
            if (!temp) throw this.elementError;
            for (let i = 1; i <= this.size; i += 1) {
                if (i === position) {
                    if (temp.nextNode === null) {
                        return this.pop();
                    } else if (temp.prevNode === null) {
                        return this.shift();
                    } else {
                        return this.remove(temp);
                    }
                } else temp = temp.nextNode;
            }
        }
        return 'Not Found';
    }

    remove(node) {
        node.prevNode.nextNode = node.nextNode;
        node.nextNode.prevNode = node.prevNode;
        this.size -= 1;
        return node.element;
    }
};
