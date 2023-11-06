class ListNode {
    val: number;
    next: ListNode | null;
    constructor(v: number) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;

    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    getSize = function (): number {
        return this.size;
    };

    removeFirst = function (): ListNode | null {
        if (this.size == 0) return null;
        let retValue = this.head;
        if (this.size == 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
        retValue.next = null;
        return retValue;
    };

    addLast = function (val: number): void {
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    };
}

class Queue {
    private ll: LinkedList | null;

    constructor() {
        this.ll = new LinkedList();
    }
    length = function (): number {
        return this.ll.getSize();
    };

    push = function (val: number) {
        this.ll.addLast(val);
    };

    pop = function (): number {
        let retVal = this.ll.removeFirst()?.val;
        return retVal;
    };
}
let q = new Queue();
q.push(10);
q.push(20);
q.push(30);
q.push(40);
console.log(q.pop());// 10
console.log(q.pop());//20
q.push(70);
console.log(q.pop());// 30
console.log(q.pop());// 40
console.log(q.pop());// 70
