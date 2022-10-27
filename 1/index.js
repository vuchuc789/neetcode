/* input */

const nums = [2, 7, 11, 15];
const target = 9;

/* input */

/* solve */

const findNums = (nums = [], target = 0) => {
  const map = new Map();
  let foundIndex = [-1, -1];

  nums.some((num, i) => {
    if (num > target) {
      return false;
    }

    const pairedIndex = map.get(target - num);

    if (pairedIndex !== undefined) {
      foundIndex = [pairedIndex, i];

      return true;
    }

    map.set(num, i);

    return false;
  });

  return foundIndex;
};

/* solve */

/* output */

console.log(findNums(nums, target));

/* output */
