import game from '../index.js';
import { getRandomInt, findNod } from '../utils.js';

const taskForUser = 'Find the greatest common divisor of given numbers.';

const circle = () => {
  const randomNumber1 = getRandomInt(1, 10);
  const randomNumber2 = getRandomInt(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findNod(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const brainGcd = () => game(taskForUser, circle);

export default brainGcd;
