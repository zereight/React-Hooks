import React, { useState, useEffect } from "react";

const Info = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("렌더링 완료");
  });

  useEffect(() => {
    console.log("마운트 될 때만 실행");
  }, []);

  useEffect(() => {
    console.log("FirstName값이 변경될때만 실행");
  }, [firstName]);

  useEffect(() => {
    console.log("마지막 처리 전 출력");
    return () => console.log("마지막처리 출력");
  });

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <input onChange={onChangeFirstName} placeholder="FirstName" />
      <input onChange={onChangeLastName} placeholder="LastName" />

      <h1>
        My Name is {firstName} {lastName}
      </h1>
    </>
  );
};

export default Info;
