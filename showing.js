const dot = document.querySelectorAll(".dot");

const SHOWING_CN = "showing";

function hiddenClass() {
  for (var i = 0; i < dot.length; ++i) {
    dot[i].classList.add(SHOWING_CN);
  }
}

function ballChk(ball) {
  var ballNum = ball.length;
  for (var i = 0; i < ballNum; ++i) {
    dot[i].classList.remove(SHOWING_CN);
  }
}

function striekChk(strike) {
  var strikeNum = strike.length;
  for (var i = 3; i < strikeNum + 3; ++i) {
    dot[i].classList.remove(SHOWING_CN);
  }
}

function outChk(out) {
  var outNum = out.length;
  if (outNum == 1) {
    dot[6].classList.remove(SHOWING_CN);
  }
}
