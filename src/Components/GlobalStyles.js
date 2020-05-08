import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:rgba(20, 20, 20, 1);
        color: white;
        padding-top:50px;
    }
    #root{
        position: relative;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
    }
    button{
        cursor: pointer;
        border-width: 0px;
        border-style: none;
        border-color: transparent;
        border-image: initial;
        outline: none 0px;
        background: none;
        padding: 0px;
    }
    input{
        font-size: 16px;
        letter-spacing: -0.5px;
        line-height: normal;
        font-weight: 400px;
    }
`;

export default globalStyles;
