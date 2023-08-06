import game from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'Find the greatest common divisor of given numbers.';

const findNod = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return findNod(m, k);
  }
  return n;
};

const circle = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findNod(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const runBrainGcd = () => game(taskForUser, circle);

export default runBrainGcd;
