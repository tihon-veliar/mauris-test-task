function dataParser(dataArr) {
  return dataArr
    .map((curr, i) => {
      if (i > 0) {
        if (curr < 10) {
          return "0" + curr;
        }
      }
      return curr;
    })
    .join("-");
}
function plussOneDay(date) {
  const hi = date[0] % 4 == 0 ? true : false;
  const mon = date[1];
  const year = date[0];
  const day = date[2];
  if (mon == 12 && day == 31) {
    return [year + 1, 1, 1];
  }
  if (
    (mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10) &&
    day == 31
  ) {
    return [year, mon + 1, 1];
  }
  if (mon == 2) {
    if (day == 29 && hi) {
      return [year, mon + 1, 1];
    }
    if (day == 28) {
      return [year, mon + 1, 1];
    }
  }
  if (day == 30) {
    return [year, mon + 1, 1];
  }

  return [year, mon, day + 1];
}
export { dataParser, plussOneDay };
