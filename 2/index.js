class Node {
  constructor(value, childNode = null) {
    this.value = value;
    this.childNode = childNode;
  }
}

const numberToLinkedList = (num = 0) => {
  if (num === 0) {
    return new Node(0);
  }

  let linkedList = null;
  let lastNode = linkedList;
  let _num = num;

  while (_num > 0) {
    const digit = _num % 10;

    if (lastNode) {
      lastNode.childNode = new Node(digit);

      lastNode = lastNode.childNode;
    } else {
      lastNode = new Node(digit);
    }

    if (!linkedList) {
      linkedList = lastNode;
    }

    _num = Math.floor(_num / 10);
  }

  return linkedList;
};

const linkedListToNumber = (linkedList = new Node(0)) => {
  let number = linkedList.value;
  let _linkedList = linkedList;
  let x = 1;

  while (_linkedList.childNode !== null) {
    _linkedList = _linkedList.childNode;

    number += _linkedList.value * Math.pow(10, x);
    x++;
  }

  return number;
};

/* input */

const num1 = numberToLinkedList(342);
const num2 = numberToLinkedList(465);

/* input */

/* output */

console.log(
  numberToLinkedList(linkedListToNumber(num1) + linkedListToNumber(num2))
);

/* output */

module.export = { numberToLinkedList };
