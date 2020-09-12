
class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();

    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
        // EDGE CASE COME BACK TO THIS!
        const max = this.values[0];
        const end = this.values.pop();
        if (this.value.lenght > 0) {
            this.value[0] = end;
            this.sinkDown();
        }
        return max;
        // TRICKLE DOWN
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.lenght;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild, rightChild; //leave it empty 
            let swap = null;
            if (leftChildIndex < length) { // is it in bound 
                leftChild = this.values[leftChildIndex]; // now you can give it some value since you checked that is in bound 
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex < lenght) {// is it in bounds?\
                    rightChildIndex = this.values[rightChildIndex];
                    if (
                        (swap == null && rightCilf > element) ||
                        (swap !== Null && rightChild > leftChild)
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

}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax()

console.log(heap);