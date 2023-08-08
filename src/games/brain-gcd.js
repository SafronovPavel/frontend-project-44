import runGame from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 !== 0) {
    const remainder = number1 % number2;
    return findGcd(number2, remainder);
  }
  return number1;
};

const getRound = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findGcd(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const runBrainGcd = () => runGame(taskForUser, getRound);

export default runBrainGcd;
