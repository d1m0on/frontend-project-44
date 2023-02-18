import readlineSync from 'readline-sync';

const randomNumber = (min = 1, max = 99) => Math.round(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;
const rounds = 3;

const startGame = (questionAndAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello,${name}`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratualtions ${name}!`);
};

const questionAndAnswer = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const start = () => startGame(questionAndAnswer, description);
start();
