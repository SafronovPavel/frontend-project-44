import readlineSync from 'readline-sync';

const runGame = (taskForUser, getRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(taskForUser);
  const countQuestions = 3;

  for (let i = 0; i < countQuestions; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log(`Correct!\nCongratulations, ${username}!`);
    } if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }
};

export default runGame;
