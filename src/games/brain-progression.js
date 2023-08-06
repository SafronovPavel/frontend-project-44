import game from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const circle = () => {
  const start = getRandom();
  const step = getRandom();
  const length = getRandom(5, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandom(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => game(taskForUser, circle);

export default runBrainProgression;
