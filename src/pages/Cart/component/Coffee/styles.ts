import styled from "styled-components";

export const CoffeeCartContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3.125rem;

    border-bottom: 1px solid ${props => props.theme["base-button"]};
    padding: 1.6rem 2.5rem;

    .infos{
        display: flex;
        align-items: stretch;
        gap: 1.25rem;

        img{
        width: 4rem;
        height: 4rem;
        }
    }

    .infos-text{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        font-size: 1rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    .infos-inputs{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .value{
        font-size: 1rem;
        line-height: 130%;
        font-weight: bold;
    }   


    &:first-child {
    padding-top: 0;
  }
    
`

export const RemoveButton = styled.button`
    background-color:  ${props => props.theme["base-button"]};
    border: 0;
    border-radius: 6px;
    
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    font-size: 0.875rem;
    line-height: 160%;

    cursor: pointer;
    transition: .2s;

    &:hover{
        background-color: ${props => props.theme["base-hover"]};
    }
`