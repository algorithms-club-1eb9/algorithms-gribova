require('should');
const algo = require('../../../index.js');

describe('Linked List', () => {
    // Push
    it('Positive. Push element to the empty list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.size.should.be.eql(1);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode).be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
        should(linkedList.head).be.eql(linkedList.tail);
    });

    it('Positive. Push element to the list with one element.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(7);
        linkedList.size.should.be.eql(2);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode.element).be.eql(7);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(5);
        should(linkedList.head).not.be.eql(linkedList.tail);
    });

    it('Positive. Push element to the list with several element.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(13);
        linkedList.push(7);
        linkedList.size.should.be.eql(3);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode.element).be.eql(13);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(13);
        should(linkedList.head).not.be.eql(linkedList.tail);
        should(linkedList.head.nextNode.nextNode).be.eql(linkedList.tail);
        should(linkedList.head.nextNode.prevNode).be.eql(linkedList.head);
    });

    it('Negative. Push. Should throw error.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(7);
        try {
            linkedList.push(null);
        } catch (e) {
            should(e).be.eql(new Error('Element Is Null'));
        }
        linkedList.size.should.be.eql(2);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode.element).be.eql(7);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(5);
        should(linkedList.head).not.be.eql(linkedList.tail);
    });

    // Unsift
    it('Positive. Unshift element to the empty list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.unshift(5);
        linkedList.size.should.be.eql(1);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode).be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
        should(linkedList.head).be.eql(linkedList.tail);
    });

    it('Positive. Unshift element to the list with one element.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.unshift(5);
        linkedList.unshift(7);
        linkedList.size.should.be.eql(2);
        should(linkedList.head.element).be.eql(7);
        should(linkedList.head.nextNode.element).be.eql(5);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(7);
        should(linkedList.head).not.be.eql(linkedList.tail);
    });

    it('Positive. Unshift element to the list with several element.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.unshift(7);
        linkedList.unshift(13);
        linkedList.unshift(5);
        linkedList.size.should.be.eql(3);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode.element).be.eql(13);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(13);
        should(linkedList.head).not.be.eql(linkedList.tail);
        should(linkedList.head.nextNode.nextNode).be.eql(linkedList.tail);
        should(linkedList.head.nextNode.prevNode).be.eql(linkedList.head);
    });

    it('Negative. Unshift. Should throw error.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.unshift(5);
        linkedList.unshift(7);
        try {
            linkedList.unshift(null);
        } catch (e) {
            should(e).be.eql(new Error('Element Is Null'));
        }
        linkedList.size.should.be.eql(2);
        should(linkedList.head.element).be.eql(7);
        should(linkedList.head.nextNode.element).be.eql(5);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(7);
        should(linkedList.head).not.be.eql(linkedList.tail);
    });

    // Push and Unshift load testing
    it('Push and Unshift. Push. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.push(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(_items);
        should(linkedList.head.element).not.be.eql(null);
        should(linkedList.head.nextNode.element).not.be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).not.be.eql(null);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).not.be.eql(null);
        should(linkedList.head).not.be.eql(linkedList.tail);
    }).timeout(6000);

    it('Push and Unshift. Unshift. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.unshift(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(_items);
        should(linkedList.head.element).not.be.eql(null);
        should(linkedList.head.nextNode.element).not.be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).not.be.eql(null);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).not.be.eql(null);
        should(linkedList.head).not.be.eql(linkedList.tail);
    }).timeout(6000);

    it('Push and Unshift. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            if (Math.random() > 0.5) linkedList.unshift(algo.getUniqueItem(_items, null));
            else linkedList.push(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(_items);
        should(linkedList.head.element).not.be.eql(null);
        should(linkedList.head.nextNode.element).not.be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).not.be.eql(null);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).not.be.eql(null);
        should(linkedList.head).not.be.eql(linkedList.tail);
    }).timeout(6000);

    // Pop
    it('Positive. Pop. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        should(linkedList.head).not.be.eql(null);
        should(linkedList.tail).not.be.eql(null);
        linkedList.pop();
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    it('Positive. Pop. 2 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.unshift(7);
        linkedList.unshift(5);
        should(linkedList.head).not.be.eql(null);
        should(linkedList.tail).not.be.eql(null);
        linkedList.pop();
        linkedList.size.should.be.eql(1);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode).be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.head).be.eql(linkedList.tail);
    });

    it('Positive. Pop. 3 elements.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(7);
        linkedList.push(8);
        should(linkedList.head).not.be.eql(null);
        should(linkedList.tail).not.be.eql(null);
        linkedList.pop();
        linkedList.size.should.be.eql(2);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(5);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode.element).be.eql(7);
        should(linkedList.head.prevNode).be.eql(null);
    });

    it('Negative. Pop. Empty list.', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.pop();
        } catch (e) {
            should(e).be.eql(new Error('Element Is Null'));
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    // Shift
    it('Positive. Shift. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        should(linkedList.head).not.be.eql(null);
        should(linkedList.tail).not.be.eql(null);
        linkedList.shift();
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    it('Positive. Shift. 2 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.unshift(7);
        linkedList.unshift(5);
        should(linkedList.head).not.be.eql(null);
        should(linkedList.tail).not.be.eql(null);
        linkedList.shift();
        linkedList.size.should.be.eql(1);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
        should(linkedList.head.element).be.eql(7);
        should(linkedList.head.nextNode).be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.head).be.eql(linkedList.tail);
    });

    it('Positive. Shift. 3 elements.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(7);
        linkedList.push(8);
        should(linkedList.head).not.be.eql(null);
        should(linkedList.tail).not.be.eql(null);
        linkedList.shift();
        linkedList.size.should.be.eql(2);
        should(linkedList.tail.element).be.eql(8);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(7);
        should(linkedList.head.element).be.eql(7);
        should(linkedList.head.nextNode.element).be.eql(8);
        should(linkedList.head.prevNode).be.eql(null);
    });

    it('Negative. Shift. Empty list.', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.shift();
        } catch (e) {
            should(e).be.eql(new Error('Element Is Null'));
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    // Pop and Shift load testing
    it('Pop with Push. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.push(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(20000000);
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.pop();
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    }).timeout(8000);


    it('Pop with Unshift. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.unshift(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(20000000);
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.pop();
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    }).timeout(8000);

    it('Shift with Unshift. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.unshift(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(20000000);
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.shift();
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    }).timeout(8000);

    it('Shift with Push. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.push(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(20000000);
        for (let i = 0; i < 20000000; i += 1) {
            linkedList.shift();
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    }).timeout(8000);

    it('Pop and Shift. Push and Unshift. Load testing', () => {
        const linkedList = new algo.LinkedList();
        const _items = 20000000;
        for (let i = 0; i < 20000000; i += 1) {
            if (Math.random() > 0.5) linkedList.unshift(algo.getUniqueItem(_items, null));
            else linkedList.push(algo.getUniqueItem(_items, null));
        }
        linkedList.size.should.be.eql(20000000);
        for (let i = 0; i < 20000000; i += 1) {
            if (Math.random() > 0.5) linkedList.shift();
            else linkedList.pop();
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    }).timeout(8000);

    // Get
    it('Get by Value. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        should(linkedList.getByValue(5)).be.eql(1);
        linkedList.size.should.be.eql(1);
    });

    it('Get by Value. 2 element list. Last element', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(7);
        should(linkedList.getByValue(5)).be.eql(1);
        should(linkedList.getByValue(7)).be.eql(2);
        linkedList.size.should.be.eql(2);
    });

    it('Get by Value. >2 element list. Middle element', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(-9);
        linkedList.push(0);
        linkedList.push(7);
        should(linkedList.getByValue(-9)).be.eql(2);
        should(linkedList.getByValue(0)).be.eql(3);
        linkedList.size.should.be.eql(4);
    });

    it('Get by Value. Negative. Empty list', () => {
        const linkedList = new algo.LinkedList();
        should(linkedList.getByValue(45)).be.eql('Not Found');
    });

    it('Get by Value. Invalid element.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        try {
            linkedList.getByValue(null);
        } catch (e) {
            should(e).be.eql(new Error('Element Is Null'));
        }
    });

    it('Get by Value. Not Found', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        should(linkedList.getByValue(8)).be.eql('Not Found');
    });

    it('Get by Position. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        should(linkedList.getByPosition(1)).be.eql(5);
        linkedList.size.should.be.eql(1);
    });

    it('Get by Position. 2 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(7);
        should(linkedList.getByPosition(1)).be.eql(5);
        should(linkedList.getByPosition(2)).be.eql(7);
        linkedList.size.should.be.eql(2);
    });

    it('Get by Position. >2 element list. Middle element', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(-9);
        linkedList.push(0);
        linkedList.push(7);
        should(linkedList.getByPosition(1)).be.eql(5);
        should(linkedList.getByPosition(2)).be.eql(-9);
        should(linkedList.getByPosition(3)).be.eql(0);
        should(linkedList.getByPosition(4)).be.eql(7);
        linkedList.size.should.be.eql(4);
    });

    it('Get by Position. Negative. Empty list', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.getByPosition(1);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
    });

    it('Get by Position. Invalid Position. Null.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        try {
            linkedList.getByPosition(null);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
    });

    it('Get by Position. Invalid Position. Number.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        try {
            linkedList.getByPosition(8);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
    });

    it('Set. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        should(linkedList.set(1, 8).element).be.eql(8);
        should(linkedList.head.element).be.eql(8);
        should(linkedList.tail.element).be.eql(8);
        linkedList.size.should.be.eql(1);
    });

    // Set
    it('Set. 3 elements list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(9);
        linkedList.push(8);
        should(linkedList.set(1, 8).element).be.eql(8);
        should(linkedList.set(2, 0).element).be.eql(0);
        should(linkedList.set(3, 778).element).be.eql(778);
        should(linkedList.head.element).be.eql(8);
        should(linkedList.tail.element).be.eql(778);
        should(linkedList.getByPosition(2)).be.eql(0);
        linkedList.size.should.be.eql(3);
    });

    it('Set. Wrong Position.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        try {
            linkedList.set(2, 8);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
    });

    it('Set. Wrong Position.', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.set(0, 8);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
    });

    it('Set. Wrong Position.', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.set(null, 8);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
    });

    it('Set. Wrong element.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        try {
            linkedList.set(1, null);
        } catch (e) {
            should(e).be.eql(new Error('Element Is Null'));
        }
    });

    // Insert
    it('Insert. Element to the empty list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.insert(1, 5);
        linkedList.size.should.be.eql(1);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode).be.eql(null);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
        should(linkedList.head).be.eql(linkedList.tail);
    });

    it('Insert. Element on the last position.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(9);
        linkedList.push(7);
        linkedList.size.should.be.eql(2);
        linkedList.insert(3, 5);
        linkedList.size.should.be.eql(3);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(7);
    });

    it('Insert. Element on the pre last position.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(9);
        linkedList.push(7);
        linkedList.size.should.be.eql(2);
        linkedList.insert(2, 5);
        linkedList.size.should.be.eql(3);
        should(linkedList.tail.element).be.eql(7);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(5);
        should(linkedList.tail.prevNode.prevNode.element).be.eql(9);
        should(linkedList.tail.prevNode.nextNode.element).be.eql(7);
    });


    it('Insert. Element on the middle.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(9);
        linkedList.push(7);
        linkedList.push(15);
        linkedList.push(-9);
        linkedList.insert(3, 0);
        linkedList.size.should.be.eql(5);
        should(linkedList.getByValue(0)).be.eql(3);
        should(linkedList.getByValue(15)).be.eql(4);
        should(linkedList.getByValue(7)).be.eql(2);
    });

    it('Insert. Element to 1 element list. Start.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(8);
        linkedList.insert(1, 5);
        linkedList.size.should.be.eql(2);
        should(linkedList.head.element).be.eql(5);
        should(linkedList.head.nextNode.element).be.eql(8);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(8);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(5);
    });

    it('Insert. Element to 1 element list. End.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(8);
        linkedList.insert(2, 5);
        linkedList.size.should.be.eql(2);
        should(linkedList.head.element).be.eql(8);
        should(linkedList.head.nextNode.element).be.eql(5);
        should(linkedList.head.prevNode).be.eql(null);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(8);
    });

    // Remove
    it('Remove. By Value. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.removeByValue(5);
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    it('Remove. By Value. Empty list.', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.removeByValue(5);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    it('Remove. By Value. 2 element list. Remove Last value', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(6);
        linkedList.removeByValue(6);
        linkedList.size.should.be.eql(1);
        should(linkedList.head).be.eql(linkedList.tail);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
    });

    it('Remove. By Value. 2 element list. Remove First value', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(6);
        linkedList.removeByValue(5);
        linkedList.size.should.be.eql(1);
        should(linkedList.head).be.eql(linkedList.tail);
        should(linkedList.tail.element).be.eql(6);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
    });

    it('Remove. By Value. Remove from the middle', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(6);
        linkedList.push(2);
        linkedList.push(89);
        linkedList.removeByValue(2);
        linkedList.size.should.be.eql(3);
        should(linkedList.getByPosition(3)).be.eql(89);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(linkedList.getByPosition(2));
    });

    it('Remove. By Position. 1 element list.', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.removeByPosition(1);
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    it('Remove. By Position. Empty list.', () => {
        const linkedList = new algo.LinkedList();
        try {
            linkedList.removeByPosition(5);
        } catch (e) {
            should(e).be.eql(new Error('Position Out Of Bound'));
        }
        linkedList.size.should.be.eql(0);
        should(linkedList.head).be.eql(null);
        should(linkedList.tail).be.eql(null);
    });

    // Remove
    it('Remove. By Position. 2 element list. Remove Last value', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(6);
        linkedList.removeByPosition(2);
        linkedList.size.should.be.eql(1);
        should(linkedList.head).be.eql(linkedList.tail);
        should(linkedList.tail.element).be.eql(5);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
    });

    it('Remove. By Position. 2 element list. Remove First value', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(6);
        linkedList.removeByPosition(1);
        linkedList.size.should.be.eql(1);
        should(linkedList.head).be.eql(linkedList.tail);
        should(linkedList.tail.element).be.eql(6);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode).be.eql(null);
    });

    it('Remove. By Position. Remove from the middle', () => {
        const linkedList = new algo.LinkedList();
        linkedList.push(5);
        linkedList.push(6);
        linkedList.push(2);
        linkedList.push(89);
        linkedList.removeByPosition(3);
        linkedList.size.should.be.eql(3);
        should(linkedList.getByPosition(3)).be.eql(89);
        should(linkedList.tail.nextNode).be.eql(null);
        should(linkedList.tail.prevNode.element).be.eql(linkedList.getByPosition(2));
    });
});
