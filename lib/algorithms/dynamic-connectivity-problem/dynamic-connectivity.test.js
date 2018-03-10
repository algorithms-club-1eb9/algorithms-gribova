require('should');
const algo = require('../../../index.js');


describe('DCP', () => {
    // Connect.
    it('Connect. Positive. Should connect components. 1 to 1.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(2, 1);
        componentsObject.referenseArray.should.be.eql([, 1, 1]);
    });

    it('Connect. Positive. Should connect components. Connect components to the head.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(2, 1);
        componentsObject.connect(2, 3);
        componentsObject.referenseArray.should.be.eql([, 1, 1, 1]);
    });

    it('Connect. Positive. Should connect components. Connect components with more than 1 element in it. Root link changed.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.connect(2, 3);
        componentsObject.referenseArray.should.be.eql([1, 1, 3, 3]);
        componentsObject.connect(0, 2);
        componentsObject.referenseArray.should.be.eql([1, 3, 3, 3]);
    });

    // isConnected.
    it('isConnected. Positive. Should return true. 1 to 1.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(2, 1);
        componentsObject.isConnected(1, 2).should.be.eql(true);
    });

    it('isConnected. Positive. Should return true. More than 2 components', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(2, 1);
        componentsObject.connect(2, 3);
        componentsObject.isConnected(1, 3).should.be.eql(true);
        componentsObject.isConnected(2, 1).should.be.eql(true);
    });

    it('isConnected. Positive. Should return true. Components with more than 1 element in it.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.connect(2, 3);
        componentsObject.connect(0, 2);
        componentsObject.isConnected(1, 3).should.be.eql(true);
        componentsObject.isConnected(0, 3).should.be.eql(true);
    });

    it('isConnected. Positive. Should return true. Change depth of components', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.connect(2, 3);
        componentsObject.connect(4, 5);
        componentsObject.connect(2, 5);
        componentsObject.connect(4, 0);
        componentsObject.referenseArray.should.be.eql([1, 5, 3, 5, 5, 5]);
        componentsObject.depthArray[3].should.be.eql(2);
        componentsObject.isConnected(2, 4).should.be.eql(true);
        componentsObject.depthArray[3].should.be.eql(1);
        componentsObject.referenseArray.should.be.eql([1, 5, 5, 5, 5, 5]);
        componentsObject.depthArray[1].should.be.eql(2);
        componentsObject.depthArray[5].should.be.eql(3);
        componentsObject.isConnected(0, 4).should.be.eql(true);
        componentsObject.depthArray[1].should.be.eql(1);
        componentsObject.depthArray[5].should.be.eql(2);
        componentsObject.referenseArray.should.be.eql([5, 5, 5, 5, 5, 5]);
    });

    it('isConnected. Negative. Should return false. Components are not connected.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.connect(2, 3);
        componentsObject.isConnected(2, 1).should.be.eql(false);
        componentsObject.isConnected(0, 3).should.be.eql(false);
    });

    it('isConnected. Negative. Should return false. Component that does not exist.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.isConnected(0, 3).should.be.eql(false);
        should(componentsObject.component(3)).be.eql(undefined);
    });
});
