// import React, { useState } from "react";

// const Counter = () => {
//   const [value, setValue] = useState(0);

//   const counterDown = () => {
//     setValue(value - 1);
//   };

//   const counterUp = () => {
//     setValue(value + 1);
//   };

//   return (
//     <>
//       <h1>현재 counter값은 {value} 이다.</h1>
//       <button onClick={counterUp}>Up</button>
//       <button onClick={counterDown}>Down</button>
//     </>
//   );
// };

// export default Counter;

// useReducer를 사용하여 다시 구성.

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        value: state.value - 1,
      };
    default:
      return false;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <h1>현재 counter값은 {state.value}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Up</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Down</button>
    </>
  );
};

export default Counter;
