require('should');
const algo = require('../../../index.js');

describe('Queue', () => {
    // Push
    it('Push. Push element to the empty queue.', () => {
        const Queue = new algo.Queue();
        Queue.push(5);
        Queue.size().should.be.eql(1);
        should(Queue.getHead().element).be.eql(5);
        should(Queue.getTail().element).be.eql(5);
    });

    it('Push. Push several elements to the queue.', () => {
        const Queue = new algo.Queue();
        Queue.push(5);
        Queue.push(3);
        Queue.push(4);
        Queue.push(0);
        Queue.push(1);
        Queue.size().should.be.eql(5);
        should(Queue.getHead().element).be.eql(5);
        should(Queue.getHead().nextNode.element).be.eql(3);
        should(Queue.getHead().prevNode).be.eql(null);
        should(Queue.getTail().element).be.eql(1);
        should(Queue.getTail().nextNode).be.eql(null);
        should(Queue.getTail().prevNode.element).be.eql(0);
    });

    // Shift
    it('Shift. 1 element in the queue.', () => {
        const Queue = new algo.Queue();
        Queue.push(5);
        Queue.shift();
        Queue.size().should.be.eql(0);
        should(Queue.getHead()).be.eql(null);
        should(Queue.getTail()).be.eql(null);
    });

    it('Shift. Several elements in the queue.', () => {
        const Queue = new algo.Queue();
        Queue.push(5);
        Queue.push(54);
        Queue.push(2);
        Queue.push(1);
        should(Queue.getHead().element).be.eql(5);
        Queue.shift();
        should(Queue.getHead().element).be.eql(54);
        Queue.shift();
        should(Queue.getHead().element).be.eql(2);
    });
});
