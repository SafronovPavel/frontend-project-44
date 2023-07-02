import readlineSync from 'readline-sync';

// получение рандомного числа
const getRandomInt = () => Math.floor(Math.random() * 10);
const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const summNumbers = randomNumber1 + randomNumber2;
    const subtraction = randomNumber1 - randomNumber2;
    const multiplication = randomNumber1 * randomNumber2;
    const operations = [summNumbers, subtraction, multiplication];
    const sings = ['+', '-', '*'];
    const randomCharacter = Math.floor(Math.random() * sings.length);
    console.log(`Question: ${randomNumber1} ${sings[randomCharacter]} ${randomNumber2}`);
    const answerComputer = String(operations[randomCharacter]);
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
export default brainCalc;
