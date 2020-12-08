const $winningNum = document.querySelector("#js-winningNum");
const $bonusNum = document.querySelector("#js-bonusNum");
const $createNumBtn = document.querySelector("#js-createNumBtn");

let winningArr = [];
let bonusArr = [];

//
makingLottoNum = () => {
  const array = new Array(45);
  const result = array.fill().map((item, index) => {
    return index + 1;
  });
  const lottoNum = [];
  for (let i = 0; i < 7; i += 1) {
    const num = result[Math.floor(Math.random() * result.length)];
    if (lottoNum.includes(num)) {
      i -= 1;
    } else {
      lottoNum.push(num);
    }
  }
  winningArr = lottoNum.splice(0, 6);
  winningArr.sort((a, b) => a - b);
  const winningNum = winningArr.join(", ");
  bonusArr = lottoNum;
  const bonusNum = bonusArr.join();
};
//

coloringBall = (num) => {
  if (num <= 10) {
    return " rgb(218, 218, 0)";
  } else if (num <= 20) {
    return "blue";
  } else if (num <= 30) {
    return "red";
  } else if (num <= 40) {
    return "black";
  } else {
    return "green";
  }
};

printWinningNum = () => {
  const div = document.createElement("div");
  div.innerText = "당청번호";
  const ball = document.createElement("div");
  ball.classList.add("winningBall");
  $winningNum.appendChild(div);
  $winningNum.appendChild(ball);
  for (let i = 0; i < winningArr.length; i += 1) {
    const num = document.createElement("div");
    num.classList.add("ball");
    num.classList.add(`num${i + 1}`);
    num.innerText = winningArr[i];
    num.style.backgroundColor = coloringBall(winningArr[i]);
    ball.appendChild(num);
  }
};

printBonusNum = () => {
  const div = document.createElement("div");
  div.innerText = "보너스번호";
  const num = document.createElement("div");
  num.classList.add("ball");
  num.innerText = bonusArr[0];
  num.style.backgroundColor = coloringBall(bonusArr[0]);
  $bonusNum.appendChild(div);
  $bonusNum.appendChild(num);
};

reset = () => {
  $winningNum.innerHTML = "";
  $bonusNum.innerHTML = "";
};

handleClickCreateNumBtn = () => {
  reset();
  makingLottoNum();
  printWinningNum();
  printBonusNum();
};

function init() {
  $createNumBtn.addEventListener("click", handleClickCreateNumBtn);
}
init();
