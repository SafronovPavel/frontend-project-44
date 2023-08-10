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
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGCD(number1, number2));
  return [question, correctAnswer];
};

const runBrainGCD = () => runGame(taskForUser, getRound);

export default runBrainGCD;
