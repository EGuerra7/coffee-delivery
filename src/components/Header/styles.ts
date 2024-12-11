import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    section{
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }
`
export const PlaceItem = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.875rem;
`

export const ShopButton = styled.button`
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
`