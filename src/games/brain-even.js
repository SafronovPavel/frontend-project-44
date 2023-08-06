import game from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const circle = () => {
  const randomNumber = getRandom(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => game(taskForUser, circle);

export default runBrainEven;
