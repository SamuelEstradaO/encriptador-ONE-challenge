import { FunctionComponent } from "react";

interface Props {
    result: string;
}
const Result: FunctionComponent<Props> = () => {

    return (
        <div>
            <button>Copiar</button>
        </div>
    )
};
export default Result;