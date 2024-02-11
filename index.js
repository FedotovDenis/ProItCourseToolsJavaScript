/*
Урок тема Інструменти JavaScript №1

console.log('Hello')
*/

/*
Домашнє завдання тема Інструменти JavaScript №1
Напишіть код на Node.js, який ініціалізує новий проект
(створює файл `package.json`), встановлює пакет `lodash`
 і використовує одну з його функцій для виведення масиву без першого елементу.
 Не забудьте включити коментарі до коду, що пояснюють кроки.

const removeFirstElement = (arr) => {
    // Використовуємо функцію slice() з пакету lodash для видалення першого елементу з масиву
    return arr.slice(1);
  }
  // Створюємо масив
  const massif = [1, 2, 3, 4, 5];

  // Виводимо масив без першого елементу
  console.log(removeFirstElement(massif));
  */

/*
Домашнє завдання тема Інструменти JavaScript №2
Напишіть конфігураційний файл для Rollup (`rollup.config.js`),
який дозволить збірку JavaScript-файлу з використанням модуля "lodash-es".
 У вашому конфігураційному файлі має бути вказано вхідний файл (наприклад, `index.js`),
 вихідний файл (наприклад, `bundle.js`) та плагін для розпізнавання зовнішніх модулів
 (`nodeResolve`).

// Імпортуємо функцію camelCase з бібліотеки Lodash-es
import { camelCase } from 'lodash-es';

// Оголошуємо змінну str для зберігання початкового рядка
let str = 'Hello World';

// Перетворюємо str у camelCase формат за допомогою функції camelCase з Lodash-es
str = camelCase(str);

// Виводимо перетворений рядок в консоль
console.log(str); // Виведе "helloWorld"
*/

/*
Урок №3
Лінтери та форматери: Як підтримувати якість коду за допомогою ESLint та Prettier.
const removeFirstElement = (arr) => {
}
const massif = [1, 2, 3, 4, 5];
console.log(removeFirstElement(massif));
*/

/*
Домашне завдання №5
Напишіть невеликий фрагмент коду на JavaScript, який демонструє зміну 
вмісту елементу на веб-сторінці без повного перезавантаження сторінки 
(симулюючи ефект hot reloading).

// Створюємо елемент
// Цей код створить елемент з класом "my-element"
const element = document.querySelector(".my-element");

// Завантажуємо новий вміст
// Цей код заповнить елемент текстом "Новий вміст"
element.textContent = "Новий вміст";

// Встановлюємо обробник події `DOMContentLoaded`
// Цей код встановить обробник події, який буде спрацьовувати
// після того, як DOM-дерево сторінки буде повністю завантажено
document.addEventListener("DOMContentLoaded", () => {
  // Замінюємо вміст елемента
  // Цей код замінить вміст елемента на "Новий вміст"
  element.textContent = "Новий вміст";
});
*/

/*
React
Домашне завдання урок №1
Створіть простий компонент React "MyComponent", 
який відображає текст "Привіт, світ!" у тегу `<h1>`. 
Використовуйте JSX для написання цього компоненту.


import React from 'react';

const MyComponent = () => {
  return <h1>Привіт, світ!</h1>;
};

const App = () => {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
*/
