import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const taskForUser = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  if (number2 !== 0) {
    const remainder = number1 % number2;
    return findGCD(number2, remainder);
  }
  return number1;
};

const getRound = () => {
  const Number1 = getRandomNumber();
  const Number2 = getRandomNumber();
  const question = `${Number1} ${Number2}`;
  const correctAnswer = String(findGCD(Number1, Number2));
  return [question, correctAnswer];
};

const runBrainGcd = () => runGame(taskForUser, getRound);

export default runBrainGcd;
