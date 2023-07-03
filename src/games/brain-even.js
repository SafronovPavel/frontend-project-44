import game from '../index.js';
import { getRandomInt, evenNumber } from '../utils.js';

const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';

const circle = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = evenNumber(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => game(taskForUser, circle);

export default brainEven;
