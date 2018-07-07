var reel = ["cherry", "bar", "7", "JACKPOT", "orange", "lemon", "cash", "win", "grapes"]
var money = 500;

function randomSymbol(reel) {
  reel1 = reel[Math.floor(Math.random() * reel.length)];
  reel2 = reel[Math.floor(Math.random() * reel.length)];
  reel3 = reel[Math.floor(Math.random() * reel.length)];
  console.log(reel1, reel2, reel3);
}

function checkWin() {
  var win = 0;
  if (reel1 == "JACKPOT" && reel1 == reel2 && reel2 == reel3) {
    console.log("JACKPOT! win 1000");
    money += 990;
    alert(`Results: ${reel1}, ${reel2}, ${reel3}. \n
      JACKPOT! You won $1000! \n
      You have $${money}.`)
  } else if (reel1 == reel2 && reel2 == reel3) {
    console.log("win 100");
    money += 90;
    alert(`Results: ${reel1}, ${reel2}, ${reel3}. \n
      You won $100! \n
      You have $${money}.`)
  } else if (reel1 == reel3 && reel1 != reel2) {
    console.log("win 50");
    money += 40;
    alert(`Results: ${reel1}, ${reel2}, ${reel3}. \n
      You won $50! \n
      You have $${money}.`)
  } else {
    console.log("lose");
    money -= 10;
    alert(`Results: ${reel1}, ${reel2}, ${reel3}. \n
      You lost. \n
      You have $${money}.`)
  }
  console.log(money);
}

function play() {
  if (money >= 10) {
    randomSymbol(reel);
    checkWin();
  } else {
    console.log("You don't have enough money to play.");
        alert("You don't have enough money to play.");
  }
}
console.log(`You have $${money}.`);
alert(`You have $${money}.`);
