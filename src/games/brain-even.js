import game from '../index.js';
import getRandomInt from '../utils.js';

const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (number) => number % 2 === 0;

const circle = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = evenNumber(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => game(taskForUser, circle);

export default runBrainEven;
