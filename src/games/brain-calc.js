import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const taskForUser = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (randomCharacter, Number1, Number2) => {
  switch (randomCharacter) {
    case '+':
      return Number1 + Number2;
    case '-':
      return Number1 - Number2;
    case '*':
      return Number1 * Number2;
    default:
      throw new Error(`Unknown character: ${randomCharacter} !`);
  }
};

const getRound = () => {
  const Number1 = getRandomNumber();
  const Number2 = getRandomNumber();
  const randomCharacter = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${Number1} ${randomCharacter} ${Number2}`;
  const correctAnswer = String(calculate(randomCharacter, Number1, Number2));
  return [question, correctAnswer];
};

const runBrainCalc = () => runGame(taskForUser, getRound);

export default runBrainCalc;
