import React, { useState } from 'react';

const App = () => {
  const [buttonText, setButtonText] = useState('Click Me');

  const handleClick = () => {
    setButtonText('Button Clicked');
  };

  return (
    <div>
        <header>
        <h2>Hello From React App 👋</h2>
      </header>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default App;
