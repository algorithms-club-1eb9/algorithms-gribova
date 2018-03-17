require('should');
const algo = require('../../../index.js');

describe('DCP', () => {
    it('Should provide high load test', (done) => {
        const _items = 20000000;
        const dynamicConnectivity = new algo.DCP(_items);
        for (let i = 0; i <= 20000000; i += 1) {
            const a = algo.getUniqueItem(_items, null);
            const b = algo.getUniqueItem(_items, a);
            dynamicConnectivity.connect(a, b);
            // console.log(i, 'Connect', a, b, dynamicConnectivity.connect(a, b));
        }
        // const prevCount = dynamicConnectivity.count();
        // const prevComponentCount = dynamicConnectivity.countComponentsElements();
        // should(dynamicConnectivity.isConnected(1, 4)).be.eql(false);
        for (let i = 0; i <= 15; i += 1) {
            const a = algo.getUniqueItem(_items, null);
            const b = algo.getUniqueItem(_items, a);
            dynamicConnectivity.isConnected(a, b);
            // console.log(i, 'Check connection', a, b, dynamicConnectivity.isConnected(a, b));
        }
        done();
        // console.log('Number of components before', prevCount, 'Now', dynamicConnectivity.count());
        // console.log('Number in components before', prevComponentCount, 'Now', dynamicConnectivity.countComponentsElements());
    }).timeout(22000);

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
        componentsObject.countArray[3].should.be.eql(2);
        componentsObject.isConnected(2, 4).should.be.eql(true);
        componentsObject.countArray[3].should.be.eql(1);
        componentsObject.referenseArray.should.be.eql([1, 5, 5, 5, 5, 5]);
        componentsObject.countArray[1].should.be.eql(2);
        componentsObject.countArray[5].should.be.eql(6);
        componentsObject.isConnected(0, 4).should.be.eql(true);
        componentsObject.countArray[1].should.be.eql(1);
        componentsObject.countArray[5].should.be.eql(6);
        componentsObject.referenseArray.should.be.eql([5, 5, 5, 5, 5, 5]);
    });

    it('isConnected. Positive. Should return false. New component created.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.isConnected(0, 3).should.be.eql(false);
        should(componentsObject.component(3)).be.eql(undefined);
    });

    it('isConnected. Negative. Should return false. Components are not connected.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.connect(2, 3);
        componentsObject.isConnected(2, 1).should.be.eql(false);
        componentsObject.isConnected(0, 3).should.be.eql(false);
    });

    // Count.
    it('Count. Positive.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.connect(2, 3);
        componentsObject.count().should.be.eql(2);
        componentsObject.connect(1, 3);
        componentsObject.count().should.be.eql(1);
    });

    it('Count. Negative. No components', () => {
        const componentsObject = new algo.DCP();
        componentsObject.count().should.be.eql(0);
    });

    // Component.
    it('Component. Positive.', () => {
        const componentsObject = new algo.DCP();
        componentsObject.connect(0, 1);
        componentsObject.component(0).should.be.eql(1);
        componentsObject.connect(2, 3);
        componentsObject.connect(0, 2);
        componentsObject.component(0).should.be.eql(3);
    });

    it('Component. Negative. No such component', () => {
        const componentsObject = new algo.DCP();
        should(componentsObject.component(0)).be.eql(undefined);
    });
});
