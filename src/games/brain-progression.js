import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const taskForUser = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const length = getRandomNumber(5, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => runGame(taskForUser, getRound);

export default runBrainProgression;
