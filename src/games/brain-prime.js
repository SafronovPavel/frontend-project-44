import runGame from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isTestPrime = (n) => {
  if (n === 1) {
    return false;
  } if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};

const getQuestion = () => {
  const randomNumber = getRandom(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isTestPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => runGame(taskForUser, getQuestion);

export default runBrainPrime;
