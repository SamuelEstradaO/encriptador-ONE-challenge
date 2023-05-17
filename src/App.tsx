import './App.css';
import styled from 'styled-components';
import { GlobalStyler } from './styles';
import Home from './views';

const Div = styled.div`
  background-color: #222b2f;
  height: 100%;
`

function App() {
  return (
    <>
      <GlobalStyler />
      <Div className="container py-3">
        <Home />
      </Div>
    </>
  );
}

export default App;
