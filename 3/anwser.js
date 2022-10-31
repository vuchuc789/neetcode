/* input */

const str = 'abcabcbb';

/* input */

/* solution */

const findMaxSubstrLengthWithoutRepeating = (str = '') => {
  if (!str.length) {
    return 0;
  }

  let maxLength = 0;
  let start = 0;
  let end = 0;
  const chars = new Set();

  for (; end < str.length; end++) {
    while (chars.has(str[end])) {
      chars.delete(str[start]);
      start++;
    }

    chars.add(str[end]);
    maxLength = Math.max(end - start + 1, maxLength);
  }

  return maxLength;
};

/* solution */

/* output */

console.log(findMaxSubstrLengthWithoutRepeating(str));

/* output */
