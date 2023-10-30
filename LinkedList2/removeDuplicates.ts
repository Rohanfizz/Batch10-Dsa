
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head == null) return null;
    let curr = head;

    while(curr != null){
        let temp = curr.next;

        while(temp != null && curr.val == temp.val){
            temp = temp.next;
        }
        curr.next = temp;
        curr = curr.next;
    }
    return head;
};
