import readlineSync from 'readline-sync';

// получение рандомного числа
const getRandomInt = () => Math.floor(Math.random() * 10);
const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    
    const nod = (n, m) => {
      if (m !== 0) {
        const k = n % m;
        return nod(m, k);
      }
      return n;
    };
  
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answerComputer = String(nod(randomNumber1, randomNumber2));
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
export default brainGcd;
