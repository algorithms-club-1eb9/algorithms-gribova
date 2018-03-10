module.exports = class DFC {
    constructor() {
        this.referenseArray = [];
        this.depthArray = [];
    }

    connect(componentOne, componentTwo) {
        const firstRoot = this.findRoot(componentOne);
        const secondRoot = this.findRoot(componentTwo);

        if (this.referenseArray[firstRoot] === this.referenseArray[secondRoot]) {
            return 'Components are already connected';
        } else if (this.depthArray[firstRoot] > this.depthArray[secondRoot]) {
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
            if (this.referenseArray[i] === i && this.depthArray[i] !== 0) {
                rootsArr.push(this.referenseArray[i]);
            }
        }
        return rootsArr.length;
    }

    findRoot(component) {
        if (this.referenseArray[component] === undefined) {
            this.addNewComponent(component);
            return component;
        } else if (this.depthArray[component] === 0) return undefined;
        else if (this.referenseArray[component] === component) return component;
        else return this.findRoot(this.referenseArray[component]);
    }

    addNewComponent(component) {
        this.referenseArray[component] = component;
        this.depthArray[component] = 0;
    }

    addComponentToRoot(root, component) {
        this.referenseArray[component] = root;
        if (this.depthArray[component] === 0) this.depthArray[component] += 1;
        if (this.depthArray[root] <= this.depthArray[component]) {
            this.depthArray[root] = this.depthArray[component] + 1;
        }
    }

    decreaseRootDepth(component) {
        if (this.shouldDecreaseRootDepth(component)) {
            if (this.referenseArray[component] !== component) {
                this.decreaseRootDepth(this.referenseArray[component]);
            }
            this.depthArray[this.referenseArray[component]] -= 1;
        }
    }

    shouldDecreaseRootDepth(component) {
        if (component === this.findRoot(component)) return false;
        let shouldDecrease = true;
        for (let i = 0; i < this.referenseArray.length; i += 1) {
            if (this.referenseArray[i] === this.referenseArray[component] &&
                this.depthArray[i] >= this.depthArray[component] && i !== component &&
                i !== this.findRoot(component)) {
                shouldDecrease = false;
                break;
            }
        }
        return shouldDecrease;
    }

    pathCompression(component) {
        this.decreaseRootDepth(component);
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
