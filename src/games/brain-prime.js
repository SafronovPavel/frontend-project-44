import runGame from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isTestPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestion = () => {
  const randomNumber = getRandom(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isTestPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => runGame(taskForUser, getQuestion);

export default runBrainPrime;
