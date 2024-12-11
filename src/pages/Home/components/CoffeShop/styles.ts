import styled from "styled-components";

 export const CoffeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    padding-bottom: 3rem;

        h1{
            font-size: ${props => props.theme["font-balo"]};
            font-size: 2rem;
            font-weight: bolder;
        }
 `

 export const CoffesSection = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-wrap: wrap;
 `