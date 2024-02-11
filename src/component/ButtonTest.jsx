import React, { useState } from 'react';
import CustomButton from './CustomButton';

function ButtonTest() {
  const [buttn, setButtn] = useState(true);

  function handleClick() {
    setButtn(!buttn);
  }

  return (
    <div>
      <div>
        {/* Використовуємо компонент CustomButton та передаємо функцію handleClick */}
        <CustomButton onClick={handleClick} />
        {buttn ? 'Ok' : 'No'}
      </div>
      <div>
        <h1>Your Content</h1>
      </div>
    </div>
  );
}

export default ButtonTest;
