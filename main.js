var reel = ["cherry", "bar", "7", "JACKPOT", "orange", "lemon", "cash", "win", "grapes"]
var money = 500;
var triesToPlayWithNoMoney = 0;
// var borrowedFromTodd = 0;
// attempted to add more complex gameplay-- may do later

//gets a random symbol from each reel
function randomSymbol(reel) {
  reel1 = reel[Math.floor(Math.random() * reel.length)];
  reel2 = reel[Math.floor(Math.random() * reel.length)];
  reel3 = reel[Math.floor(Math.random() * reel.length)];
  console.log(reel1, reel2, reel3);
  updateReels(reel1, reel2, reel3);
}

//updates how much money you have on the screen
function updateMoney(money) {
	currentMoney.innerHTML = "You have $" + money;
    if (money < 10) {
      	currentMoney.innerHTML = "You don\'t have enough money to play.";
    }
}
//displays reel results on screen
function updateReels(reel1, reel2, reel3) {
	spinResults.innerHTML = (`Results: ${reel1}, ${reel2}, ${reel3}`);
}
//displays winnings
function updateWinnings(prize) {
	currentWinnings.innerHTML = (prize);
}

//checks results for win/loss status
function checkWin() {
  var win = 0;
  if (reel1 == "JACKPOT" && reel1 == reel2 && reel2 == reel3) {
    console.log("JACKPOT! win 1000");
    prize = "JACKPOT! You won $1000!";
    money += 990;
  } else if (reel1 == reel2 && reel2 == reel3) {
    console.log("win 100");
    prize = "You won $100!";
    money += 90;
  } else if (reel1 == reel3 && reel1 != reel2) {
    console.log("win 50");
    money += 40;
    prize = "You won $50!"
  } else {
    console.log("lose");
    money -= 10;
    prize = "You lost."
  }
  console.log(money);
updateWinnings(prize);
  updateMoney(money);
}

//play when button pressed
function play() {
  if (money >= 10) {
    randomSymbol(reel);
    checkWin();
  } else {
    console.log("You don't have enough money to play.");
        prize = "You don't have enough money to play.";
        updateWinnings(prize);
          updateMoney(money);
    // triesToPlayWithNoMoney += 1;
    //   if (triesToPlayWithNoMoney == 3) {
    //     enableAskTodd();
    //   }
      // if (borrowedFromTodd == 1); {
      //           toddStatus.innerHTML = "Todd is pissed that you lost all his money.";
      //         }
  }
}

// function enableAskTodd() {
//    document.getElementById("askTodd").style.visibility = 'visible';
// }
//
// function askToddForMoney() {
//   money += 500;
//     updateMoney(money);
//      document.getElementById("askTodd").style.visibility = 'collapse';
//      borrowedFromTodd = 1;
// }
//starting conditions
console.log(`You have $${money}.`);
document.getElementById("currentMoney").innerHTML = (`You have $${money}`);
document.getElementById("spinResults").innerHTML = "";
