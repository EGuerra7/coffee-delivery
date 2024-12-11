import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-family: ${props => props.theme["font-balo"]};
        font-size: 1.175rem;
        font-weight: bold;
    }
`