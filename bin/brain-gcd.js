#!/usr/bin/env node

import startGame from '../src';

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
      num1 -= num2;
    } else {
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
