import React from "react";
import styled from "styled-components";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import ContextSample from "./useContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Counter />
      <Info />
      <ContextSample />
    </Container>
  );
}

export default App;
