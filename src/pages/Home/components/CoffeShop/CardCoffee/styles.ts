import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
   
    display: flex;
    flex-direction: column;
    align-items: center;

    
    width: 16rem;
    height: 19.375rem;
    border-radius: 6px 36px 6px 36px;

    main{
        margin-top: -1.25rem;
    }
`