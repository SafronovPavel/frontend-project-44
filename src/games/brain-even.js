import readlineSync from 'readline-sync';

// получение рандомного числа
const getRandomInt = () => Math.floor(Math.random() * 100);

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    const evenNumber = (number) => number % 2 === 0;
    const answerComputer = evenNumber(randomNumber) ? 'yes' : 'no';
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
export default brainEven;
