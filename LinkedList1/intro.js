var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.display = function () {
            // TC:O(N)
            var temp = this.head;
            var s = "";
            while (temp != null) {
                s += temp.val + " -> ";
                temp = temp.next;
            }
            s += "null";
            console.log(s);
        };
        this.getSize = function () {
            // TC:O(1)
            return this.size;
        };
        this.addLast = function (val) {
            // TC:O(1)
            var nn = new ListNode(val);
            if (this.tail == null) {
                //linkedlist is empty
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.addFirst = function (val) {
            var nn = new ListNode(val);
            if (this.head == null) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.removeFirst = function () {
            //TC O(1)
            if (this.size == 0) {
                //already empty
                console.log("Linkedlist is already empty!");
                return -1;
            }
            var returnValue = this.head.val;
            if (this.head.next == null) {
                //only one node
                this.head = null;
                this.tail = null;
            }
            else {
                // >1 nodes
                this.head = this.head.next;
            }
            this.size--;
            return returnValue;
        };
        this.removeLast = function () {
            //TC O(N)
            if (this.size == 0) {
                //already empty
                console.log("Linkedlist is already empty!");
                return -1;
            }
            var returnValue = this.tail.val;
            if (this.head.next == null) {
                this.head = null;
                this.tail = null;
            }
            else {
                var temp = this.head;
                while (temp.next != this.tail) {
                    temp = temp.next;
                }
                this.tail = temp;
                temp.next = null;
            }
            this.size--;
            return returnValue;
        };
        this.getAt = function (idx) {
            if (idx < 0 || idx >= this.size) {
                console.log("Invalid Index");
                return null;
            }
            var temp = this.head;
            var currIdx = 0;
            while (currIdx != idx) {
                currIdx++;
                temp = temp.next;
            }
            return temp;
        };
        this.addAt = function (idx, value) {
            if (idx < 0 || idx > this.size) {
                console.log("Invalid Index");
                return;
            }
            else if (idx == 0) {
                this.addFirst(value);
                return;
            }
            else if (idx == this.size) {
                this.addLast(value);
                return;
            }
            else {
                var nn = new ListNode(value);
                var temp = this.getAt(idx - 1);
                nn.next = temp.next;
                temp.next = nn;
                this.size++;
            }
        };
        this.removeAt = function (idx) {
            if (idx < 0 || idx >= this.size) {
                console.log("Invalid Index");
                return -1;
            }
            else if (idx == 0) {
                return this.removeFirst();
            }
            else if (idx == this.size - 1) {
                return this.removeLast();
            }
            else {
                var temp = this.getAt(idx - 1);
                var returnValue = temp.next.val;
                temp.next = temp.next.next;
                this.size--;
                return returnValue;
            }
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.addFirst(10);
ll.display();
ll.addAt(2, 100);
ll.display();
ll.removeAt(0);
ll.display();
