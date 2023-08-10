import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const taskForUser = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator} !`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(operator, number1, number2));
  return [question, correctAnswer];
};

const runBrainCalc = () => runGame(taskForUser, getRound);

export default runBrainCalc;
