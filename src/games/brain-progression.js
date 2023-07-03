import readlineSync from 'readline-sync';

// получение рандомного числа
const getRandomInt = (minIntValue, maxIntValue) => {
  return Math.floor(Math.random() * (maxIntValue - minIntValue)) + minIntValue;
};

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const start = getRandomInt(0, 5);
    const step = getRandomInt(1, 5);
    const length = getRandomInt(6, 15);
    const progression = getProgression(start, step, length);
    const hiddenNumber = getRandomInt(0, progression.length - 1);
    const answerComputer = String(progression[hiddenNumber]);
    progression[hiddenNumber] = '..';
    console.log(`Question: ${progression}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerComputer === answerUser && i === 2) {
      console.log(`Correct!\nCongratulations, ${nameUser}!`);
    } else if (answerComputer === answerUser && i < 2) {
      console.log('Correct!');
    } else if (answerComputer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerComputer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
  }
};
export default brainProgression;
