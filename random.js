const ranArr = getRandom();

function getRandom() {
  const ranNum = [];
  for (var i = 0; i < 3; ++i) {
    const n = Math.floor(Math.random() * 10);
    if (ranNum.indexOf(n) == "-1") {
      ranNum.push(n);
    } else {
      i -= 1;
    }
  }
  return ranNum;
}
