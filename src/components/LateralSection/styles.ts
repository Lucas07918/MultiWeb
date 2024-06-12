import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #D1D8C5;

    .LateralSection{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .LateralSection:hover{
        transition: 0.5s;
        background-color: #7E8EF1;
        cursor: pointer;
    }
`