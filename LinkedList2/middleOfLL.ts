
function middleNode(head: ListNode | null): ListNode | null{
    if(head == null) return null;
    let fast = head;
    let slow = head;
    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    //The above loop will only break if fast becomes null or tail
    return slow;//the place where slow will be standing will be the mid point.
};