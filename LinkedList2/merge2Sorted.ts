
function mergeTwoLists(head1: ListNode | null, head2: ListNode | null): ListNode | null {
    let dummy = new ListNode(-1);
    let temp = dummy;
    let t1 = head1;
    let t2 = head2;

    while(t1 != null && t2 != null){
        if(t1.val < t2.val){
            temp.next = t1;
            t1 = t1.next;
        }else{
            temp.next = t2;
            t2 = t2.next;
        }
        temp = temp.next;
    }
    if(t2 == null) temp.next = t1;
    else temp.next = t2;

    return dummy.next;
};


