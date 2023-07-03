import readlineSync from 'readline-sync';

// получение рандомного числа
const getRandomInt = () => Math.floor(Math.random() * 100);
const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    
    const test_prime = (n) => {

      if (n===1)  {
        return false;
      }
      else if(n === 2)  {
        return true;
      } else   {
        for(var x = 2; x < n; x++)  {
          if(n % x === 0) {
            return false;
          }
        }
        return true;  
      }
    };
        
    const answerComputer = test_prime (randomNumber) ? 'yes' : 'no';
    
    
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
export default brainPrime;
