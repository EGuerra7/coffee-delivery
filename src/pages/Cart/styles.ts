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
`

const Heading = styled.header`

`

const FormsContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
    max-width: 40rem;
`

export const HeadingAdress = styled(Heading)``




export const AdressContainer = styled(FormsContainer)`
    
`



export const HeadingPayment = styled(Heading)`

`

export const PaymentContainer = styled(FormsContainer)`
    margin-top: 1rem;
`