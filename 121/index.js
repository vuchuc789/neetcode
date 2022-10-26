/* input */

const stockValues = [7, 1, 5, 3, 6, 4];

/* input */

/* solve */

const findMaxProfit = (values = []) => {
  if (values.length < 2) {
    return 0;
  }

  return findMaxProfitRecursive(
    values,
    0,
    values.length - 1,
    values[0],
    values[values.length - 1]
  );
};

const findMaxProfitRecursive = (
  values = [],
  start = 0,
  end = 0,
  buyPrice = 0,
  sellPrice = 0
) => {
  const pro = sellPrice - buyPrice;

  if (end - start < 1) {
    return pro;
  }

  const pro1 = values[end - 1] - values[start];
  const pro2 = values[end] - values[start + 1];

  if (pro1 >= pro2) {
    if (pro1 > pro) {
      return findMaxProfitRecursive(
        values,
        start,
        end - 1,
        values[start],
        values[end - 1]
      );
    } else {
      return findMaxProfitRecursive(
        values,
        start,
        end - 1,
        buyPrice,
        sellPrice
      );
    }
  } else {
    if (pro2 > pro) {
      return findMaxProfitRecursive(
        values,
        start + 1,
        end,
        values[start + 1],
        values[end]
      );
    } else {
      return findMaxProfitRecursive(
        values,
        start + 1,
        end,
        buyPrice,
        sellPrice
      );
    }
  }
};

/* solve */

/* output */

console.log(findMaxProfit(stockValues));

/* output */
