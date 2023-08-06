import readlineSync from 'readline-sync';

const game = (taskForUser, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(taskForUser);
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = getQuestion();
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
