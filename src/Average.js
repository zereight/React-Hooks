import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  // 이거안해주고 getAverage(list) 함수로 값 가져오면 input값이 바뀔때도 getAverage 호출해서 비효율적
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>Average: </b> {avg}
      </div>
    </>
  );
};

export default Average;
