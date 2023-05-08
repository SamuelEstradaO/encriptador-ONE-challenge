import React, { FunctionComponent, SetStateAction } from "react";
interface Props {
    setResult: React.Dispatch<SetStateAction<string>>;
}


const InputForm: FunctionComponent<Props> = () => {
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value.toLowerCase())
    }
    return (
        <form>
            <textarea name="input-text" id="input-text" cols={30} rows={10} placeholder="Ingrese el texto aquí"></textarea>
            <input type="button" value="Encriptar" onClick={handleClick} />
            <input type="button" value="Desencriptar" onClick={handleClick} />
        </form>
    )
}

export default InputForm