class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

function cycleLength(head) {
  let fast = head.next.next;
  let slow = head.next;
  let distance = 1;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
    distance++;
  }
  return distance;
}

// above is the cycle detection function, lets create below a cycle length fucntion
// describe a cycle lenth using has cycle 


module.exports = {
  hasCycle,
  Node
};
