function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while(fast != null  && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) return true;//Cycle has been found
    }
    return false;//No cycle present
};