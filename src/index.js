import readlineSync from 'readline-sync';

const game = (taskForUser, circle) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(taskForUser);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = circle();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer && i === 2) {
      console.log(`Correct!\nCongratulations, ${username}!`);
    } else if (correctAnswer === userAnswer && i < 2) {
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }
};

export default game;