"use strict";

const buttons = document.querySelectorAll(".btn");
const feedbackIcon = document.querySelector(".feedback-icon");
const feedbacktext = document.querySelector(".feedback-text");
const btnReload = document.querySelector(".btn-reload");
const feedbackGroup = document.querySelector(".feedback-group");

let winnerBtn;
const startGame = function () {
  setIdToEl();
  setWinnerBtn();
  buttons.forEach(function (el) {
    el.addEventListener("click", function () {
      el.id === winnerBtn.toString()
        ? changeFeedback("checkmark-outline", "Very good!")
        : changeFeedback("close-outline", "Try again 😕");
    });
  });
};

const setIdToEl = function () {
  for (const [index, el] of buttons.entries()) {
    el.setAttribute("id", index);
  }
};

const setWinnerBtn = function (number = 3) {
  winnerBtn = Math.floor(Math.random() * (number + 1));
};

const changeFeedback = function (inconName, text) {
  feedbackIcon.setAttribute("name", inconName);
  feedbackIcon.setAttribute("id", `icon-${inconName}`);
  feedbacktext.innerHTML = text;
  feedbackGroup.classList.add("feedback-group-active");
  setTimeout(
    () => feedbackGroup.classList.remove("feedback-group-active"),
    500
  );
};

startGame();

btnReload.addEventListener("click", function () {
  startGame();
  changeFeedback("alert-outline", "Choose a button");
});
