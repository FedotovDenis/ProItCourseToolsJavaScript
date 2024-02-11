/*
Урок №4
Як використовувати стан та реквізити для управління даними компонента
*/
import React from 'react';
import Display from './display';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <Display count={this.state.count} />
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

/*
Домашне завдання модуль React
Урок №4
Напишіть React-компонент "TemperatureConverter", 
який включає в себе текстове поле для введення температури 
в градусах Цельсія та показує еквівалентну температуру в градусах Фаренгейта. 
Використовуйте стан для зберігання значення температури та властивості для 
передачі обчисленого значення в інший компонент, який відображає результат.
*/

//import React, { useState } from 'react'; // возможно эту строку можно будет удолить

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
  };

  const calculateFahrenheit = () => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div>
      <input
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Температура в градусах Цельсія"
      />
      <p>Температура в градусах Фаренгейта: {calculateFahrenheit()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConverter />
      </header>
    </div>
  );
}

//export default App; // возможно эту строку можно будет удолить
