import runGame from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (randomCharacter, randomNumber1, randomNumber2) => {
  switch (randomCharacter) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      return console.log(`Unknown character: ${randomCharacter}!`);
  }
};

const getRound = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const randomCharacter = operators[getRandom(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomCharacter} ${randomNumber2}`;
  const correctAnswer = String(calculate(randomCharacter, randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const runBrainCalc = () => runGame(taskForUser, getRound);

export default runBrainCalc;
