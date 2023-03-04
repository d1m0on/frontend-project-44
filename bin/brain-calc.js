#!/usr/bin/env node

import readlineSync from 'readline-sync';

// функция получения случайного числа
const randomNumber = (min = 1, max = 99) => Math.round(Math.random() * (max - min) + min);
// функция получения случайного выражения
const getExpression = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const num1 = randomNumber();
  const num2 = randomNumber();
  const expression = `${num1} ${operation} ${num2}`;
  return expression;
};

// функция расчета случайного выражения
// eslint-disable-next-line radix
const isExpressionEquall = (expression) => parseInt(expression);

// логика игры
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
  console.log(`Congratulations ${name}!`);
};

// функция проверки ответа на вопрос
const questionAndAnswer = () => {
  const question = getExpression();
  const answer = isExpressionEquall(question) ? 'yes' : 'no';
  return [question, answer];
};
const description = 'What is the result of the expression?';

// функция запуска игры
const start = () => startGame(questionAndAnswer, description);
start();
