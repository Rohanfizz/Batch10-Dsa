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
    private size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst = function (val: number): void {
        let nn = new ListNode(val);
        if (this.head == null) {
            this.head = nn;
        } else {
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    };

    removeFirst = function (): number {
        if (this.head == null) {
            console.log("Linkedlist is empty!");
            return -1;
        }
        let retVal = this.head.val;
        this.head = this.head.next;
        this.size--;
        return retVal;
    };

    getFirst = function (): number {
        if (this.head == null) return -1;
        return this.head.val;
    };

    getSize = function () {
        return this.size;
    };
}

class Stack {
    ll: LinkedList;

    constructor() {
        this.ll = new LinkedList();
    }

    push = function (val: number) {
        this.ll.addFirst(val);
    };

    pop = function (): number {
        return this.ll.removeFirst();
    };

    peek = function (): number {
        return this.ll.getFirst();
    };

    size = function (): number {
        return this.ll.getSize();
    };
}

let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);

console.log(st.pop());//40
console.log(st.peek());//30
st.pop();
console.log(st.size());//2
console.log(st.pop());//20
console.log(st.pop());//10

