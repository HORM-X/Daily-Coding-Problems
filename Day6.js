/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/

var mergeTwoLists = function (list1, list2) {
  // Dummy and head set.
  let dummy = new ListNode(0);
  let tail = dummy;

  //While both list are not null....
  while (list1 && list2) {
    // If the value of L1 is lesser than L2
    if (list1.val <= list2.val) {
      //L1 Value is stored on tail
      tail.next = list1;
      //L1 is incremented
      list1 = list1.next;
    } else {
      //L2 is inserted on tail
      tail.next = list2;
      //L2 is incremented
      list2 = list2.next;
    }
    // Tail is incremented regardless of both cases
    tail = tail.next;
  }

  // If there is a case in which one of the list is empty
  // We find the non-empty list we awe added it to the end of the result.
  if (list1 !== null) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  // Return the list
  return dummy.next;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
