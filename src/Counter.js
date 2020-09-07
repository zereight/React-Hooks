import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>현재 counter값은 {value} 이다.</h1>
    </>
  );
};

export default Counter;
