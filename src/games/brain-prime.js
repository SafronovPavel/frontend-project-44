import game from '../index.js';
import getRandomInt from '../utils.js';

const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const testPrime = (n) => {
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

const circle = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = testPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => game(taskForUser, circle);

export default runBrainPrime;
