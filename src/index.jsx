/*
React
Урок №2
Як використовувати синтаксис JSX для відображення компонентів на веб-сторінці
*/

/*
Домашне завдання модуль React
Урок №2
Напишіть JSX-код, який створює фрагмент з трьома 
елементами: заголовком <h1>, параграфом <p> і кнопкою <button>. 
Використовуйте фрагменти для групування цих елементів. 
Текст у заголовку - "Привіт, світ!", у параграфі - "Це приклад фрагменту", а на кнопці - "Натисни мене".

// import React from 'react';

import ReactDOM from 'react-dom/client';
import React from 'react';

// const name = 'Alex';
const element = (
  <>
    <h1>Hello World, {name}</h1>
    <p>This is a fragment</p>
    <button type="button">Click me</button>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
*/

/*
Урок №3
Як створити компонент React та його методи життєвого циклу
*/
/*
Приклад функціонального програмування в React

import { createRoot } from 'react-dom';

function Welcome() {
  return <h1>Hello World</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/

/*
Приклад класа в React

import { createRoot } from 'react-dom';
import React from 'react';

function Welcome(props) {
  return <h1>Hello World {props.name}</h1>;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Welcome name="Bob" />
      <Counter />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/

/*
Домашне завдання модуль React
Урок №3
Напишіть код класового компонента React,
 який містить стан з назвою `color`, ініціалізований як 'blue'. 
 Додайте метод `changeColor`, який змінює стан `color` на 'red'. 
 У методі `render`, компонент має відображати текст "Current color: [color]", де [color] - це поточний колір із стану.


import { createRoot } from 'react-dom'; // Імпортуємо createRoot для монтування React-додатку
import React from 'react'; // Імпортуємо React для створення компонентів

// Класовий компонент, що змінює колір
class ColorChanger extends React.Component {
  constructor(props) {
    super(props); // Викликаємо конструктор батьківського класу
    this.state = { color: 'blue' }; // Ініціалізуємо стан компонента кольором 'blue'
  }

  changeColor = () => {
    // Метод для зміни кольору за допомогою setState
    this.setState({ color: 'red' }); // Оновлюємо стан до червоного кольору
  };

  render() {
    return (
      <div>
        <h1>Current color: {this.state.color}</h1> {/* Виводимо поточний колір із стану *}
        <button onClick={this.changeColor}>Change Color</button> {/* Кнопка для зміни кольору *}
      </div>
    );
  }
}

// Функціональний компонент App, що містить ColorChanger
function App() {
  return (
    <div>
      <ColorChanger /> {/* Рендеримо компонент ColorChanger *}
    </div>
  );
}

// Монтування React-додатку в кореневий елемент DOM
const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/

/*
Урок №4
Як використовувати стан та реквізити для управління даними компонента

import { createRoot } from 'react-dom';
import Counter from './component/counter';
import React from 'react';
*/
/* Урок № 5
Як використовувати обробники подій для реагування на взаємодію користувача
class MyComponent extends React.Component {
  handleClick = (id) => {
    alert( `Button ${id} clicked!` );
  };

  render() {
    return <button onClick={ () => this.handleClick(100) }>Click me</button>
  }
}

function App() {
  return (
    <div>
      <MyComponent />
      <Counter />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/

/* 
Домашне завданння урок № 5

import { createRoot } from 'react-dom';
import Counter from './component/counter';
import React from 'react';


class IncludesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Натисни мене' };
  }

  handleClick = () => {
    this.setState({
      text: 'Кнопку натиснуто',
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          {this.state.text}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <IncludesButton />
      <Counter />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'; // змінено імпор
import ReactDOM from 'react-dom';
import ThemeSwitcher from './component/ThemeSwitcher';
import './index.css';


function App() {
  return (
    <div>
      <ThemeSwitcher />
    </div>
  );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);
