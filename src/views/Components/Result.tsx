import React, { FunctionComponent, useRef, useState } from "react";
import useCopyToClipboard from "../../CustomHooks/useCopyToClipboard";
import { Button, P, Textarea as TextareaTemplate } from "../../styles";
import styled from "styled-components";

const Textarea = styled(TextareaTemplate)`
    background-color: #eef6fb;
    color: #222b2f;
    max-width: 95%;
`
const Div = styled.div`
    background-color: #eef6fb;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    color: black;
`
const Container = styled.div`
    @media (max-width: 767px){
        height: 100%;
        max-height: 30vh;
    }
`
interface Props {
    result: string;

}
const Result: FunctionComponent<Props> = ({ result }) => {
    const [value, copy] = useCopyToClipboard();
    const [showButton, setShowButton] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false)
    const ref = useRef<HTMLTextAreaElement | null>(null)
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const copyResult = await copy(ref.current?.textContent || "");
        setError(!copyResult);
        setShowButton(false);
        setTimeout(() => {
            setShowButton(true)
            setError(false)
        }, 1500);
    }
    return (
        <Container className="col-sm-12 col-md-4 mb-sm-2 mb-0">
            <div className="z-3 bg-black">
                <p>{error}</p></div>
            <div className="container-fluid position-relativer mx-0 row h-100">
                {result.length === 0 && <Div className="p-4 col-12 d-flex flex-wrap align-content-center justify-content-center">
                    <img src="/the_search.svg" alt="" className="img-fluid mb-1 d-none d-md-block" style={{ objectFit: "contain" }} />
                    <h3 className="text-center" style={{ fontSize: "1.2rem" }}>Ningún mensaje fue encontrado</h3>
                    <p className="text-center d-md-none">Ingresa el texto que desees encriptar o desencriptar</p>
                </Div>}
                {result.length > 0 && <div className="col-12">
                    <Textarea readOnly className="p-2 position-absolute bottom-0 start-50 translate-middle-x" ref={ref} value={result}></Textarea>
                    {showButton && <Button className="badge rounded-pill py-2 mb-2 position-absolute bottom-0 start-50 translate-middle-x" onClick={handleClick}>Copiar</Button>}
                    {!showButton && !error && <P className="user-select-none badge rounded-pill py-2 mb-2 position-absolute bottom-0 start-50 translate-middle-x">Copiado</P>}
                    {!showButton && error && <P className="user-select-none badge rounded-pill text-bg-danger py-2 mb-2 position-absolute bottom-0 start-50 translate-middle-x w-50">Error</P>}
                </div>}
            </div>

        </Container>
    )
};
export default Result;