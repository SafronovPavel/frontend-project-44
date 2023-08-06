import game from '../index.js';
import getRandomInt from '../utils.js';

const taskForUser = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const circle = () => {
  const start = getRandomInt(0, 5);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(5, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandomInt(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => game(taskForUser, circle);

export default runBrainProgression;
