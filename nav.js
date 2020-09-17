const rules = document.querySelector(".rules");

function showRules() {
  alert(`Rule!!
  숫자 야구게임으로 랜덤한 숫자 3개를 맞추는 게임.
  ---
  숫자 3개를 입력하고 check를 클릭하면 시작.
  B, S, O 갯수에 맞게 불이 들어옴.
  중복 숫자 없음.
  기회는 10번.
  Go!`);
}

function init() {
  rules.addEventListener("click", showRules);
}

init();
