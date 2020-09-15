const input = document.querySelector("input"),
  check = document.querySelector(".check"),
  runRandom = getRandom(); // 랜덤숫자가 페이지 새로고침 전까지 고정된다.

function inputCheck() {
  const value = input.value;
  if (value.length > 3) {
    alert("숫자 3개를 입력해주세요💦");
  } else if (value.length < 3) {
    alert("숫자 3개를 입력해주세요💦");
  } else {
    compareNum(value);
  }
}

function compareNum(num) {
  console.log(num);
  console.log(runRandom);
}

function getRandom() {
  const ranNum = Math.floor(Math.random() * 1000);
  return ranNum;
}

function init() {
  check.addEventListener("click", inputCheck);
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
