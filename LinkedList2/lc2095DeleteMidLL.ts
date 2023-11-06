function getMid(head:ListNode | null){
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head == null) return null;//0
    if(head.next == null) return null;//1
    if(head.next.next == null){     //2
        head.next = null;
        return head;
    }

    let temp = getMid(head);

    while(true){
        temp.val = temp.next.val;
        if(temp.next.next!=null){
            temp =temp.next;
        }else{
            temp.next = null;
            break;
        }
    }
    return head;
};