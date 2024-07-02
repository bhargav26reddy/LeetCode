/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let answerList = null;
    
    for(let i = 0; i < lists.length; i++){
        answerList = merge(answerList, lists[i]);
    }   
    
    return answerList;
    
};

let merge = function( list1,  list2) {
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;
  
    if (list1.val < list2.val) {
        list1.next = merge(list1.next, list2);
        return list1;
    } else {
        list2.next = merge(list1, list2.next);
        return list2;
    }
}