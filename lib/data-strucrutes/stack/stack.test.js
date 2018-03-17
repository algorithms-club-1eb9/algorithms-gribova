require('should');
const algo = require('../../../index.js');

describe('Stack', () => {
    // Push
    it('Push. Push element to the empty stack.', () => {
        const stackObject = new algo.Stack();
        stackObject.push(5);
        stackObject.size().should.be.eql(1);
        should(stackObject.getHead().element).be.eql(5);
        should(stackObject.getHead().nextNode).be.eql(null);
        should(stackObject.getHead().prevNode).be.eql(null);
        should(stackObject.getTail().element).be.eql(5);
        should(stackObject.getTail().nextNode).be.eql(null);
        should(stackObject.getTail().prevNode).be.eql(null);
    });

    it('Push. Push several elements to the stack.', () => {
        const stackObject = new algo.Stack();
        stackObject.push(5);
        stackObject.push(3);
        stackObject.push(4);
        stackObject.push(0);
        stackObject.push(1);
        stackObject.size().should.be.eql(5);
        should(stackObject.getHead().element).be.eql(5);
        should(stackObject.getHead().nextNode.element).be.eql(3);
        should(stackObject.getHead().prevNode).be.eql(null);
        should(stackObject.getTail().element).be.eql(1);
        should(stackObject.getTail().nextNode).be.eql(null);
        should(stackObject.getTail().prevNode.element).be.eql(0);
    });

    // Pop
    it('Pop. 1 element in the stack.', () => {
        const stackObject = new algo.Stack();
        stackObject.push(5);
        stackObject.pop();
        stackObject.size().should.be.eql(0);
        should(stackObject.getHead()).be.eql(null);
        should(stackObject.getTail()).be.eql(null);
    });

    it('Pop. Several elements in the stack.', () => {
        const stackObject = new algo.Stack();
        stackObject.push(5);
        stackObject.push(54);
        stackObject.push(2);
        stackObject.push(1);
        should(stackObject.getTail().element).be.eql(1);
        stackObject.pop();
        should(stackObject.getTail().element).be.eql(2);
        stackObject.pop();
        should(stackObject.getTail().element).be.eql(54);
    });
});
