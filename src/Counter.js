import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const counterDown = () => {
    setValue(value - 1);
  };

  const counterUp = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>현재 counter값은 {value} 이다.</h1>
      <button onClick={counterUp}>Up</button>
      <button onClick={counterDown}>Down</button>
    </>
  );
};

export default Counter;
