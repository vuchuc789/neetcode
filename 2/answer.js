class Node {
  constructor(value, childNode = null) {
    this.value = value;
    this.childNode = childNode;
  }
}

/* input */

const num1 = new Node(2, new Node(4, new Node(3)));
const num2 = new Node(5, new Node(6, new Node(4)));

/* input */

/* solve */

const add = (num1 = null, num2 = null) => {
  let node1 = num1;
  let node2 = num2;
  let sum = null;
  let lastNode = sum;
  let carry = 0;

  while (node1 !== null || node2 !== null) {
    const digit1 = node1?.value ?? 0;
    const digit2 = node2?.value ?? 0;

    const _sum = digit1 + digit2 + carry;

    if (!lastNode) {
      lastNode = new Node(_sum % 10);
    } else {
      lastNode.childNode = new Node(_sum % 10);

      lastNode = lastNode.childNode;
    }

    carry = Math.floor(_sum / 10);

    node1 = node1?.childNode ?? null;
    node2 = node2?.childNode ?? null;

    if (!sum) {
      sum = lastNode;
    }
  }

  return sum;
};

/* solve */

/* output */

console.log(add(num1, num2));

/* output */
