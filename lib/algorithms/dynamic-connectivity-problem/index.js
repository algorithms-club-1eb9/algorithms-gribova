module.exports = class DFC {
    constructor() {
        this.referenseArray = [];
        this.countArray = [];
    }

    connect(componentOne, componentTwo) {
        this.checkComponetsAndAdd(componentOne);
        this.checkComponetsAndAdd(componentTwo);
        const firstRoot = this.findRoot(componentOne);
        const secondRoot = this.findRoot(componentTwo);

        if (this.referenseArray[firstRoot] === this.referenseArray[secondRoot]) {
            return 'Components are already connected';
        } else if (this.countArray[firstRoot] > this.countArray[secondRoot]) {
            this.addComponentToRoot(firstRoot, secondRoot);
            return 'Second component was connected with First';
        } else {
            this.addComponentToRoot(secondRoot, firstRoot);
            return 'First component was connected with Second';
        }
    }

    isConnected(componentOne, componentTwo) {
        this.pathCompression(componentOne);
        this.pathCompression(componentTwo);

        return this.referenseArray[componentOne] === this.referenseArray[componentTwo];
    }

    component(component) {
        return this.findRoot(component);
    }

    count() {
        const rootsArr = [];
        for (let i = 0; i < this.referenseArray.length; i += 1) {
            if (this.referenseArray[i] === i && this.countArray[i] !== 0) {
                rootsArr.push(this.referenseArray[i]);
            }
        }
        return rootsArr.length;
    }

    countComponentsElements() {
        const rootsArr = [];
        for (let i = 0; i < this.referenseArray.length; i += 1) {
            if (this.referenseArray[i] === i && this.countArray[i] !== 0) {
                rootsArr.push([this.referenseArray[i], this.countArray[i]]);
            }
        }
        return rootsArr;
    }

    findRoot(component) {
        if (this.countArray[component] === 0) return undefined;
        else if (this.referenseArray[component] === component) return component;
        else return this.findRoot(this.referenseArray[component]);
    }

    checkComponetsAndAdd(component) {
        if (this.referenseArray[component] === undefined) {
            this.referenseArray[component] = component;
            this.countArray[component] = 1;
        }
    }

    addComponentToRoot(root, component) {
        this.referenseArray[component] = root;
        if (this.countArray[component] === 0) this.countArray[component] += 1;
        this.countArray[root] = this.countArray[component] + this.countArray[root];
    }

    decreaseRootCount(component) {
        if (this.shouldDecreaseRootCount(component)) {
            if (this.referenseArray[component] !== component) {
                this.decreaseRootCount(this.referenseArray[component]);
            }
            this.countArray[this.referenseArray[component]] -= 1;
        }
    }

    shouldDecreaseRootCount(component) {
        if (this.referenseArray[component] === this.findRoot(component)) return false;
        let shouldDecrease = true;
        for (let i = 0; i < this.referenseArray.length; i += 1) {
            if (this.referenseArray[i] === this.referenseArray[component] &&
                this.countArray[i] >= this.countArray[component] && i !== component &&
                i !== this.findRoot(component)) {
                shouldDecrease = false;
                break;
            }
        }
        return shouldDecrease;
    }

    pathCompression(component) {
        this.decreaseRootCount(component);
        this.changeElementRoot(component);
    }

    changeElementRoot(component) {
        if (this.referenseArray[component] === this.findRoot(component) ||
            this.referenseArray[component] === component) {
            return 'Done';
        } else {
            this.referenseArray[component] = this.referenseArray[this.referenseArray[component]];
            return this.changeElementRoot(component);
        }
    }
};
