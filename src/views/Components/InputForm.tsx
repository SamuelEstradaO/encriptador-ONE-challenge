import React, { FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";
import { Textarea as TextareaTemplate } from "../../styles";
import { useDebounce } from "../../CustomHooks/useDebounce";
import styled from "styled-components";

const Div = styled.div`
max-height: 20vh;
    @media (min-width: 768px){
        max-height: 8vh;
    }
`
const Textarea = styled(TextareaTemplate)`
    max-height: 30vh;
    @media (min-width: 768px){
        max-height: 80%;
    }
`
const Form = styled.form`
    @media (max-width: 767px){
        height: 60vh;
        max-height: 60vh;
    }
`

interface Props {
    setResult: React.Dispatch<SetStateAction<string>>;
}

const textOptions: { encriptar: (param: string) => string, desencriptar: (param: string) => string } = {
    encriptar: (text: string) => {
        let result: string = text.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")
        return result
    },
    desencriptar: (text: string) => {
        let result: string = text.replaceAll("ufat", "u")
            .replaceAll("ober", "o")
            .replaceAll("ai", "a")
            .replaceAll("imes", "i")
            .replaceAll("enter", "e")
        return result
    }
}

const InputForm: FunctionComponent<Props> = ({ setResult }) => {
    const [inputText, setinputText] = useState<string>("");
    const [selection, setSelection] = useState<string>("encriptar");
    const ref = useRef<HTMLDivElement | null>(null)
    const debouncedValue = useDebounce<string>(inputText, 500)
    const handleConvert = () => {
        const key: string = selection;
        console.log(selection)

        setResult(textOptions[key as 'encriptar' | 'desencriptar'](inputText))
    }
    useEffect(() => {
        handleConvert()
    }, [debouncedValue, selection])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setinputText(event.currentTarget.value.replace(/[^\w\s.,!¿?¡]/gi, "").toLowerCase())
    }
    const handleSelection = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.id);
        setSelection(event.currentTarget.id)
    }
    useEffect(() => {
        const windowEvent = () => {
            const width = window.innerWidth;
            const isMobile = width < 768;
            ref.current?.classList.remove(isMobile ? "btn-group" : "btn-group-vertical");
            ref.current?.classList.add(!isMobile ? "btn-group" : "btn-group-vertical");
        };
        windowEvent()
        const eventListener = () => windowEvent()
        window.addEventListener("resize", eventListener)

        return () => {
            window.removeEventListener("resize", eventListener)
        }
    }, []);
    return (
        <Form className="col-sm-12 col-md-8 px-3 container-fluid position-relative row mb-sm-3 mb-0 mx-0">
            <Div ref={ref} className=" col-12 px-5 mb-sm-2 mb-md-3 justify-content-center" role="group" aria-label="encrypt/decrypt options" >
                <input type="radio" className="btn-check" name="btnradio" id="encriptar" autoComplete="off" defaultChecked onClick={handleSelection} />
                <label className="btn btn-outline-warning d-flex align-items-center justify-content-center" htmlFor="encriptar">Encriptar</label>

                <input type="radio" className="btn-check" name="btnradio" id="desencriptar" autoComplete="off" onClick={handleSelection} />
                <label className="btn btn-outline-warning d-flex align-items-center justify-content-center" htmlFor="desencriptar">Desencriptar</label>
            </Div>
            <Textarea name="input-text" id="input-text" className="col-12 p-2 position-absolute bottom-0 start-50 translate-middle-x" placeholder="Ingrese el texto aquí" onChange={handleChange} value={inputText} />
            <p className="user-select-none position-absolute bottom-0 start-50 translate-middle-x text-center fs-6 fst-italic px-4">No se permiten caracteres especiales exceptuando: . , ¡ ! ¿ ? _</p>
        </Form>
    )
}


export default InputForm