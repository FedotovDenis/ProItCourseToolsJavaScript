/*
Напишіть фрагмент коду на JavaScript, який демонструє створення простого юніт-тесту за допомогою Jest. 
Цей тест повинен перевіряти функцію, яка приймає два числа як аргументи і повертає їх суму.
*/




import { sum, multiply, subtract } from './sum';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});



test('adds 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('adds 4 - 4 to equal 0', () => {
  expect(subtract(3, 4)).toBe(0);
});

