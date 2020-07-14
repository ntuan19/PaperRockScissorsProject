const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if( userInput === 'rock'||userInput ==='paper' || userInput ==='scissors') { return userInput;}
    else { console.log("Error!");}
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
const determineWinner= (userChoice,computerChoice) => {
  if (userChoice === computerChoice){
    return " The game is a tie!";
  }
  if (userChoice==='rock'){
    if (computerChoice ==='paper'){
      return "You are a loser!";}
    else{return "Computer Won!";}
    }
  if (userChoice === 'paper'){
    if (computerChoice ==='scissors'){
      return "You are a loser!";}
    else{return "Computer Won!";}
    }
  if (userChoice ==='scissors'){
    if (computerChoice ==='rock'){
      return "You are a loser!";}
    else{return "Computer Won!";}
    }
}
const playgame =() => {
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();
  console.log(`you threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
  
};
playgame();
