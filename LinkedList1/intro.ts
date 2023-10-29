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
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    display = function (): void {
        // TC:O(N)
        let temp = this.head;
        let s = "";
        while (temp != null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        s += "null";
        console.log(s);
    };

    getSize = function (): number {
        // TC:O(1)
        return this.size;
    };

    addLast = function (val: number): void {
        // TC:O(1)
        let nn = new ListNode(val);
        if (this.tail == null) {
            //linkedlist is empty
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    };

    addFirst = function (val: number): void {
        let nn = new ListNode(val);
        if (this.head == null) {
            this.head = nn;
            this.tail = nn;
        } else {
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    };

    removeFirst = function (): number {
        //TC O(1)
        if (this.size == 0) {
            //already empty
            console.log("Linkedlist is already empty!");
            return -1;
        }
        let returnValue = this.head.val;
        if (this.head.next == null) {
            //only one node
            this.head = null;
            this.tail = null;
        } else {
            // >1 nodes
            this.head = this.head.next;
        }
        this.size--;
        return returnValue;
    };

    removeLast = function (): number {
        //TC O(N)
        if (this.size == 0) {
            //already empty
            console.log("Linkedlist is already empty!");
            return -1;
        }
        let returnValue = this.tail.val;
        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            while (temp.next != this.tail) {
                temp = temp.next;
            }
            this.tail = temp;
            temp.next = null;
        }
        this.size--;
        return returnValue;
    };

    getAt = function (idx: number): ListNode | null {
        if(idx < 0 || idx>=this.size){
            console.log("Invalid Index");
            return null;
        }

        let temp = this.head;
        let currIdx = 0;

        while(currIdx != idx){
            currIdx++;
            temp = temp.next;
        }

        return temp;
    };

    addAt = function(idx:number,value:number):void{
        if(idx < 0 || idx>this.size){
            console.log("Invalid Index");
            return;
        }else if(idx == 0){
            this.addFirst(value);
            return;
        }else if(idx == this.size){
            this.addLast(value);
            return;
        }else{
            let nn = new ListNode(value);
            let temp = this.getAt(idx-1);
            nn.next = temp.next;
            temp.next = nn;
            this.size++;
        }
    }

    removeAt = function(idx:number):number{
        if(idx < 0 || idx>=this.size){
            console.log("Invalid Index");
            return -1;
        }else if(idx == 0){
            return this.removeFirst();
        }else if(idx  == this.size-1){
            return this.removeLast();
        }else{
            let temp = this.getAt(idx-1);
            let returnValue = temp.next.val;
            temp.next = temp.next.next;
            this.size--;
            return returnValue;
        }
    }
}

let ll = new LinkedList();

ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.addFirst(10);

ll.display();
ll.addAt(2,100);
ll.display();
ll.removeAt(1);
ll.display();