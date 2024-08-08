/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let isOdd = true;
    const even = new ListNode(-1);
    const odd = new ListNode(-1);
    let evenHead = even;
    let oddHead = odd;
    
    while (head) {
        if (isOdd) {
            oddHead.next = new ListNode(head.val);
            oddHead = oddHead.next;
        } else {
            evenHead.next = new ListNode(head.val);
            evenHead = evenHead.next;
        }
        isOdd = !isOdd;
        head = head.next;
    }
    oddHead.next = even.next;
    return odd.next;
};