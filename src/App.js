import React from "react";
import styled from "styled-components";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Counter />
      <Info />
    </Container>
  );
}

export default App;
