import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyler = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    body{
        background-color: #2b3337;
        color: #eef6fb;
    }
`;
export const Button = styled.button`
background-color: #dc932d;
color: #eef6fb;
border: none;
font-size: 1rem;
`

export const theme = {
    body: "#2b3337",
    bg: "#222b2f",
    text: "#eef6fb",
    fill: "dc932d"

}