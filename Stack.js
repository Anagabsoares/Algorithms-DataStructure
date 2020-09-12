class Node {
    constructor(value) {
        this.value = value; //holds the data of a node 
        this.next = null; //holfs the pointer to the next nmode, which is initialized to the null value
    }
} // a way of storing data

class Stack {
    constructor() {
        this.first = null; //same idea of head
        this.last = null;//tail
        this.size = 0;// length
    }
    push(value) {//we should be adding and removing from the beginning of the list
        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this.size
    }
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value
    }

}

var stack = new Stack();
stack.push(2);
stack.push(5);
stack.push(6);