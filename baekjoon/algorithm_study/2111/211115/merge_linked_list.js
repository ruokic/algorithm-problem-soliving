class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Answer {
  merge = (list1, list2) => { // const는 왜 붙였니
    const new_list = new Node(0);
    let new_list_ptr = new_list; // const가 아니라 let이란다

    let value1 = list1;
    let value2 = list2;

    while (value1.next || value2.next){
      if (value1.val < value2.val) {
        new_list_ptr.next = value1;
        value1 = value1.next;
      } else {
        new_list_ptr.next = value2;
        value2 = value2.next;
      }
      new_list_ptr = new_list_ptr.next;
    }
    while (value1.next) {
      new_list_ptr.next = value1;
      value1 = value1.next
    }
    while (value2.next) {
      new_list_ptr.next = value2;
      value2 = value2.next
    }
    return new_list
  }
}
let list1 = new Node(0);
let list2 = new Node(1);

let l1ptr = list1;
let l2ptr = list2;
for (let i = 0; i < 5; i++) {
  let tmp1 = new Node(2 * i + 2);
  let tmp2 = new Node(2 * i + 3);

  l1ptr.next = tmp1;
  l1ptr = l1ptr.next;

  l2ptr.next = tmp2;
  l2ptr = l2ptr.next;
}
const answer = new Answer();

let merged_list = answer.merge(list1, list2);

while (merged_list.next){
  console.log(merged_list.val);
  merged_list = merged_list.next;
}