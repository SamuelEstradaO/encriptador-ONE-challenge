import { FunctionComponent, useState } from "react";
import Result from "./Result";
import InputForm from "./InputForm";
const Main: FunctionComponent = () => {
    const [result, setResult] = useState<string>("")
    return (
        <>
            <InputForm setResult={setResult} />
            <Result result={result} />
        </>
    )
};
export default Main;