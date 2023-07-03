import game from '../index.js';
import { getRandomInt, getProgression } from '../utils.js';

const taskForUser = 'What number is missing in the progression?';

const circle = () => {
  const start = getRandomInt(0, 5);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(5, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandomInt(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = `${progression}`;
  return [question, correctAnswer];
};

const brainProgression = () => game(taskForUser, circle);

export default brainProgression;
