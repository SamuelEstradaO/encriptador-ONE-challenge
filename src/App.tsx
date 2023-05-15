import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Components/Main';
import Header from './views/Components/Header';
import styled from 'styled-components';
import { GlobalStyler } from './styles';
import Home from './views';

const Div = styled.div`
  background-color: #222b2f;
  height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyler />
      <Div className=" container d-flex flex-column py-3">
        <Home />
      </Div>
    </>
  );
}

export default App;
