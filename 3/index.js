/* input */

const str = 'abcabcbb';

/* input */

/* solution */

const findMaxSubstrLengthWithoutRepeating = (str = '') => {
  let maxLength = 0;
  const lastAppearanceIndexes = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lastIndex = lastAppearanceIndexes.get(char);

    if (lastIndex) {
      maxLength = i - lastIndex > maxLength ? i - lastIndex : maxLength;
    }

    lastAppearanceIndexes.set(char, i);
  }

  return maxLength;
};

/* solution */

/* output */

console.log(findMaxSubstrLengthWithoutRepeating(str));

/* output */
