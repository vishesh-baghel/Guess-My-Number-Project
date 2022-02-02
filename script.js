"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".secretNumber").textContent = 13;

// document.querySelector(".score").textContent = 100;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "🚫No Number!";
    displayMessage("🚫No Number!");

    // When player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent =
    //   "🎉 Correct Number! Click again to Restart";
    displayMessage("🎉 Correct Number! Click again to Restart");
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    if (score >= highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // When the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? " 📈Too High! Try again"
          : " 📈Too Low! Try again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   " You Lost the game BITCH!🤣🤣 Now click that again Button.";
      displayMessage(
        " You Lost the game BITCH!🤣🤣 Now click that again Button."
      );

      document.querySelector("body").style.backgroundColor = "#f84545";

      document.querySelector(".number").style.width = "30rem";
    }
  }
  // MADE THE CODE MORE READABLE AND MAINTAINABLE BY FOLLOWING THE DRY CODE PRINCIPLE
  // }else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = " 📈Too High! Try again";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       " You Lost the game BITCH!🤣🤣 Now click that again Button.";

  //     document.querySelector("body").style.backgroundColor = "#f84545";

  //     document.querySelector(".number").style.width = "30rem";
  //   }

  //   // When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent =
  //       " 📉Too Low! You have a really bad luck";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       " You Lost the game BITCH!🤣🤣 Now click that again Button.";

  //     document.querySelector("body").style.backgroundColor = "#f84545";

  //     document.querySelector(".number").style.width = "30rem";
  //   }
  // }
});

document.querySelector(".btn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
