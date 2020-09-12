class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            //if is an empty queue
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }//add to the very end of our line - list
    dequeue() {
        if (!this.first) return null;
        var current = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return current.value;
    }// return and remove the first thing added in
}