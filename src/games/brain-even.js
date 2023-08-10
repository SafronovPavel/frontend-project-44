import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => runGame(taskForUser, getRound);

export default runBrainEven;
