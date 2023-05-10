import { log } from "console";
import React, { FunctionComponent, SetStateAction, useState } from "react";
import { Button } from "../../styles";
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
    const [inputText, setinputText] = useState<string>("")
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const key: string = event.currentTarget.innerText.toLowerCase();
        console.log(event.currentTarget.innerText.toLowerCase())

        setResult(textOptions[key as 'encriptar' | 'desencriptar'](inputText))
    }
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setinputText(event.currentTarget.value)
    }
    return (
        <form className="col-md-8 container-fluid px-3">
            <div className="col-12 px-5 mb-3">
                <textarea name="input-text" id="input-text" className="w-100" cols={30} rows={10} placeholder="Ingrese el texto aquí" onChange={handleChange} value={inputText}></textarea>
            </div>
            <div className="col-12 d-flex justify-content-evenly">
                <Button type="button" onClick={handleClick} className="badge rounded-pill py-2" >Encriptar</Button>
                <Button type="button" onClick={handleClick} className="badge rounded-pill py-2" >Desencriptar </Button>
            </div>
        </form>
    )
}

export default InputForm