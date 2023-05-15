import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import useCopyToClipboard from "../../CustomHooks/useCopyToClipboard";
import { Button, P, Textarea as TextareaTemplate } from "../../styles";
import styled from "styled-components";
import { useDebounce } from "../../CustomHooks/useDebounce";

const Textarea = styled(TextareaTemplate)`
    background-color: #eef6fb;
    color: #222b2f;
    height: 100%;
`
const Div = styled.div`
    background-color: #eef6fb;
    border-radius: 1rem;
    width: 90%;
    height: 100%;
    color: black;
`
interface Props {
    result: string;

}
const Result: FunctionComponent<Props> = ({ result }) => {
    console.log(result);
    const [value, copy] = useCopyToClipboard();
    const [showButton, setShowButton] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false)
    const ref = useRef<HTMLTextAreaElement | null>(null)
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const copyResult = await copy(ref.current?.textContent || "");
        copyResult ? setError(false) : setError(true);
        setShowButton(false);
        setTimeout(() => {
            setShowButton(true)
            setError(false)
        }, 1500);
    }
    return (
        <div className="col-md-4 position-relative container">
            {result.length === 0 && <Div className="p-4 row mx-auto">
                <img src="/the_search.svg" alt="" className="img-fluid col-12 m-auto" style={{ maxWidth: "290px" }} />
                <h3 className="text-center" style={{ fontSize: "1.2rem" }}>Ningún mensaje fue encontrado</h3>
            </Div>}
            {result.length > 0 && <>
                <Textarea readOnly className="p-2 position-absolute bottom-0 start-50 translate-middle-x" ref={ref} value={result}></Textarea>
                {showButton && <Button className="badge rounded-pill py-2 mb-2 position-absolute bottom-0 start-50 translate-middle-x" onClick={handleClick}>Copiar</Button>}
                {!showButton && !error && <P className="user-select-none badge rounded-pill py-2 mb-2 position-absolute bottom-0 start-50 translate-middle-x">Copiado</P>}
                {!showButton && error && <P className="user-select-none badge rounded-pill text-bg-danger py-2 mb-2 position-absolute bottom-0 start-50 translate-middle-x">Copiado</P>}

            </>}

        </div>
    )
};
export default Result;