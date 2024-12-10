import styled from "styled-components";

export const IntroSection = styled.div`
    margin-top: 5.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    main{
        display: flex;
        max-width: 36.75rem;
        flex-direction: column;
        gap: 3.5rem;

        div{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        

        h1{
            font-family: ${props => props.theme["font-balo"]};
            color: ${props => props.theme["base-title"]};
            font-weight: bold;
            font-size: 3rem;
            line-height: 2.8rem;
        }
        h2{
            font-size: 1.25rem;
            font-weight: 400;
        }
    }

    img{
        max-width: 29.75rem;
    }
`

export const IntroItens = styled.div`
    display: flex;
    gap: 2.5rem;
    color: ${props => props.theme["base-text"]};
    flex: 1;

    div{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        span{
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
    }
`

export const IconMoldure = styled.div<{ $color: string; }>`
    padding: 8px;
    border-radius: 9999px;
    background-color: ${props => props.theme[props.$color]};
`