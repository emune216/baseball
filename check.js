const input = document.querySelector("input");
const check = document.querySelector(".check");
const checkCount = document.querySelector(".status");

var count = 0;

function inputTest() {
  // KEN: 현재 상황에서 toString은 불필요합니다. 왜 불필요한지 살펴보고 넘어가세요!
  const num = input.value;
  const numArr = num.split("");

  if (num.length > 3) {
    alert("숫자 3개를 입력해주세요💦");
  } else if (num.length < 3) {
    alert("숫자 3개를 입력해주세요💦");
    // KEN: 비교 연산자는 항상 세개를 사용하세요. 차이점은 조사해보셔야 합니다!
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert("서로 다른 숫자 3개를 입력해주세요💦");
  } else {
    chkCount();
    hiddenClass();
    compareNum(numArr);
  }
}

function chkCount() {
  ++count;
  checkCount.innerText = count + "회말 🏃‍♂️";
}

function compareNum(numArr) {
  const ballBox = [],
    strikeBox = [],
    outBox = [];
  for (var i = 0; i < 3; ++i) {
    if (numArr[i] == ranArr[i]) {
      strikeBox.push("strike");
    } else {
      // KEN: switch 구문은 필요하지 않을것 같고, `i`를 이용하면 간단하게 표현할 수 있을것 같네요!
      for (var e = 1; e < 3; ++e) {
        if (ranArr[e] === numArr[i]) {
          ballBox.push("ball");
        }
      }
    }
  }
  if (strikeBox.length + ballBox.length === 0) {
    outBox.push("out");
  }
  ballChk(ballBox);
  striekChk(strikeBox);
  outChk(outBox);
  endGame(strikeBox);
  // KEN: 불필요한 콘솔문은 사용 후 바로바로 삭제하세요!
}

function endGame(strikeBox) {
  const hit = strikeBox.length;
  if (hit === 3) {
    alert("WIN!");
    refresh();
  }
  // KEN: 중첩된 조건문을 조금 더 읽기 쉽게 개선할 수 있어보이네요!
  if (count === 10 && hit !== 3) {
    alert("DEFEAT..");
    refresh();
  }
}

function refresh() {
  // KEN: Reload하지 않고 초기화 하는 방법도 시도해보세요!
  location.reload();
}

function init() {
  check.addEventListener("click", inputTest);
}

init();

/*  숫자 하나만 입력해도 세자리로 바꿔주는 알고리즘
function inputTest() {
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

/*  랜덤함수 따로 빼기전에 처음 만든 알고리즘
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
