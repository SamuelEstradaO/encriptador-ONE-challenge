import { log } from "console";
import React, { FunctionComponent, SetStateAction, useState } from "react";
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
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        const key: string = event.currentTarget.value.toLowerCase();
        console.log(event.currentTarget.value.toLowerCase())

        setResult(textOptions[key as "encriptar" | "desencriptar"](inputText))
    }
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setinputText(event.currentTarget.value)
    }
    return (
        <form>
            <textarea name="input-text" id="input-text" cols={30} rows={10} placeholder="Ingrese el texto aquí" onChange={handleChange} value={inputText}></textarea>
            <input type="button" value="Encriptar" onClick={handleClick} />
            <input type="button" value="Desencriptar" onClick={handleClick} />
        </form>
    )
}

export default InputForm