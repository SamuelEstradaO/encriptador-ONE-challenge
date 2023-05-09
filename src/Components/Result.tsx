import React, { FunctionComponent, useRef } from "react";
import useCopyToClipboard from "../CustomHooks/useCopyToClipboard";

interface Props {
    result: string;
}
const Result: FunctionComponent<Props> = ({ result }) => {
    const [value, copy] = useCopyToClipboard();
    const ref = useRef<HTMLParagraphElement | null>(null)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        copy(ref.current?.textContent || "");
        console.log(value);
    }
    return (
        <div>
            {result.length > 0 && <p ref={ref}>{result}</p>}
            {value}
            <button onClick={handleClick}>Copiar</button>
        </div>
    )
};
export default Result;