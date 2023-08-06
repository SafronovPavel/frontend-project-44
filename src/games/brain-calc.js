import runGame from '../index.js';
import getRandom from '../utils.js';

const taskForUser = 'What is the result of the expression?';

const getQuestion = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const sum = randomNumber1 + randomNumber2;
  const subtraction = randomNumber1 - randomNumber2;
  const multiplication = randomNumber1 * randomNumber2;
  const operations = [sum, subtraction, multiplication];
  const operators = ['+', '-', '*'];
  const randomCharacter = getRandom(0, operators.length - 1);
  const question = `${randomNumber1} ${operators[randomCharacter]} ${randomNumber2}`;
  const correctAnswer = String(operations[randomCharacter]);
  return [question, correctAnswer];
};

const runBrainCalc = () => runGame(taskForUser, getQuestion);

export default runBrainCalc;
