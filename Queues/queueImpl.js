var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.getSize = function () {
            return this.size;
        };
        this.removeFirst = function () {
            if (this.size == 0)
                return null;
            var retValue = this.head;
            if (this.size == 1) {
                this.head = this.tail = null;
            }
            else {
                this.head = this.head.next;
            }
            this.size--;
            retValue.next = null;
            return retValue;
        };
        this.addLast = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.head = this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.length = function () {
            return this.ll.getSize();
        };
        this.push = function (val) {
            this.ll.addLast(val);
        };
        this.pop = function () {
            var _a;
            var retVal = (_a = this.ll.removeFirst()) === null || _a === void 0 ? void 0 : _a.val;
            return retVal;
        };
        this.ll = new LinkedList();
    }
    return Queue;
}());
var q = new Queue();
q.push(10);
q.push(20);
q.push(30);
q.push(40);
console.log(q.pop()); // 10
console.log(q.pop()); //20
q.push(70);
console.log(q.pop()); // 30
console.log(q.pop()); // 40
console.log(q.pop()); // 70
