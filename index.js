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

let winningNum = lottoNum.splice(0, 6);
winningNum.sort((a, b) => a - b);
winningNum = winningNum.join(", ");
console.log("당첨번호:", winningNum);
let bonusNum = lottoNum.join();
console.log("보너스번호:", bonusNum);

document.querySelector(".seletedNum").innerText = `당첨번호: ${winningNum}`;
document.querySelector(".bonusNum").innerText = `보너스번호: ${bonusNum}`;
