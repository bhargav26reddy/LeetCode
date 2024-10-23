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
var deleteDuplicates = function(head) {
    let lastNode = head;
    let currentNode = head?.next;

    if (!currentNode) return head;

    do {
        if (currentNode?.val === lastNode?.val) {
            lastNode.next = null;
            currentNode = currentNode?.next;
        } else {
            lastNode.next = currentNode;
            lastNode = currentNode;
            currentNode = currentNode?.next;
            lastNode.next = null;
        }
    } while (currentNode);

    return head;
};