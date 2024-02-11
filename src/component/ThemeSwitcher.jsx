import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-switch';

function ThemeSwitcher() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDark]);

  const handleChange = (checked) => {
    setIsDark(checked);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto">
      <header className="flex justify-center items-center text-white bg-gray-800 p-4">
        <a href="#" className="underline hover:no-underline mr-4">Counter</a>
        <a href="#" className="underline hover:no-underline mr-4">Joke</a>
        <a href="#" className="underline hover:no-underline">Posts</a>
        <Switch
          checked={isDark}
          onChange={handleChange}
          uncheckedIcon={false}
          checkedIcon={false}
          className="ml-4"
        />
      </header>
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleClick}
        >
          Збільшити ({count})
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
