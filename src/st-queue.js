const { ListNode } = require('../extensions/index.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
    head = null;
    tail = null; 

    getUnderlyingList() {
        return this.head;
    }

    enqueue(value) {
        const newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    dequeue() { 
        if (!this.head) {
            return null;
        } 
        
        const oldHead =  this.head;

        this.head = this.head.next;

        return oldHead.value;
    }
}
