import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const taskForUser = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, Number1, Number2) => {
  switch (operator) {
    case '+':
      return Number1 + Number2;
    case '-':
      return Number1 - Number2;
    case '*':
      return Number1 * Number2;
    default:
      throw new Error(`Unknown character: ${operator} !`);
  }
};

const getRound = () => {
  const Number1 = getRandomNumber();
  const Number2 = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${Number1} ${operator} ${Number2}`;
  const correctAnswer = String(calculate(operator, Number1, Number2));
  return [question, correctAnswer];
};

const runBrainCalc = () => runGame(taskForUser, getRound);

export default runBrainCalc;
