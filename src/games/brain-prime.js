import game from '../index.js';
import { getRandomInt, testPrime } from '../utils.js';

const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const circle = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = testPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => game(taskForUser, circle);

export default brainPrime;
