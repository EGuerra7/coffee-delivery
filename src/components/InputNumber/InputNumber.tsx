import { Minus, Plus } from "phosphor-react";
import { ButtonInputNumber, InputNumberContainer } from "./styles";


type Props = {
  countAmount: number
  handleMinusAcount: () => void
  handlePlusAcount: () => void
}

export default function InputNumber({
  countAmount,
  handleMinusAcount,
  handlePlusAcount
  }: Props) {
  
  return (
    <InputNumberContainer>
        <ButtonInputNumber onClick={handleMinusAcount}><Minus size={14}/></ButtonInputNumber>
        <span>{ countAmount }</span>
        <ButtonInputNumber onClick={handlePlusAcount}><Plus size={14} /></ButtonInputNumber>
    </InputNumberContainer>
  )
}
