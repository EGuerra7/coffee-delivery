import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const IntroSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
`

export const IntroItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: ${props => props.theme["base-text"]};
    flex: 1;

    div{
        display: flex;
        gap: 2.5rem;

        span{
            display: flex;
            gap: 0.75rem;
        }
    }
`