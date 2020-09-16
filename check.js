const input = document.querySelector("input"),
  check = document.querySelector(".check"),
  ranArr = getRandom();

function inputTest() {
  const value = input.value;
  if (value.length > 3) {
    alert("숫자 3개를 입력해주세요💦");
  } else if (value.length < 3) {
    alert("숫자 3개를 입력해주세요💦");
  } else {
    compareNum(value);
    // 여기에 숫자 입력시 카운트올라가는 함수 넣어서 실행하기
  }
}

function compareNum(num) {
  const num1 = num.toString()[0],
    num2 = num.toString()[1],
    num3 = num.toString()[2],
    numArr = [num1, num2, num3],
    ballBox = [],
    strikeBox = [],
    outBox = [];
  for (var i = 0; i < 3; ++i) {
    if (numArr[i] == ranArr[i]) {
      strikeBox.push("strike");
    } else {
      switch (i) {
        case 0:
          for (var e = 1; e < 3; ++e) {
            if (ranArr[e] == numArr[0]) {
              ballBox.push("ball");
            }
          }
          break;
        case 1:
          for (var e = 0; e < 3; ++e) {
            if (e !== 1) {
              if (ranArr[e] == numArr[1]) {
                ballBox.push("ball");
              }
            }
          }
          break;
        case 2:
          for (var e = 0; e < 2; ++e) {
            if (ranArr[e] == numArr[2]) {
              ballBox.push("ball");
            }
          }
      }
    }
  }
  if (strikeBox.length + ballBox.length == 0) {
    outBox.push("out");
  }
  console.log(numArr);
  console.log(ranArr);
  console.log(ballBox);
  console.log(strikeBox);
  console.log(outBox);
}

function getRandom() {
  const ranNum = [];
  for (var i = 0; i < 3; ++i) {
    const n = Math.floor(Math.random() * 9) + 1;
    if (ranNum.indexOf(n) == "-1") {
      ranNum.push(n);
    } else {
      i -= 1;
    }
  }
  return ranNum;
}

function init() {
  check.addEventListener("click", inputTest);
}

init();

/* 
function inputCheck() {
  const value = input.value;

  switch (true) {
    case value > 1000:
      alert("세 자리 숫자로 입력해주세요💦");
      return false;
    case value < 10:
      answer = "00" + value;
      break;
    case answer < 100:
      answer = "0" + value;
      break;
    default:
      answer = value;
  }
  compareNum(answer);

  function compareNum(num){
      console.log(num);
  }
  */

/*
  function compareNum(num) {
  const num1 = num.toString()[0],
    num2 = num.toString()[1],
    num3 = num.toString()[2],
    ranNum1 = ranNum.toString()[0],
    ranNum2 = ranNum.toString()[1],
    ranNum3 = ranNum.toString()[2],
    numArr = [num1, num2, num3],
    ranArr = [ranNum1, ranNum2, ranNum3],
    ballBox = [],
    strikeBox = [];
  for (var i = 0; i < 3; ++i) {
    if (numArr[i] == ranArr[i]) {
      strikeBox.push("strike");
    } else {
      switch (i) {
        case 0:
          for (var i = 1; i < 3; ++i) {
            if (numArr[0] !== ranArr[i]) {
              continue;
            }
            ballBox.push("ball");
          }
        case 1:
          for (var i = 0; i > 3; ++i) {
            if (i % 2 === 0) {
              if (numArr[1] === ranArr[i]) {
                ballBox.push("ball");
              }
            }
          }
        case 2:
          for (var i = 0; i < 2; ++i) {
            if (numArr[2] === ranArr[i]) {
              ballBox.push("ball");
            }
          }
      }
    }
  }
  */
