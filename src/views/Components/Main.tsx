import React, { useState } from "react";
import Result from "./Result";
import InputForm from "./InputForm";
import styled from "styled-components";

const MainContainer = styled.main`
height: 100vh;
@media (min-width: 768px){
max-height: 75vh;
}
`

const Main: React.FunctionComponent = () => {
    const [result, setResult] = useState<string>("")
    return (
        <MainContainer className="col-12 container-fluid mb-md-3 px-0 row mx-0" >
            <InputForm setResult={setResult} />
            <Result result={result} />
        </MainContainer>
    )
};
export default Main;