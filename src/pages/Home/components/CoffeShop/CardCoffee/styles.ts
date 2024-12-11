import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
   
    display: flex;
    flex-direction: column;
    align-items: center; 

    height: 19.375rem;
    border-radius: 6px 36px 6px 36px;

    main{
        margin-top: -2.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        width: calc(100% - 1.5rem);
        height: 120%;

        img{
            max-width: 7.5rem;
            max-height: 7.5rem;
        }
    }
`

export const CoffeeTypes = styled.div`
    margin-top: 0.65rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.275rem;

        span{
            background-color: ${props => props.theme["yellow-light"]};
            color:  ${props => props.theme["yellow-dark"]};
            padding: 0.5rem;
            border-radius: 100px;
            font-size: 0.625rem;
            font-weight: bold;
            line-height: 1.3;
        }
`

export const CoffeInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3{
        font-family: ${props => props.theme["font-balo"]};
        font-size: 1.25rem;
        font-weight: bold;
        color: ${props => props.theme["base-subtitle"]};
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
    }
`


export const CoffeeValues = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .value{
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
        margin-right: 1rem;

        b{
            font-size: 1.5rem;
            font-family: ${props => props.theme["font-balo"]};
        }
    }

    .shop_btn{
        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme.white};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 8px;
        border: 0;
        cursor: pointer;
        transition: .1s;

        &:hover {
            background-color: ${props => props.theme["purple"]};
        }
    }
`