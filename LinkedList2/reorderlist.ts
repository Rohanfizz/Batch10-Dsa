
function getMid(head:ListNode | null) : ListNode{
    let slow = head;
    let fast = head;
    while(fast.next!=null && fast.next.next!=null){
        slow= slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList(head:ListNode|null):ListNode{
    let prev = null;
    let curr = head;
    let next = head.next;

    while(curr!=null){
        curr.next = prev;

        prev = curr;
        curr = next;
        if(next != null) next= next.next;
    }
    return prev;
}

function reorderList(head: ListNode | null): void {
    if(head == null) return;
    if(head.next == null) return;

    let mid = getMid(head);
    let head2 = mid.next;
    mid.next = null;

    head2 = reverseList(head2);

    //We have to merge both head and head2
    let dummy = new ListNode(-1);
    let temp = dummy;
    let t1 = head;
    let t2 = head2;

    while(t1!=null && t2!=null){
        temp.next = t1;
        t1 = t1.next;
        temp = temp.next;

        temp.next = t2;
        t2 = t2.next;
        temp = temp.next;
    }

    if(t1 == null) temp.next= t2;
    else temp.next = t1;
    head = dummy.next;
};







