const input = document.querySelector("input"),
  check = document.querySelector(".check"),
  runRandom = getRandom();

function compareNum(ranNum) {
  const answer = input.value;
  console.log(answer);
  console.log(ranNum);
}

function getRandom() {
  const ranNum = Math.floor(Math.random() * 1000);
  compareNum(ranNum);
}

function init() {
  check.addEventListener("click", compareNum);
}

init();
