import styled from "styled-components";

export const InputNumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    gap: 0.5rem;
    background-color: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    font-size: 1.25rem;
`

export const ButtonInputNumber = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme["purple"]};
    transition: .1s;
    

    &:hover{
        color: ${props => props.theme["purple-dark"]};
        font-weight: bold;
    }

`