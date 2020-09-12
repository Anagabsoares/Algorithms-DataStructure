class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();

    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        // EDGE CASE COME BACK TO THIS!
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
        // TRICKLE DOWN
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild, rightChild; //leave it empty 
            let swap = null;
            if (leftChildIndex < length) { // is it in bound 
                leftChild = this.values[leftChildIndex]; // now you can give it some value since you checked that is in bound 
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {// is it in bounds?\
                rightChildIndex = this.values[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < element) ||
                    (swap !== null && rightChild.priority < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}


let ER = new PriorityQueue();
ER.enqueue("common cold", 1)
ER.enqueue("gunshot wound", 5)
ER.enqueue("high fever", 2)