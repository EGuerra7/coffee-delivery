import styled from "styled-components";

export const CartContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;

    h2{
        font-family: ${props => props.theme["font-balo"]};
        font-size: 1.175rem;
        font-weight: bold;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Heading = styled.header`
    display: flex;
    align-items: flex-start;
    gap: 1.125rem;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }
    
    h3{ 
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    span{
        font-size: 0.875rem;
    }
`

export const HeadingPayment = styled(Heading)``

export const HeadingAdress = styled(Heading)``

const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
    max-width: 45rem;
`

export const AdressContainer = styled(FormsContainer)`
`
export const PaymentContainer = styled(FormsContainer)`
    margin-top: 1rem;
`
export const CartTotal = styled(FormsContainer)`
    border-radius: 6px 44px 6px 44px;
`


export const AdressForm = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    gap: 1rem;
    box-sizing: border-box;
    

    input {
        padding: 0.5rem;
        font-size: 0.875rem;
        width: 100%;
        border: 1px solid ${props => props.theme["base-button"]};
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};
        border-radius: 4px;

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }
    }

    input:nth-child(1){
        grid-column: span 1; 
    }

    input:nth-child(2) {
        grid-column: span 4; 
    }

    
    input:nth-child(3){
        grid-column: span 1; 
    }

    input:nth-child(4){
        grid-column: span 3;
    }
    
    input:nth-child(5){
        grid-column: span 1;
    }

    input:nth-child(6){
        grid-column: span 2;
    }

    input:nth-child(7){
        grid-column: span 0.25;
    }

`

export const PaymentOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const PaymentInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .description-payment{
            font-size: 0.875rem;

        }

        .value{
            font-size: 1rem;
        }

        b{
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.25rem;
            font-weight: bold;
        }
    }
`

export const SubmitButton = styled.button`
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};
    border: 0;
    border-radius: 6px;
    padding: 0.75rem;

    font-size: 0.875rem;
    font-weight: bold;
    line-height: 160%;

    transition: .2s;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme["yellow-dark"]};
    }
`



