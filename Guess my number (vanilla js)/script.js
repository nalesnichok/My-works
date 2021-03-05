'use strict';

let message = document.querySelector('.message');
let number = document.querySelector('.number');
let secretNumber = (number.value = Math.trunc(Math.random() * 20 + 1));
let score = 20;
let highscore = 0;
let input = document.querySelector('.guess');

// assigning enter key to "check" button

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    //event.preventDefault();
    document.querySelector('.check').click();
  }
});

// Lets start
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no number passed
  if (!guess) {
    message.textContent = '🚫 No number!';
  }

  //if number if different
  else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '🔺 To high!' : '🔻 To low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '👎 You have lost the game';
      number.textContent = '😿';
      document.querySelector('.score').textContent = score - 1;
      document.querySelector('.left').style.display = 'none';
      document.body.style.background = 'rgb(199, 27, 27)';
    }
  }

  //if number is corect
  else if (guess === secretNumber) {
    message.textContent = '👏 Congratulations! The number is correct!';
    document.body.style.background = 'rgb(63, 197, 30)';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    document.querySelector('.left').style.display = 'none';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

// restarting the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.left').style.display = '';
  message.textContent = 'Start guessing...';
  document.body.style.background = '#222';
  number.value = Math.trunc(Math.random() * 20 + 1);
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  number.style.width = '15rem';
});
