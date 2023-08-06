import game from '../index.js';
import getRandomInt from '../utils.js';

const taskForUser = 'What is the result of the expression?';

const circle = () => {
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  const sum = randomNumber1 + randomNumber2;
  const subtraction = randomNumber1 - randomNumber2;
  const multiplication = randomNumber1 * randomNumber2;
  const operations = [sum, subtraction, multiplication];
  const operators = ['+', '-', '*'];
  const randomCharacter = Math.floor(Math.random() * operators.length);
  const question = `${randomNumber1} ${operators[randomCharacter]} ${randomNumber2}`;
  const correctAnswer = String(operations[randomCharacter]);
  return [question, correctAnswer];
};

const runBrainCalc = () => game(taskForUser, circle);

export default runBrainCalc;
