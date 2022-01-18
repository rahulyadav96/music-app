import styled from "styled-components";

export const Forms = styled.form`
    text-align:left;
    width:30%;
    margin:auto;
    min-width:311px;
    display:flex;
    flex-direction:column;
    gap:20px;
    background-color: rgb(105, 201, 172);;
    padding:15px;
    border-radius:8px;
    height:auto;
    & >div>label{
        display:block;
        font-size:20px;
        margin:0 0 5px 0;
    }
    & >div>input{
        width:100%;
        font-size:16px;
        height:25px;
       
        border:none;
    }
`