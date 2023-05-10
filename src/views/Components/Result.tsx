import React, { FunctionComponent, useRef } from "react";
import useCopyToClipboard from "../../CustomHooks/useCopyToClipboard";
import { Button } from "../../styles";

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
        <div className="col-md-4">
            {result.length > 0 && <p ref={ref}>{result}</p>}
            {value}
            <Button className="badge rounded-pill py-2" onClick={handleClick}>Copiar</Button>
        </div>
    )
};
export default Result;