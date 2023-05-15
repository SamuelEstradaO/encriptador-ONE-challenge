import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyler = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    body{
        background-color: #2b3337;
        color: #eef6fb;
    }
    html{

        font-size: 20px;
    }
`;
export const Button = styled.button`
background-color: #ffc107;
color: #eef6fb;
border: none;
font-size: 1.1rem;
transition: all 1s;
&:hover{
    background-color: #dc932d;
    transform: scale(1.2);
}
`
export const P = styled.p`
background-color: #dc932d;
color: #eef6fb;
border: none;
font-size: 1.1rem;
`
export const Textarea = styled.textarea`
    border-radius: 1rem;
    background-color: #2b3337;
    color: #ffc107;
    border: none;
    height: 100%;
    width: 100%;
    max-width: 90%;
    resize: none;
    &:hover, :focus{
        border: none;
        outline: 3px solid #ffc107;
    }
    ::placeholder{
        color: #eef6fb;
    }
`

export const theme = {
    body: "#2b3337",
    bg: "#222b2f",
    text: "#eef6fb",
    fill: "#dc932d"

}