#!/usr/bin/env node

import readlineSync from 'readline-sync';

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
// функция получения случайного числа
const randomNumber = (min = 1, max = 99) => Math.round(Math.random() * (max - min) + min);
// функция получения случайного выражения
const getExpression = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const expression = `${num1} ${num2}`;
  return expression;
};
// функция по нахождению НОД
const getGcd = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      // eslint-disable-next-line no-param-reassign
      num1 -= num2;
    } else {
      // eslint-disable-next-line no-param-reassign
      num2 -= num1;
    }
  }
  return num1;
};
const questionAndAnswer = () => {
  const question = getExpression();
  const answer = getGcd();
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';
const start = () => startGame(questionAndAnswer, description);
start();
