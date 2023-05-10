import { FunctionComponent, useState } from "react";
import Result from "./Result";
import InputForm from "./InputForm";
const Main: FunctionComponent = () => {
    const [result, setResult] = useState<string>("")
    return (
        <main className="row">
            <InputForm setResult={setResult} />
            <Result result={result} />
        </main>
    )
};
export default Main;