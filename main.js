const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || getUserChoice === 'paper' || getUserChoice === 'scissors') {
    return userInput;
  } else {
    console.log('error in choice!');
  }
};

const getComputerChoice = () => {
  var num = Math.floor(Math.random() * 3);
  switch(num) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'it is a tie';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won!';
    } else {
      return 'You won!';
    }
  }else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer won!';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You won!';
    }
  }
}

const playGame = () => {
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
