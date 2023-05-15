import React, { FunctionComponent, SetStateAction, useEffect, useState } from "react";
import { Button, Textarea } from "../../styles";
import styled from "styled-components";
import { useDebounce } from "../../CustomHooks/useDebounce";

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
        setinputText(event.currentTarget.value.toLowerCase())
    }
    const handleSelection = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.id);
        setSelection(event.currentTarget.id)
    }
    return (
        <form className="col-md-8 container-fluid px-3 h-100 position-relative">
            <div style={{ maxHeight: "15%" }} className="btn-group col-12 px-5 mb-3" role="group" aria-label="encrypt/decrypt options" >
                <input type="radio" className="btn-check" name="btnradio" id="encriptar" autoComplete="off" defaultChecked onClick={handleSelection} />
                <label className="btn btn-outline-warning" htmlFor="encriptar">Encriptar</label>

                <input type="radio" className="btn-check" name="btnradio" id="desencriptar" autoComplete="off" onClick={handleSelection} />
                <label className="btn btn-outline-warning" htmlFor="desencriptar">Desencriptar</label>
            </div>
            <Textarea style={{ maxHeight: "80%" }} name="input-text" id="input-text" className="col-12 p-2 position-absolute bottom-0 start-50 translate-middle-x" placeholder="Ingrese el texto aquí" onChange={handleChange} value={inputText} />
        </form>
    )
}


export default InputForm