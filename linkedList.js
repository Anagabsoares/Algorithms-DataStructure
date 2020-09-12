//piece of data
//reference to nexxt node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop() {
        if (!this.head) return undefined;
        /*if there are no nodes in the list, return   undefined*/
        /*loop through the list until you reach the tail*/
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }

    unshift(val) {
        var newValue = new Node(val);
        if (!this.head) {
            this.head = newValue;
            this.tail = this.head;
        } else {
            newValue.next = this.head
            this.head = newValue;
        }

        this.length++;
        return this; // returning the whole 

    }
    get(idx) {
        if (idx < 0 || idx >= this.lenght) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode = val; //update the value
            return true
        }
        return false;

    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            return this.push(value);
            return true;
        }
        if (index === 0) return this.unshift(value);
        var newNode = new Node(value);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.lenght++;
        return true //this  means it worked 

    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) this.pop(index);
        if (index === 0) this.shift(index);

        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next
        this.length--;
        return removed
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null; //we need to make sure tha the end of our list, the tail is NULL, we dont want yndefined but null
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }
    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }// it consoles .log all the values in our linked list in order in an array

}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4)

