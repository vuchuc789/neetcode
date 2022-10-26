/* input */

const stockValues = [7, 1, 5, 3, 6, 4];

/* input */

/* solve */

const findMaxProfit = (values = []) => {
  if (values.length < 2) {
    return 0;
  }

  let buyDay = 0,
    sellDay = 1,
    maxProfit = 0;

  while (sellDay < values.length) {
    if (values[buyDay] < values[sellDay]) {
      const profit = values[sellDay] - values[buyDay];

      maxProfit = profit > maxProfit ? profit : maxProfit;
    } else {
      buyDay++;
    }

    sellDay++;
  }

  return maxProfit;
};

/* solve */

/* output */

console.log(findMaxProfit(stockValues));

/* output */
