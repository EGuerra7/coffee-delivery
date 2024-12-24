import styled from "styled-components";

export const SucessContainer = styled.div`
    display: flex;
    max-width: 72.5rem;
    margin: 0 auto;
    padding: 80px 20px;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;

    img {
        margin-bottom: -13px;
    }
`

export const Order = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const SucessHeading = styled.header` 
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
        color: ${({ theme }) => theme["yellow-dark"]};
        font-family: ${({theme}) => theme["font-balo"]};
        font-size: 2rem;
        margin: 0;
        line-height: 130%;
    }

    h3 {
        font-size: 1.25rem;
        margin: 0;
        line-height: 130%;
        color: ${({ theme }) => theme["base-subtitle"]};
    }
`

export const Info = styled.div`
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
        `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const InfoContent = styled.div`
    padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`